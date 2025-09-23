// Stripe server helper functions for Embedded Checkout and webhooks
import Stripe from 'stripe';
import { getUser, ensureUserInFirestore } from './firebaseAdmin';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

export async function createOrRetrieveCustomer({ uid, email }: { uid: string; email: string | null }) {
  const { ref, data } = await getUser(uid);
  let customerId = data?.stripeCustomerId || null;
  if (customerId) {
    return customerId;
  }
  // Create a Stripe customer
  const customer = await stripe.customers.create({
    email: email || undefined,
    metadata: { uid },
  });
  customerId = customer.id;
  await ref.set({ stripeCustomerId: customerId }, { merge: true });
  return customerId;
}

export async function createCheckoutSessionOneTime({
  priceId,
  uid,
  email,
}: {
  priceId: string;
  uid: string;
  email: string | null;
}) {
  await ensureUserInFirestore(uid, email);
  const customerId = await createOrRetrieveCustomer({ uid, email });
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    mode: 'payment',
    customer: customerId,
    client_reference_id: uid,
    metadata: { uid },
    line_items: [{ price: priceId, quantity: 1 }],
    return_url: `${process.env.VERCEL_PROJECT_URL || 'http://localhost:3000'}/return?session_id={CHECKOUT_SESSION_ID}`,
  });
  return session; // session.client_secret used by client
}

export async function createCheckoutSessionSubscription({
  priceId,
  uid,
  email,
}: {
  priceId: string;
  uid: string;
  email: string | null;
}) {
  await ensureUserInFirestore(uid, email);
  const { data } = await getUser(uid);
  const customerId = data?.stripeCustomerId || (await createOrRetrieveCustomer({ uid, email }));
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    mode: 'subscription',
    customer: customerId,
    client_reference_id: uid,
    metadata: { uid },
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: { metadata: { uid } },
    allow_promotion_codes: true,
    return_url: `${process.env.VERCEL_PROJECT_URL || 'http://localhost:3000'}/return?session_id={CHECKOUT_SESSION_ID}`,
  });
  return session;
}

export function verifyWebhookEvent(rawBody: string, signature: string | null) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) throw new Error('Missing STRIPE_WEBHOOK_SECRET');
  if (!signature) throw new Error('Missing Stripe-Signature header');
  const event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  return event;
}

