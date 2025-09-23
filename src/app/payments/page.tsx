export const dynamic = 'force-dynamic';

import CheckoutButtonOneTime from '@/components/CheckoutButtonOneTime';
import SubscriptionCheckout from '@/components/SubscriptionCheckout';

export default function PaymentsPage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Payments</h1>
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2">One-time purchase</h2>
        <CheckoutButtonOneTime />
      </section>
      <section>
        <h2 className="text-xl font-medium mb-2">Subscription</h2>
        <SubscriptionCheckout />
      </section>
    </main>
  );
}

