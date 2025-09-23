# Maintenance Checklist

Monthly tasks:
- Rotate Stripe keys (test and live) as needed. Keep Vercel env vars up to date.
- Review Stripe webhook logs and replay failed events.
- Review failed invoices and dunning settings. Reach out to customers as necessary.
- Backup Firestore (export using scheduled Cloud Scheduler / manual exports).
- Review Firebase billing/quota dashboards for spikes.
- Verify admin report generation completed on the 1st (for previous month), and reconcile with Stripe dashboard.

Operational notes:
- Webhook route requires raw request body; do not add JSON body parsing middleware.
- All API routes are Node runtime (not Edge) due to Stripe SDK + Firebase Admin.
- Verify Firebase ID tokens for all session-creation routes. Never trust client-provided uid/email without verification.
- To reconcile a Stripe customer with a Firestore user manually, set users/{uid}.stripeCustomerId to the correct Stripe Customer ID and trigger a resync via the admin UI (future enhancement).

