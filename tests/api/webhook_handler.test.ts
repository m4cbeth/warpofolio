import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST as webhookHandler } from '@/app/api/stripe/webhook/route';

vi.mock('@/lib/stripe', () => {
  return {
    stripe: {
      webhooks: { constructEvent: vi.fn() },
      subscriptions: { retrieve: vi.fn().mockResolvedValue({ id: 'sub_123', status: 'active', current_period_end: 1234567890, items: { data: [{ price: { id: 'price_abc' } }] } }) },
    },
    verifyWebhookEvent: vi.fn((rawBody: string, sig: string) => {
      return JSON.parse(rawBody);
    }),
  };
});

// Mock Firestore admin
vi.mock('@/lib/firebaseAdmin', () => {
  const payments = { add: vi.fn().mockResolvedValue({ id: 'pay_1' }) };
  const userDoc = {
    set: vi.fn().mockResolvedValue(undefined),
    collection: vi.fn().mockImplementation((name: string) => (name === 'payments' ? payments : {})),
  };
  const usersCol = {
    doc: vi.fn().mockReturnValue(userDoc),
  };
  const adminDb = {
    collection: vi.fn().mockImplementation((name: string) => (name === 'users' ? usersCol : {})),
  };
  return { adminDb };
});

describe('Stripe webhook handler', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('handles checkout.session.completed (payment)', async () => {
    const fakeEvent = {
      type: 'checkout.session.completed',
      data: {
        object: {
          mode: 'payment',
          metadata: { uid: 'user_1' },
          customer: 'cus_123',
          amount_total: 5000,
          currency: 'usd',
          payment_intent: 'pi_123',
        },
      },
    };
    const req = new Request('http://localhost/api/stripe/webhook', {
      method: 'POST',
      headers: { 'stripe-signature': 't0k3n' },
      body: JSON.stringify(fakeEvent),
    });
    const res = await webhookHandler(req);
    expect((res as Response).status).toBe(200);
  });

  it('handles customer.subscription.updated', async () => {
    const fakeEvent = {
      type: 'customer.subscription.updated',
      data: { object: { id: 'sub_123', status: 'active', current_period_end: 1234567890, metadata: { uid: 'user_2' }, items: { data: [{ price: { id: 'price_abc' } }] } } },
    };
    const req = new Request('http://localhost/api/stripe/webhook', {
      method: 'POST',
      headers: { 'stripe-signature': 't0k3n' },
      body: JSON.stringify(fakeEvent),
    });
    const res = await webhookHandler(req);
    expect((res as Response).status).toBe(200);
  });
});

