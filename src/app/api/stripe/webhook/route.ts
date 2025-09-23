export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { verifyWebhookEvent, stripe } from '@/lib/stripe';
import { adminDb } from '@/lib/firebaseAdmin';
import type Stripe from 'stripe';

export async function POST(req: Request) {
  let rawBody: string;
  try {
    rawBody = await req.text();
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }
  const signature = req.headers.get('stripe-signature');

  let event: Stripe.Event;
  try {
    event = verifyWebhookEvent(rawBody, signature);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const uid: string | undefined = (session.metadata?.uid as string | undefined) || (session.client_reference_id as string | undefined) || undefined;
        const customerId: string | null = typeof session.customer === 'string' ? session.customer : session.customer?.id ?? null;
        const mode = session.mode;
        if (uid) {
          const userRef = adminDb.collection('users').doc(uid);
          const updates: Record<string, unknown> = { updatedAt: new Date() };
          if (customerId) updates.stripeCustomerId = customerId;

          if (mode === 'payment') {
            // Record one-time payment
            const amount_total = session.amount_total; // in cents
            const currency = session.currency;
            const pi = session.payment_intent;
            const paymentsRef = userRef.collection('payments');
            await paymentsRef.add({
              amount: amount_total,
              currency,
              paymentIntentId: typeof pi === 'string' ? pi : pi?.id,
              createdAt: new Date(),
              source: 'checkout.session.completed',
            });
          } else if (mode === 'subscription') {
            const subId = typeof session.subscription === 'string' ? session.subscription : session.subscription?.id;
            if (subId) {
              const sub = await stripe.subscriptions.retrieve(subId);
              updates.subscriptionStatus = sub.status;
              updates.subscriptionId = sub.id;
              updates.currentPeriodEnd = sub.current_period_end;
              updates.priceId = sub.items.data[0]?.price?.id ?? null;
            }
          }
          await userRef.set(updates, { merge: true });
        }
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        const uid: string | undefined = invoice.metadata?.uid as string | undefined;
        if (uid) {
          const userRef = adminDb.collection('users').doc(uid);
          await userRef.set(
            {
              subscriptionStatus: 'active',
              currentPeriodEnd: invoice.lines?.data?.[0]?.period?.end ?? null,
              updatedAt: new Date(),
            },
            { merge: true }
          );
        }
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const uid: string | undefined = invoice.metadata?.uid as string | undefined;
        if (uid) {
          const userRef = adminDb.collection('users').doc(uid);
          await userRef.set(
            {
              subscriptionStatus: 'past_due',
              updatedAt: new Date(),
            },
            { merge: true }
          );
        }
        break;
      }

      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        const uid: string | undefined = sub.metadata?.uid as string | undefined;
        if (uid) {
          const userRef = adminDb.collection('users').doc(uid);
          await userRef.set(
            {
              subscriptionStatus: sub.status,
              subscriptionId: sub.id,
              currentPeriodEnd: sub.current_period_end,
              priceId: sub.items?.data?.[0]?.price?.id ?? null,
              updatedAt: new Date(),
            },
            { merge: true }
          );
        }
        break;
      }

      default:
        // No-op for unhandled events
        break;
    }
  } catch (err) {
    console.error('Webhook handler error', err);
    // Respond 200 to avoid retries only if you purposely choose; here we ask Stripe to retry by 500
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }

  return new NextResponse(null, { status: 200 });
}

