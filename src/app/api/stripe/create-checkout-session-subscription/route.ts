export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { getUidFromRequest } from '@/lib/auth';
import { createCheckoutSessionSubscription } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    const { uid, email } = await getUidFromRequest(req);
    const body = await req.json().catch(() => ({}));
    const priceId = body.priceId || process.env.SUBSCRIPTION_PRICE_ID_MONTHLY;
    if (!priceId) {
      return NextResponse.json({ error: 'Missing priceId and SUBSCRIPTION_PRICE_ID_MONTHLY' }, { status: 400 });
    }

    const session = await createCheckoutSessionSubscription({ priceId, uid, email });
    return NextResponse.json({ clientSecret: session.client_secret }, { status: 200 });
  } catch (err: any) {
    if (err instanceof Response) return err;
    console.error('create-checkout-session-subscription error', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

