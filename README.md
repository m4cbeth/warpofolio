# README

This is the source code for my sales first portfolio site. Realizing I've had years of experience in both sales in the financial services industry, and specific experience managing websites for that sector, I thought I might as well put those arguments into action for myself and see where it goes.

For a reminder to self and the future:

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## This App is Deployed on Vercel

Available at [Vercel Platform](https://webdevandseosite.vercel.app/), the source for [www.jarenwhitehouse.com](https://www.jarenwhitehouse.com)

If you need a refresher:
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Stripe Embedded Checkout + Firebase Integration

This repo includes a production-minded scaffold for Stripe Embedded Checkout + Firebase Auth/Firestore using the Next.js App Router.

Key paths:
- API routes (App Router):
  - `src/app/api/stripe/create-checkout-session-one-time/route.ts`
  - `src/app/api/stripe/create-checkout-session-subscription/route.ts`
  - `src/app/api/stripe/webhook/route.ts`
  - `src/app/api/admin/monthly-report/route.ts`
- Libraries:
  - `src/lib/firebaseClient.ts`
  - `src/lib/firebaseAdmin.ts`
  - `src/lib/stripe.ts`
  - `src/lib/auth.ts`
- Client UI:
  - `src/app/payments/page.tsx`
  - `src/components/CheckoutButtonOneTime.tsx`
  - `src/components/SubscriptionCheckout.tsx`
- Admin UI:
  - `src/app/admin/reports/page.tsx`

## Environment variables
Copy `.env.example` to `.env.local` and fill values:
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- ONE_TIME_PRICE_ID, SUBSCRIPTION_PRICE_ID_MONTHLY, SUBSCRIPTION_PRICE_ID_ANNUAL (optional defaults)
- VERCEL_PROJECT_URL (e.g. http://localhost:3000)
- FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY (escape newlines as `\n`)
- NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLIC_FIREBASE_PROJECT_ID

## Local dev
- Start dev server: `npm run dev`
- Start Stripe webhook forwarding: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
- Create Embedded Checkout session from `/payments`. The client requests a Checkout Session with `ui_mode=embedded` and renders with `<EmbeddedCheckout/>`.

## Testing
- `npm test` runs unit tests with Vitest. Tests mock Stripe and Firebase.

## Webhook handler
The webhook route reads the raw body via `req.text()` and verifies the event with `stripe.webhooks.constructEvent`. It updates Firestore user docs on events:
- `checkout.session.completed` (one-time and subscription)
- `invoice.payment_succeeded` / `invoice.payment_failed`
- `customer.subscription.updated` / `customer.subscription.deleted`

## Admin monthly reports
Admins (users/{uid}.role == 'admin') can POST `/api/admin/monthly-report` to generate a report for the current month. Results are persisted at `reports/monthly/months/YYYY-MM` in Firestore.

## How to go live
1. Create products and prices in Stripe (test first).
2. Set all environment variables in Vercel Project Settings → Environment Variables.
3. Deploy to Vercel.
4. In Stripe Dashboard → Developers → Webhooks, set your webhook endpoint to `https://<your-domain>/api/stripe/webhook` and use the signing secret as STRIPE_WEBHOOK_SECRET.
5. Swap test keys to live keys in Vercel when ready. Re-deploy.
6. Verify the Embedded Checkout flow and webhook events on live before announcing.

## cURL / Postman snippets
- One-time session (requires Firebase ID token Bearer header):
```
curl -X POST http://localhost:3000/api/stripe/create-checkout-session-one-time \
  -H "Authorization: Bearer {{FIREBASE_ID_TOKEN}}" \
  -H "Content-Type: application/json" \
  -d '{"priceId":"price_123"}'
```
- Subscription session:
```
curl -X POST http://localhost:3000/api/stripe/create-checkout-session-subscription \
  -H "Authorization: Bearer {{FIREBASE_ID_TOKEN}}" \
  -H "Content-Type: application/json" \
  -d '{"priceId":"price_monthly_123"}'
```
- Webhook testing with Stripe CLI:
```
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Maintenance
See `MAINTENANCE.md` for a monthly checklist (rotate keys, review webhooks, failed invoices, backups, quotas, billing).
