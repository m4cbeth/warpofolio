Context & goal:
I have a Next.js site (frontend + Next.js API routes) and I want to use Firebase for user auth and Firestore for durable app data. I want to add Stripe Embedded Checkout to support:
  - One-time payments
  - Recurring subscriptions
  - Link Stripe customers to my Firebase users
  - Webhook handling to update Firestore user records
  - Admin pages for monthly reports and subscription management

Please scaffold a complete, production-minded implementation with tests, comments, and README sections so I can review and iterate.

Assumptions (do not ask): Next.js 14+ (using app router), Firebase Auth + Firestore are used, deployment target is Vercel, I want Stripe Embedded components, and dark mode preference for checkout should be set to Stripe's dark theme when creating sessions.

High-level tasks (implement each step, produce files, and add tests):
1. Install dependencies
   - npm install stripe firebase firebase-admin cookie-parser axios dayjs (or equivalent) --save
   - dev deps: jest / vitest, supertest for API tests, eslint

2. Add environment variables (modifiy existing .enc.local file):
   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   - STRIPE_SECRET_KEY
   - STRIPE_WEBHOOK_SECRET
   - FIREBASE_PROJECT_ID
   - FIREBASE_CLIENT_EMAIL
   - FIREBASE_PRIVATE_KEY  (properly escaped in env)
   - NEXT_PUBLIC_FIREBASE_API_KEY
   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   - NEXT_PUBLIC_FIREBASE_PROJECT_ID
   - MAINTENANCE_EMAIL (optional)
   - OPENAI_API_KEY (if building content generation)
   - VERCEL_PROJECT_URL (for success/cancel URLs)

3. Firebase helper files
   - `lib/firebaseClient.ts` (client init for auth)
   - `lib/firebaseAdmin.ts` (admin SDK init for server-side access)
   - Provide code that reads env vars safely and throws helpful message if missing.
   - Add a helper: `ensureUserInFirestore(uid, email)` that creates or updates the `users/{uid}` doc with `stripeCustomerId` (nullable), `email`, `subscriptionStatus`, timestamps.

4. Stripe helper files
   - `lib/stripe.ts` with `new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' })` (or latest stable).
   - Functions:
     - `createOrRetrieveCustomer({uid, email})` — looks up `users/{uid}` for `stripeCustomerId`, creates in Stripe if missing, writes back to Firestore.
     - `createCheckoutSessionOneTime({priceId, uid, successUrl, cancelUrl, mode: 'payment'})` — create Checkout Session with `client_reference_id` = uid, `metadata` containing uid, `theme: dark` (see note below).
     - `createCheckoutSessionSubscription({priceId, uid, successUrl, cancelUrl, mode: 'subscription'})` — create subscription-mode Checkout session, pass `customer` if exists or `customer_email`, set `allow_promotion_codes` etc.
     - `verifyWebhook(req)` — safe verification using `STRIPE_WEBHOOK_SECRET` and raw request body (explain how to handle raw body in Next.js API routes).

   - **Important**: For Embedded Checkout (hosted), set `payment_method_collection` and `mode` correctly. Set the `appearance`/theme where allowed; for hosted Checkout use `payment_method_options` and Checkout session parameter `payment_method_types` and `customer_creation` as needed. For dark theme, set Checkout session param `theme: 'dark'` if using the hosted theme toggle (Stripe accepts `theme` on Checkout Session creation). (If Query: Payment Element = more styling; but per assumption use hosted Embedded Checkout with theme toggle.)

5. Next.js API routes (server-side)
   - `pages/api/stripe/create-checkout-session-one-time.ts`
     - Validate Firebase ID token from Authorization cookie or header (use Firebase Admin to verify).
     - Call `createOrRetrieveCustomer`.
     - Build `session = stripe.checkout.sessions.create()` with:
       - `mode: 'payment'`
       - `line_items: [{ price: process.env.ONE_TIME_PRICE_ID, quantity: 1 }]` (allow dynamic priceId argument)
       - `client_reference_id: uid`
       - `metadata: { uid }`
       - `success_url`, `cancel_url`
       - `payment_method_types: ['card']`
       - `theme: 'dark'` (Stripe Checkout hosted theme toggle)
     - Return `{url: session.url}` to client.

   - `pages/api/stripe/create-checkout-session-subscription.ts`
     - Same auth flow; create session with `mode: 'subscription'` and recurring priceId; `subscription_data: { metadata: { uid }}`; return `session.url`.

   - `pages/api/stripe/webhook.ts`
     - Use `buffer(req)` to read raw body; verify with stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET)
     - Handle events: `checkout.session.completed`, `invoice.payment_succeeded`, `invoice.payment_failed`, `customer.subscription.updated`, `customer.subscription.deleted`.
     - For `checkout.session.completed`: fetch session.customer / session.client_reference_id; update Firestore `users/{uid}` with `stripeCustomerId`, `subscriptionStatus` and for one-time payments record `payments` subcollection with amount, currency, paymentIntentId, timestamp.
     - For subscription events: update `users/{uid}` subscriptionStatus, current_period_end, price id, and store subscription id.
     - Return 200 head.

   - Add tests that simulate webhook payload (use stripe.webhooks.generateTestHeaderString equivalent or use Stripe CLI test secret). Include unit tests for create-checkout session endpoints (mock stripe, mock firebase-admin).

6. Frontend integration
   - Auth flow: protect checkout buttons behind Firebase Auth.
   - Add checkout-button components:
     - `components/CheckoutButtonOneTime.tsx` — calls `/api/stripe/create-checkout-session-one-time` and then `window.location.href = sessionUrl`.
     - `components/CheckoutButtonSubscription.tsx` — same for subscription.
   - Add a small UI that toggles dark/light theme; when triggered ensure the checkout session is created with `theme` value set to `dark` or `light` (for hosted Checkout).
   - Add success page handling: after success, read `session_id` if present or trust webhook to have updated user. Optionally fetch session client-side once to show invoice details.

7. Admin pages + monthly reporting
   - Create `pages/admin/reports.tsx` (protected route only for admin users — check `users/{uid}.role === 'admin'`).
   - Implement server-side API `pages/api/admin/monthly-report` that:
     - Queries Stripe for charges/invoices between two dates (use `stripe.invoices.list({created: {gte, lte}})`).
     - Aggregates totals by product/price, counts subscriptions, churn, MRR, ARR.
     - Stores monthly report in Firestore `reports/monthly/YYYY-MM`.
     - Expose endpoint to trigger generation (or schedule via Vercel cron).
   - Add a simple UI to download CSV / show charts (charts can be static or use a simple chart lib).

8. Maintenance & hosting
   - Add a `MAINTENANCE.md` with recommended monthly tasks:
     - Rotate Stripe keys test → prod carefully, store in Vercel environment variables.
     - Review webhook logs on Stripe dashboard, reprocess failed webhooks.
     - Check failed invoices and dunning settings.
     - Backup Firestore exports (use Firebase scheduled exports).
     - Monitor billing, quotas.
   - Add GitHub Actions workflow `ci.yml` for tests and `deploy.yml` for Vercel.
   - Add Vercel Cron (or GitHub Actions scheduled job) to run monthly-report job on 1st day of month (generate previous month report).

9. Content Generation System (Addon)
   - Scaffold `pages/admin/content-creator.tsx` and API `pages/api/content/generate`:
     - Secure endpoints for admin or permitted roles only.
     - Accept prompt, tone, length and call OpenAI-like API (use `OPENAI_API_KEY`), store generated drafts in Firestore `content/drafts`.
     - Add workflow: `draft -> review -> publish` with audit trail (who edited, timestamps).
     - Add rate limits and usage logging (store token usage per month under `billing/content_usage`).

10. Security, edge cases and operational notes
   - Ensure raw request body is available for webhook route—disable body parser for that route or use the recommended `export const config = { api: { bodyParser: false } }` in Next.js.
   - Verify Firebase ID tokens on each API route to ensure only authenticated users create sessions.
   - Do not rely on client to set email/uid — read from server-verified token.
   - Use Stripe webhook signature to prevent faked webhook events.
   - Add logging + retry strategy for failed webhook tasks (exponential backoff).
   - Add ability in admin dashboard to manually reconcile a Stripe customer with a Firestore user.

11. Deliverables (what I expect Warp to output)
   - Files created: firebase helpers, stripe helpers, API routes, frontend components, admin pages, tests, README with env setup, deployment steps, and maintenance checklist.
   - Unit & integration tests for critical flows: create session endpoints, webhook processing, admin report generation.
   - Example `.env.local.example`.
   - Postman / curl examples to exercise endpoints, and a short snippet to run Stripe CLI for webhook testing.
   - Short "how to go live" checklist (swap test keys -> live keys, set webhook URL on Stripe dashboard, update env in Vercel).

Edge-case and styling note (explicit):
  - Because we’re using **Stripe Embedded Checkout (hosted)**, full CSS control is limited. You can set theme to 'dark' or 'light' when creating the session. If you later want deep styling that fully matches the site, migrate to the Stripe Payment Element (client-side Stripe Elements + `appearance` object). For now, set `theme: 'dark'` on the session creation when user has dark mode enabled.

Testing & local dev tips:
  - Use Firebase emulator suite for auth + Firestore when available.
  - Use Stripe CLI to forward webhooks: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
  - Write tests that mock stripe responses for unit tests; run integration tests against Stripe test keys optionally.

If any step would be ambiguous, make reasonable opinionated defaults rather than stalling:
  - Default price IDs will be placed in env: `ONE_TIME_PRICE_ID` and `SUBSCRIPTION_PRICE_ID_MONTHLY` / `_ANNUAL`.
  - For content generation, default to OpenAI-compatible endpoints but make the provider pluggable.

Now: scaffold each file, provide full commented code examples for the key pieces:
  - `lib/firebaseAdmin.ts` and `lib/stripe.ts`
  - `pages/api/stripe/create-checkout-session-one-time.ts`
  - `pages/api/stripe/create-checkout-session-subscription.ts`
  - `pages/api/stripe/webhook.ts`
  - `components/CheckoutButtonOneTime.tsx`
  - `admin` report generator

When complete, run tests and produce a short status report summarizing what succeeded, what needs manual config (Stripe keys & webhook URL, Vercel envs), and the final checklist for going live.

Finish by committing files to a branch `feature/stripe-checkout-firebase` and open a PR with the generated README + how-to-go-live instructions.
