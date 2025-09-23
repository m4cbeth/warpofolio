"use client";

import { useCallback, useMemo, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function CheckoutButtonOneTime({ priceId }: { priceId?: string }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchClientSecret = useCallback(async () => {
    setError(null);
    try {
      const res = await fetch('/api/stripe/create-checkout-session-one-time', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create session');
      setClientSecret(data.clientSecret);
    } catch (e: any) {
      setError(e.message);
    }
  }, [priceId]);

  const options = useMemo(
    () => ({
      clientSecret: clientSecret || undefined,
      // Appearance setting for a dark theme
      appearance: { theme: 'night' as const },
    }),
    [clientSecret]
  );

  if (clientSecret) {
    return (
      <div id="checkout-container" className="max-w-2xl mx-auto">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    );
  }

  return (
    <div>
      <button onClick={fetchClientSecret} className="px-4 py-2 bg-black text-white rounded">
        Buy now
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}

