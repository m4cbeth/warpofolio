import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST as postOneTime } from '@/app/api/stripe/create-checkout-session-one-time/route';
import { POST as postSub } from '@/app/api/stripe/create-checkout-session-subscription/route';

vi.mock('@/lib/auth', () => ({
  getUidFromRequest: vi.fn().mockResolvedValue({ uid: 'test_uid', email: 'user@example.com' }),
}));

vi.mock('@/lib/stripe', () => ({
  createCheckoutSessionOneTime: vi.fn().mockResolvedValue({ client_secret: 'cs_test_123' }),
  createCheckoutSessionSubscription: vi.fn().mockResolvedValue({ client_secret: 'cs_test_sub_456' }),
}));

describe('Checkout session endpoints', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns clientSecret for one-time', async () => {
    const req = new Request('http://localhost/api/stripe/create-checkout-session-one-time', {
      method: 'POST',
      body: JSON.stringify({ priceId: 'price_123' }),
    });
    const res = await postOneTime(req);
    const json = await (res as Response).json();
    expect((res as Response).status).toBe(200);
    expect(json.clientSecret).toBe('cs_test_123');
  });

  it('returns clientSecret for subscription', async () => {
    const req = new Request('http://localhost/api/stripe/create-checkout-session-subscription', {
      method: 'POST',
      body: JSON.stringify({ priceId: 'price_monthly_123' }),
    });
    const res = await postSub(req);
    const json = await (res as Response).json();
    expect((res as Response).status).toBe(200);
    expect(json.clientSecret).toBe('cs_test_sub_456');
  });
});

