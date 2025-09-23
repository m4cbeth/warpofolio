export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { getUidFromRequest } from '@/lib/auth';
import { adminDb } from '@/lib/firebaseAdmin';
import { stripe } from '@/lib/stripe';
import dayjs from 'dayjs';

function firstLastOfMonth(input?: string) {
  const d = input ? dayjs(input) : dayjs();
  const start = d.startOf('month');
  const end = d.endOf('month');
  return { start: start.unix(), end: end.unix(), ym: start.format('YYYY-MM') };
}

export async function POST(req: Request) {
  try {
    const { uid } = await getUidFromRequest(req);
    const userSnap = await adminDb.collection('users').doc(uid).get();
    const role = userSnap.exists ? (userSnap.data()?.role as string | undefined) : undefined;
    if (role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await req.json().catch(() => ({}));
    const { month } = body; // optional ISO date string like '2025-08-01'
    const { start, end, ym } = firstLastOfMonth(month);

    const invoicesIter = stripe.invoices.list({ created: { gte: start, lte: end }, limit: 100 });
    const totalsByPrice: Record<string, number> = {};
    const currencyByPrice: Record<string, string> = {};
    let subscriptionCount = 0;
    let paymentCount = 0;

    for await (const inv of invoicesIter) {
      if (inv.status === 'paid') {
        paymentCount += 1;
        for (const line of inv.lines.data) {
          const priceId = line.price?.id || 'unknown';
          const amount = line.amount || line.amount_excluding_tax || 0;
          totalsByPrice[priceId] = (totalsByPrice[priceId] || 0) + amount;
          if (line.price?.currency) currencyByPrice[priceId] = line.price.currency;
        }
      }
      if (inv.subscription) subscriptionCount += 1;
    }

    // Derive MRR/ARR from recurring price totals (assuming monthly for simplicity)
    const mrr = Object.entries(totalsByPrice).reduce((acc, [priceId, amt]) => acc + amt, 0);
    const arr = mrr * 12;

    const reportDoc = {
      month: ym,
      start,
      end,
      totalsByPrice,
      currencyByPrice,
      subscriptionCount,
      paymentCount,
      mrr,
      arr,
      generatedAt: new Date(),
    };

    await adminDb.collection('reports').doc('monthly').collection('months').doc(ym).set(reportDoc, { merge: true });

    return NextResponse.json(reportDoc, { status: 200 });
  } catch (err) {
    if (err instanceof Response) return err;
    console.error('monthly-report error', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

