export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { getUidFromRequest } from '@/lib/auth';
import { createCheckoutSessionOneTime } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    const { uid, email } = await getUidFromRequest(req);
    const body = await req.json().catch(() => ({}));
    const priceId = body.priceId || process.env.ONE_TIME_PRICE_ID;
    if (!priceId) {
      return NextResponse.json({ error: 'Missing priceId and ONE_TIME_PRICE_ID' }, { status: 400 });
    }

    const session = await createCheckoutSessionOneTime({ priceId, uid, email });
    return NextResponse.json({ clientSecret: session.client_secret }, { status: 200 });
  } catch (err) {
    if (err instanceof Response) return err;
    console.error('create-checkout-session-one-time error', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

