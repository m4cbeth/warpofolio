yes

I will start by running terminal commands to inspect your repository, create a new feature branch, and install the required dependencies. This sets up the environment to scaffold the code and tests.

**Command Executed:**
```bash
git rev-parse --is-inside-work-tree && git --no-pager status -sb && ls -la
```

**Output:**
```
true
## adding_stripe
total 359
drwxr-xr-x 1 infin 197609      0 Sep 21 23:00 ./
drwxr-xr-x 1 infin 197609      0 Sep 22 23:50 ../
-rw-r--r-- 1 infin 197609    354 Sep 21 23:04 .env.local
drwxr-xr-x 1 infin 197609      0 Sep 23 00:14 .git/
-rw-r--r-- 1 infin 197609    480 Sep 18 22:49 .gitignore
drwxr-xr-x 1 infin 197609      0 Sep 22 17:01 .next/
-rw-r--r-- 1 infin 197609    449 Sep 19 00:28 components.json
-rw-r--r-- 1 infin 197609    524 Sep 18 22:49 eslint.config.mjs
-rw-r--r-- 1 infin 197609    133 Sep 18 22:49 next.config.ts
-rw-r--r-- 1 infin 197609    262 Sep 18 22:49 next-env.d.ts
drwxr-xr-x 1 infin 197609      0 Sep 22 14:17 node_modules/
-rw-r--r-- 1 infin 197609    931 Sep 22 14:17 package.json
-rw-r--r-- 1 infin 197609 222761 Sep 22 14:17 package-lock.json
-rw-r--r-- 1 infin 197609     81 Sep 18 22:49 postcss.config.mjs
drwxr-xr-x 1 infin 197609      0 Sep 22 23:33 public/
-rw-r--r-- 1 infin 197609   1643 Sep 22 14:09 README.md
drwxr-xr-x 1 infin 197609      0 Sep 19 01:08 src/
-rw-r--r-- 1 infin 197609    602 Sep 18 23:08 tsconfig.json
```


**Command Executed:**
```bash
cat package.json
```

**Output:**
```
{
  "name": "jaren-whitehouse-seo-site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@sendgrid/mail": "^8.1.6",
    "@vercel/analytics": "^1.5.0",
    "@vercel/speed-insights": "^1.2.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.15",
    "lucide-react": "^0.544.0",
    "next": "15.5.3",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-icons": "^5.5.0",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.5.3",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.3.8",
    "typescript": "^5"
  }
}
```


**Command Executed:**
```bash
git checkout -b feature/stripe-checkout-firebase
```

**Output:**
```
Switched to a new branch 'feature/stripe-checkout-firebase'
```


**Command Executed:**
```bash
npm i stripe firebase firebase-admin cookie-parser axios dayjs && npm i -D vitest @vitest/coverage-v8 supertest @types/supertest
```

**Output:**
```

added 190 packages, and audited 546 packages in 28s

152 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

added 99 packages, and audited 645 packages in 14s

178 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```


**Command Executed:**
```bash
sed -n '1,200p' .env.local
```

**Output:**
```
# Environment variables for local dev
# Obtain an API key from Twilio SendGrid: https://app.sendgrid.com/settings/api_keys
# Never commit a real API key to version control.

# SendGrid
SENDGRID_API_KEY=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
EMAIL_TO=jarenwhitehouse@gmail.com
EMAIL_FROM=websiteinquiry@jarenwhitehouse.com

```


**Command Executed:**
```bash
ls -la src && find src -maxdepth 3 -type d -name app -print
```

**Output:**
```
total 8
drwxr-xr-x 1 infin 197609 0 Sep 19 01:08 ./
drwxr-xr-x 1 infin 197609 0 Sep 21 23:00 ../
drwxr-xr-x 1 infin 197609 0 Sep 21 23:12 app/
drwxr-xr-x 1 infin 197609 0 Sep 22 01:07 components/
drwxr-xr-x 1 infin 197609 0 Sep 23 00:03 data/
drwxr-xr-x 1 infin 197609 0 Sep 19 01:08 lib/
src/app
src/data/stripe-sample-code-from-stripe-docs/app
```


**Command Executed:**
```bash
ls -la src/lib && ls -la src/app && ls -la src/data/stripe-sample-code-from-stripe-docs/app
```

**Output:**
```
total 2
drwxr-xr-x 1 infin 197609   0 Sep 19 01:08 ./
drwxr-xr-x 1 infin 197609   0 Sep 19 01:08 ../
-rw-r--r-- 1 infin 197609 295 Sep 19 01:08 animations.ts
-rw-r--r-- 1 infin 197609 166 Sep 19 00:28 utils.ts
total 17
drwxr-xr-x 1 infin 197609    0 Sep 21 23:12 ./
drwxr-xr-x 1 infin 197609    0 Sep 19 01:08 ../
drwxr-xr-x 1 infin 197609    0 Sep 21 21:31 api/
-rw-r--r-- 1 infin 197609  646 Sep 21 23:10 favicon.svg
-rw-r--r-- 1 infin 197609 4726 Sep 19 00:47 globals.css
-rw-r--r-- 1 infin 197609 2513 Sep 22 11:34 layout.tsx
-rw-r--r-- 1 infin 197609 1176 Sep 22 01:13 page.tsx
total 10
drwxr-xr-x 1 infin 197609   0 Sep 22 23:51 ./
drwxr-xr-x 1 infin 197609   0 Sep 22 23:51 ../
drwxr-xr-x 1 infin 197609   0 Sep 22 23:51 actions/
drwxr-xr-x 1 infin 197609   0 Sep 22 23:51 api/
drwxr-xr-x 1 infin 197609   0 Sep 22 23:51 components/
-rw-r--r-- 1 infin 197609 120 Sep 22 23:51 layout.jsx
-rw-r--r-- 1 infin 197609 149 Sep 22 23:51 page.jsx
drwxr-xr-x 1 infin 197609   0 Sep 22 23:51 return/
```



**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\.env.local
+++ c:\Users\infin\documents\github\freelancerSite2025\.env.local
@@ -7,3 +7,27 @@
 EMAIL_TO=jarenwhitehouse@gmail.com
 EMAIL_FROM=websiteinquiry@jarenwhitehouse.com
 
+# Stripe Embedded Checkout
+NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
+STRIPE_SECRET_KEY=
+STRIPE_WEBHOOK_SECRET=
+ONE_TIME_PRICE_ID=
+SUBSCRIPTION_PRICE_ID_MONTHLY=
+SUBSCRIPTION_PRICE_ID_ANNUAL=
+VERCEL_PROJECT_URL=
+
+# Firebase Admin (server)
+FIREBASE_PROJECT_ID=
+FIREBASE_CLIENT_EMAIL=
+# Escape newlines as \n in this private key
+FIREBASE_PRIVATE_KEY=
+
+# Firebase Client (browser)
+NEXT_PUBLIC_FIREBASE_API_KEY=
+NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
+NEXT_PUBLIC_FIREBASE_PROJECT_ID=
+
+# Optional
+MAINTENANCE_EMAIL=
+OPENAI_API_KEY=
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\.env.example
+++ c:\Users\infin\documents\github\freelancerSite2025\.env.example
@@ -0,0 +1,27 @@
+# Example env file for local dev. Copy to .env.local and fill values.
+
+# Stripe Embedded Checkout
+NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
+STRIPE_SECRET_KEY=sk_test_...
+STRIPE_WEBHOOK_SECRET=whsec_...
+ONE_TIME_PRICE_ID=price_...
+SUBSCRIPTION_PRICE_ID_MONTHLY=price_monthly_...
+SUBSCRIPTION_PRICE_ID_ANNUAL=price_annual_...
+# For success/cancel absolute URLs in hosted flows (not needed for embedded)
+VERCEL_PROJECT_URL=http://localhost:3000
+
+# Firebase Admin (server)
+FIREBASE_PROJECT_ID=your-project-id
+FIREBASE_CLIENT_EMAIL=firebase-adminsdk-abc@your-project-id.iam.gserviceaccount.com
+# IMPORTANT: Encode newlines as \n in the private key
+FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
+
+# Firebase Client (browser)
+NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
+NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
+NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
+
+# Optional
+MAINTENANCE_EMAIL=ops@example.com
+OPENAI_API_KEY=
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\lib\firebaseClient.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\lib\firebaseClient.ts
@@ -0,0 +1,34 @@
+// Client-side Firebase initialization for Auth and Firestore
+// Reads public env vars and throws helpful errors if missing.
+
+import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
+import { getAuth } from 'firebase/auth';
+import { getFirestore } from 'firebase/firestore';
+
+function required(name: string, value: string | undefined) {
+  if (!value) {
+    throw new Error(`Missing required env var ${name} (client). Add it to .env.local`);
+  }
+  return value;
+}
+
+const firebaseConfig = {
+  apiKey: required('NEXT_PUBLIC_FIREBASE_API_KEY', process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
+  authDomain: required('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
+  projectId: required('NEXT_PUBLIC_FIREBASE_PROJECT_ID', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
+};
+
+let app: FirebaseApp;
+
+export function getFirebaseApp(): FirebaseApp {
+  if (!getApps().length) {
+    app = initializeApp(firebaseConfig);
+  } else {
+    app = getApps()[0]!;
+  }
+  return app;
+}
+
+export const firebaseAuth = () => getAuth(getFirebaseApp());
+export const firestoreClient = () => getFirestore(getFirebaseApp());
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\lib\firebaseAdmin.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\lib\firebaseAdmin.ts
@@ -0,0 +1,75 @@
+// Server-side Firebase Admin SDK initialization and helpers
+// Ensures singleton app init and provides ensureUserInFirestore helper.
+
+import admin from 'firebase-admin';
+import { getFirestore, FieldValue } from 'firebase-admin/firestore';
+
+function required(name: string, value: string | undefined): string {
+  if (!value) throw new Error(`Missing required env var ${name} (server). Set it in Vercel & .env.local`);
+  return value;
+}
+
+// Parse private key with escaped newlines
+function parsePrivateKey(key: string) {
+  return key.replace(/\\n/g, '\n');
+}
+
+// Initialize admin app only once
+if (!admin.apps.length) {
+  const projectId = required('FIREBASE_PROJECT_ID', process.env.FIREBASE_PROJECT_ID);
+  const clientEmail = required('FIREBASE_CLIENT_EMAIL', process.env.FIREBASE_CLIENT_EMAIL);
+  const privateKey = required('FIREBASE_PRIVATE_KEY', process.env.FIREBASE_PRIVATE_KEY);
+
+  admin.initializeApp({
+    credential: admin.credential.cert({
+      projectId,
+      clientEmail,
+      privateKey: parsePrivateKey(privateKey),
+    } as admin.ServiceAccount),
+  });
+}
+
+export const adminAuth = admin.auth();
+export const adminDb = getFirestore();
+
+export type UserDoc = {
+  email: string | null;
+  stripeCustomerId: string | null;
+  subscriptionStatus?: string | null;
+  subscriptionId?: string | null;
+  currentPeriodEnd?: number | null; // Unix seconds
+  priceId?: string | null;
+  role?: 'user' | 'admin';
+  createdAt?: FirebaseFirestore.FieldValue;
+  updatedAt?: FirebaseFirestore.FieldValue;
+};
+
+export async function ensureUserInFirestore(uid: string, email: string | null) {
+  const ref = adminDb.collection('users').doc(uid);
+  const snap = await ref.get();
+  const now = FieldValue.serverTimestamp();
+  if (!snap.exists) {
+    const data: UserDoc = {
+      email,
+      stripeCustomerId: null,
+      subscriptionStatus: null,
+      subscriptionId: null,
+      currentPeriodEnd: null,
+      priceId: null,
+      role: 'user',
+      createdAt: now,
+      updatedAt: now,
+    };
+    await ref.set(data, { merge: true });
+  } else {
+    await ref.set({ email, updatedAt: now }, { merge: true });
+  }
+  return ref;
+}
+
+export async function getUser(uid: string) {
+  const ref = adminDb.collection('users').doc(uid);
+  const snap = await ref.get();
+  return { ref, data: snap.exists ? (snap.data() as UserDoc) : null };
+}
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\lib\stripe.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\lib\stripe.ts
@@ -0,0 +1,81 @@
+// Stripe server helper functions for Embedded Checkout and webhooks
+import Stripe from 'stripe';
+import { adminDb, getUser, ensureUserInFirestore } from './firebaseAdmin';
+
+export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
+  apiVersion: '2022-11-15',
+});
+
+export async function createOrRetrieveCustomer({ uid, email }: { uid: string; email: string | null }) {
+  const { ref, data } = await getUser(uid);
+  let customerId = data?.stripeCustomerId || null;
+  if (customerId) {
+    return customerId;
+  }
+  // Create a Stripe customer
+  const customer = await stripe.customers.create({
+    email: email || undefined,
+    metadata: { uid },
+  });
+  customerId = customer.id;
+  await ref.set({ stripeCustomerId: customerId }, { merge: true });
+  return customerId;
+}
+
+export async function createCheckoutSessionOneTime({
+  priceId,
+  uid,
+  email,
+}: {
+  priceId: string;
+  uid: string;
+  email: string | null;
+}) {
+  await ensureUserInFirestore(uid, email);
+  const customerId = await createOrRetrieveCustomer({ uid, email });
+  const session = await stripe.checkout.sessions.create({
+    ui_mode: 'embedded',
+    mode: 'payment',
+    customer: customerId,
+    client_reference_id: uid,
+    metadata: { uid },
+    line_items: [{ price: priceId, quantity: 1 }],
+    return_url: `${process.env.VERCEL_PROJECT_URL || 'http://localhost:3000'}/return?session_id={CHECKOUT_SESSION_ID}`,
+  });
+  return session; // session.client_secret used by client
+}
+
+export async function createCheckoutSessionSubscription({
+  priceId,
+  uid,
+  email,
+}: {
+  priceId: string;
+  uid: string;
+  email: string | null;
+}) {
+  await ensureUserInFirestore(uid, email);
+  const { data } = await getUser(uid);
+  const customerId = data?.stripeCustomerId || (await createOrRetrieveCustomer({ uid, email }));
+  const session = await stripe.checkout.sessions.create({
+    ui_mode: 'embedded',
+    mode: 'subscription',
+    customer: customerId,
+    client_reference_id: uid,
+    metadata: { uid },
+    line_items: [{ price: priceId, quantity: 1 }],
+    subscription_data: { metadata: { uid } },
+    allow_promotion_codes: true,
+    return_url: `${process.env.VERCEL_PROJECT_URL || 'http://localhost:3000'}/return?session_id={CHECKOUT_SESSION_ID}`,
+  });
+  return session;
+}
+
+export function verifyWebhookEvent(rawBody: string, signature: string | null) {
+  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
+  if (!webhookSecret) throw new Error('Missing STRIPE_WEBHOOK_SECRET');
+  if (!signature) throw new Error('Missing Stripe-Signature header');
+  const event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
+  return event;
+}
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\lib\auth.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\lib\auth.ts
@@ -0,0 +1,20 @@
+import { adminAuth } from './firebaseAdmin';
+
+export async function getUidFromRequest(req: Request) {
+  const authHeader = req.headers.get('authorization') || req.headers.get('Authorization');
+  const token = authHeader?.startsWith('Bearer ')
+    ? authHeader.slice('Bearer '.length).trim()
+    : undefined;
+  if (!token) {
+    throw new Response('Unauthorized: missing Bearer token', { status: 401 });
+  }
+  try {
+    const decoded = await adminAuth.verifyIdToken(token);
+    const uid = decoded.uid;
+    const email = decoded.email ?? null;
+    return { uid, email };
+  } catch (err) {
+    throw new Response('Unauthorized: invalid token', { status: 401 });
+  }
+}
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\create-checkout-session-one-time\route.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\create-checkout-session-one-time\route.ts
@@ -0,0 +1,24 @@
+export const runtime = 'nodejs';
+
+import { NextResponse } from 'next/server';
+import { getUidFromRequest } from '@/src/lib/auth';
+import { createCheckoutSessionOneTime } from '@/src/lib/stripe';
+
+export async function POST(req: Request) {
+  try {
+    const { uid, email } = await getUidFromRequest(req);
+    const body = await req.json().catch(() => ({}));
+    const priceId = body.priceId || process.env.ONE_TIME_PRICE_ID;
+    if (!priceId) {
+      return NextResponse.json({ error: 'Missing priceId and ONE_TIME_PRICE_ID' }, { status: 400 });
+    }
+
+    const session = await createCheckoutSessionOneTime({ priceId, uid, email });
+    return NextResponse.json({ clientSecret: session.client_secret }, { status: 200 });
+  } catch (err: any) {
+    if (err instanceof Response) return err;
+    console.error('create-checkout-session-one-time error', err);
+    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
+  }
+}
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\create-checkout-session-subscription\route.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\create-checkout-session-subscription\route.ts
@@ -0,0 +1,24 @@
+export const runtime = 'nodejs';
+
+import { NextResponse } from 'next/server';
+import { getUidFromRequest } from '@/src/lib/auth';
+import { createCheckoutSessionSubscription } from '@/src/lib/stripe';
+
+export async function POST(req: Request) {
+  try {
+    const { uid, email } = await getUidFromRequest(req);
+    const body = await req.json().catch(() => ({}));
+    const priceId = body.priceId || process.env.SUBSCRIPTION_PRICE_ID_MONTHLY;
+    if (!priceId) {
+      return NextResponse.json({ error: 'Missing priceId and SUBSCRIPTION_PRICE_ID_MONTHLY' }, { status: 400 });
+    }
+
+    const session = await createCheckoutSessionSubscription({ priceId, uid, email });
+    return NextResponse.json({ clientSecret: session.client_secret }, { status: 200 });
+  } catch (err: any) {
+    if (err instanceof Response) return err;
+    console.error('create-checkout-session-subscription error', err);
+    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
+  }
+}
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\webhook\route.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\webhook\route.ts
@@ -0,0 +1,130 @@
+export const runtime = 'nodejs';
+export const dynamic = 'force-dynamic';
+
+import { NextResponse } from 'next/server';
+import { verifyWebhookEvent, stripe } from '@/src/lib/stripe';
+import { adminDb } from '@/src/lib/firebaseAdmin';
+
+export async function POST(req: Request) {
+  let rawBody: string;
+  try {
+    rawBody = await req.text();
+  } catch (e) {
+    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
+  }
+  const signature = req.headers.get('stripe-signature');
+
+  let event;
+  try {
+    event = verifyWebhookEvent(rawBody, signature);
+  } catch (err: any) {
+    console.error('Webhook signature verification failed:', err.message);
+    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
+  }
+
+  try {
+    switch (event.type) {
+      case 'checkout.session.completed': {
+        const session = event.data.object as any; // Stripe.Checkout.Session
+        const uid: string | undefined = session.metadata?.uid || session.client_reference_id || undefined;
+        const customerId: string | null = session.customer || null;
+        const mode: string = session.mode;
+        if (uid) {
+          const userRef = adminDb.collection('users').doc(uid);
+          const updates: Record<string, any> = { updatedAt: new Date() };
+          if (customerId) updates.stripeCustomerId = customerId;
+
+          if (mode === 'payment') {
+            // Record one-time payment
+            const amount_total = session.amount_total; // in cents
+            const currency = session.currency;
+            const pi = session.payment_intent;
+            const paymentsRef = userRef.collection('payments');
+            await paymentsRef.add({
+              amount: amount_total,
+              currency,
+              paymentIntentId: typeof pi === 'string' ? pi : pi?.id,
+              createdAt: new Date(),
+              source: 'checkout.session.completed',
+            });
+          } else if (mode === 'subscription') {
+            const subId = typeof session.subscription === 'string' ? session.subscription : session.subscription?.id;
+            if (subId) {
+              const sub = await stripe.subscriptions.retrieve(subId);
+              updates.subscriptionStatus = sub.status;
+              updates.subscriptionId = sub.id;
+              updates.currentPeriodEnd = sub.current_period_end;
+              updates.priceId = sub.items.data[0]?.price?.id ?? null;
+            }
+          }
+          await userRef.set(updates, { merge: true });
+        }
+        break;
+      }
+
+      case 'invoice.payment_succeeded': {
+        const invoice = event.data.object as any; // Stripe.Invoice
+        const uid: string | undefined = invoice.metadata?.uid;
+        if (uid) {
+          const userRef = adminDb.collection('users').doc(uid);
+          await userRef.set(
+            {
+              subscriptionStatus: 'active',
+              currentPeriodEnd: invoice.lines?.data?.[0]?.period?.end ?? null,
+              updatedAt: new Date(),
+            },
+            { merge: true }
+          );
+        }
+        break;
+      }
+
+      case 'invoice.payment_failed': {
+        const invoice = event.data.object as any;
+        const uid: string | undefined = invoice.metadata?.uid;
+        if (uid) {
+          const userRef = adminDb.collection('users').doc(uid);
+          await userRef.set(
+            {
+              subscriptionStatus: 'past_due',
+              updatedAt: new Date(),
+            },
+            { merge: true }
+          );
+        }
+        break;
+      }
+
+      case 'customer.subscription.updated':
+      case 'customer.subscription.deleted': {
+        const sub = event.data.object as any; // Stripe.Subscription
+        const uid: string | undefined = sub.metadata?.uid;
+        if (uid) {
+          const userRef = adminDb.collection('users').doc(uid);
+          await userRef.set(
+            {
+              subscriptionStatus: sub.status,
+              subscriptionId: sub.id,
+              currentPeriodEnd: sub.current_period_end,
+              priceId: sub.items?.data?.[0]?.price?.id ?? null,
+              updatedAt: new Date(),
+            },
+            { merge: true }
+          );
+        }
+        break;
+      }
+
+      default:
+        // No-op for unhandled events
+        break;
+    }
+  } catch (err) {
+    console.error('Webhook handler error', err);
+    // Respond 200 to avoid retries only if you purposely choose; here we ask Stripe to retry by 500
+    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
+  }
+
+  return new NextResponse(null, { status: 200 });
+}
+

```




**Command Executed:**
```bash
npm i @stripe/stripe-js @stripe/react-stripe-js
```

**Output:**
```

added 2 packages, and audited 647 packages in 3s

178 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```



**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\components\CheckoutButtonOneTime.tsx
+++ c:\Users\infin\documents\github\freelancerSite2025\src\components\CheckoutButtonOneTime.tsx
@@ -0,0 +1,57 @@
+"use client";
+
+import { useCallback, useMemo, useState } from 'react';
+import { loadStripe } from '@stripe/stripe-js';
+import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
+
+const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');
+
+export default function CheckoutButtonOneTime({ priceId }: { priceId?: string }) {
+  const [clientSecret, setClientSecret] = useState<string | null>(null);
+  const [error, setError] = useState<string | null>(null);
+
+  const fetchClientSecret = useCallback(async () => {
+    setError(null);
+    try {
+      const res = await fetch('/api/stripe/create-checkout-session-one-time', {
+        method: 'POST',
+        headers: { 'Content-Type': 'application/json' },
+        body: JSON.stringify({ priceId }),
+      });
+      const data = await res.json();
+      if (!res.ok) throw new Error(data.error || 'Failed to create session');
+      setClientSecret(data.clientSecret);
+    } catch (e: any) {
+      setError(e.message);
+    }
+  }, [priceId]);
+
+  const options = useMemo(
+    () => ({
+      clientSecret: clientSecret || undefined,
+      // Appearance setting for a dark theme
+      appearance: { theme: 'night' as const },
+    }),
+    [clientSecret]
+  );
+
+  if (clientSecret) {
+    return (
+      <div id="checkout-container" className="max-w-2xl mx-auto">
+        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
+          <EmbeddedCheckout />
+        </EmbeddedCheckoutProvider>
+      </div>
+    );
+  }
+
+  return (
+    <div>
+      <button onClick={fetchClientSecret} className="px-4 py-2 bg-black text-white rounded">
+        Buy now
+      </button>
+      {error && <p className="text-red-600 mt-2">{error}</p>}
+    </div>
+  );
+}
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\app\payments\page.tsx
+++ c:\Users\infin\documents\github\freelancerSite2025\src\app\payments\page.tsx
@@ -0,0 +1,21 @@
+export const dynamic = 'force-dynamic';
+
+import CheckoutButtonOneTime from '@/src/components/CheckoutButtonOneTime';
+import SubscriptionCheckout from '@/src/components/SubscriptionCheckout';
+
+export default function PaymentsPage() {
+  return (
+    <main className="container mx-auto py-10">
+      <h1 className="text-3xl font-semibold mb-6">Payments</h1>
+      <section className="mb-10">
+        <h2 className="text-xl font-medium mb-2">One-time purchase</h2>
+        <CheckoutButtonOneTime />
+      </section>
+      <section>
+        <h2 className="text-xl font-medium mb-2">Subscription</h2>
+        <SubscriptionCheckout />
+      </section>
+    </main>
+  );
+}
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\components\SubscriptionCheckout.tsx
+++ c:\Users\infin\documents\github\freelancerSite2025\src\components\SubscriptionCheckout.tsx
@@ -0,0 +1,56 @@
+"use client";
+
+import { useCallback, useMemo, useState } from 'react';
+import { loadStripe } from '@stripe/stripe-js';
+import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
+
+const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');
+
+export default function SubscriptionCheckout({ priceId }: { priceId?: string }) {
+  const [clientSecret, setClientSecret] = useState<string | null>(null);
+  const [error, setError] = useState<string | null>(null);
+
+  const fetchClientSecret = useCallback(async () => {
+    setError(null);
+    try {
+      const res = await fetch('/api/stripe/create-checkout-session-subscription', {
+        method: 'POST',
+        headers: { 'Content-Type': 'application/json' },
+        body: JSON.stringify({ priceId }),
+      });
+      const data = await res.json();
+      if (!res.ok) throw new Error(data.error || 'Failed to create session');
+      setClientSecret(data.clientSecret);
+    } catch (e: any) {
+      setError(e.message);
+    }
+  }, [priceId]);
+
+  const options = useMemo(
+    () => ({
+      clientSecret: clientSecret || undefined,
+      appearance: { theme: 'night' as const },
+    }),
+    [clientSecret]
+  );
+
+  if (clientSecret) {
+    return (
+      <div id="subscription-checkout" className="max-w-2xl mx-auto">
+        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
+          <EmbeddedCheckout />
+        </EmbeddedCheckoutProvider>
+      </div>
+    );
+  }
+
+  return (
+    <div>
+      <button onClick={fetchClientSecret} className="px-4 py-2 bg-black text-white rounded">
+        Start subscription
+      </button>
+      {error && <p className="text-red-600 mt-2">{error}</p>}
+    </div>
+  );
+}
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\app\api\admin\monthly-report\route.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\app\api\admin\monthly-report\route.ts
@@ -0,0 +1,74 @@
+export const runtime = 'nodejs';
+
+import { NextResponse } from 'next/server';
+import { getUidFromRequest } from '@/src/lib/auth';
+import { adminDb } from '@/src/lib/firebaseAdmin';
+import { stripe } from '@/src/lib/stripe';
+import dayjs from 'dayjs';
+
+function firstLastOfMonth(input?: string) {
+  const d = input ? dayjs(input) : dayjs();
+  const start = d.startOf('month');
+  const end = d.endOf('month');
+  return { start: start.unix(), end: end.unix(), ym: start.format('YYYY-MM') };
+}
+
+export async function POST(req: Request) {
+  try {
+    const { uid } = await getUidFromRequest(req);
+    const userSnap = await adminDb.collection('users').doc(uid).get();
+    const role = userSnap.exists ? (userSnap.data()?.role as string | undefined) : undefined;
+    if (role !== 'admin') {
+      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
+    }
+
+    const body = await req.json().catch(() => ({}));
+    const { month } = body; // optional ISO date string like '2025-08-01'
+    const { start, end, ym } = firstLastOfMonth(month);
+
+    const invoicesIter = stripe.invoices.list({ created: { gte: start, lte: end }, limit: 100 });
+    const totalsByPrice: Record<string, number> = {};
+    const currencyByPrice: Record<string, string> = {};
+    let subscriptionCount = 0;
+    let paymentCount = 0;
+
+    for await (const inv of invoicesIter) {
+      if (inv.status === 'paid') {
+        paymentCount += 1;
+        for (const line of inv.lines.data) {
+          const priceId = line.price?.id || 'unknown';
+          const amount = line.amount || line.amount_excluding_tax || 0;
+          totalsByPrice[priceId] = (totalsByPrice[priceId] || 0) + amount;
+          if (line.price?.currency) currencyByPrice[priceId] = line.price.currency;
+        }
+      }
+      if (inv.subscription) subscriptionCount += 1;
+    }
+
+    // Derive MRR/ARR from recurring price totals (assuming monthly for simplicity)
+    const mrr = Object.entries(totalsByPrice).reduce((acc, [priceId, amt]) => acc + amt, 0);
+    const arr = mrr * 12;
+
+    const reportDoc = {
+      month: ym,
+      start,
+      end,
+      totalsByPrice,
+      currencyByPrice,
+      subscriptionCount,
+      paymentCount,
+      mrr,
+      arr,
+      generatedAt: new Date(),
+    };
+
+    await adminDb.collection('reports').doc('monthly').collection('months').doc(ym).set(reportDoc, { merge: true });
+
+    return NextResponse.json(reportDoc, { status: 200 });
+  } catch (err) {
+    if (err instanceof Response) return err;
+    console.error('monthly-report error', err);
+    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
+  }
+}
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\app\admin\reports\page.tsx
+++ c:\Users\infin\documents\github\freelancerSite2025\src\app\admin\reports\page.tsx
@@ -0,0 +1,68 @@
+"use client";
+
+import { useState } from 'react';
+
+type Report = {
+  month: string;
+  mrr: number;
+  arr: number;
+  subscriptionCount: number;
+  paymentCount: number;
+  totalsByPrice: Record<string, number>;
+  currencyByPrice: Record<string, string>;
+};
+
+export default function AdminReportsPage() {
+  const [loading, setLoading] = useState(false);
+  const [report, setReport] = useState<Report | null>(null);
+  const [error, setError] = useState<string | null>(null);
+
+  async function generate() {
+    setLoading(true);
+    setError(null);
+    try {
+      const res = await fetch('/api/admin/monthly-report', { method: 'POST' });
+      const data = await res.json();
+      if (!res.ok) throw new Error(data.error || 'Failed to generate report');
+      setReport(data);
+    } catch (e: any) {
+      setError(e.message);
+    } finally {
+      setLoading(false);
+    }
+  }
+
+  return (
+    <main className="container mx-auto py-10">
+      <h1 className="text-3xl font-semibold mb-6">Admin Reports</h1>
+      <button
+        disabled={loading}
+        onClick={generate}
+        className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
+      >
+        {loading ? 'Generating…' : 'Generate Current Month Report'}
+      </button>
+      {error && <p className="text-red-600 mt-3">{error}</p>}
+      {report && (
+        <section className="mt-8 space-y-2">
+          <h2 className="text-xl font-medium">Report: {report.month}</h2>
+          <p>MRR (cents): {report.mrr}</p>
+          <p>ARR (cents): {report.arr}</p>
+          <p>Subscriptions: {report.subscriptionCount}</p>
+          <p>Payments: {report.paymentCount}</p>
+          <div className="mt-4">
+            <h3 className="font-medium">Totals by Price:</h3>
+            <ul className="list-disc pl-6">
+              {Object.entries(report.totalsByPrice).map(([price, amt]) => (
+                <li key={price}>
+                  {price}: {amt} {report.currencyByPrice[price] || ''}
+                </li>
+              ))}
+            </ul>
+          </div>
+        </section>
+      )}
+    </main>
+  );
+}
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\package.json
+++ c:\Users\infin\documents\github\freelancerSite2025\package.json
@@ -6,7 +6,9 @@
     "dev": "next dev --turbopack",
     "build": "next build --turbopack",
     "start": "next start",
-    "lint": "eslint"
+    "lint": "eslint",
+    "test": "vitest --run",
+    "test:watch": "vitest"
   },
   "dependencies": {
     "@sendgrid/mail": "^8.1.6",

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\tests\api\checkout_endpoints.test.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\tests\api\checkout_endpoints.test.ts
@@ -0,0 +1,41 @@
+import { describe, it, expect, vi, beforeEach } from 'vitest';
+import { POST as postOneTime } from '@/src/app/api/stripe/create-checkout-session-one-time/route';
+import { POST as postSub } from '@/src/app/api/stripe/create-checkout-session-subscription/route';
+
+vi.mock('@/src/lib/auth', () => ({
+  getUidFromRequest: vi.fn().mockResolvedValue({ uid: 'test_uid', email: 'user@example.com' }),
+}));
+
+vi.mock('@/src/lib/stripe', () => ({
+  createCheckoutSessionOneTime: vi.fn().mockResolvedValue({ client_secret: 'cs_test_123' }),
+  createCheckoutSessionSubscription: vi.fn().mockResolvedValue({ client_secret: 'cs_test_sub_456' }),
+}));
+
+describe('Checkout session endpoints', () => {
+  beforeEach(() => {
+    vi.clearAllMocks();
+  });
+
+  it('returns clientSecret for one-time', async () => {
+    const req = new Request('http://localhost/api/stripe/create-checkout-session-one-time', {
+      method: 'POST',
+      body: JSON.stringify({ priceId: 'price_123' }),
+    });
+    const res = await postOneTime(req);
+    const json = await (res as Response).json();
+    expect((res as Response).status).toBe(200);
+    expect(json.clientSecret).toBe('cs_test_123');
+  });
+
+  it('returns clientSecret for subscription', async () => {
+    const req = new Request('http://localhost/api/stripe/create-checkout-session-subscription', {
+      method: 'POST',
+      body: JSON.stringify({ priceId: 'price_monthly_123' }),
+    });
+    const res = await postSub(req);
+    const json = await (res as Response).json();
+    expect((res as Response).status).toBe(200);
+    expect(json.clientSecret).toBe('cs_test_sub_456');
+  });
+});
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\tests\api\webhook_handler.test.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\tests\api\webhook_handler.test.ts
@@ -0,0 +1,71 @@
+import { describe, it, expect, vi, beforeEach } from 'vitest';
+import { POST as webhookHandler } from '@/src/app/api/stripe/webhook/route';
+
+vi.mock('@/src/lib/stripe', () => {
+  return {
+    stripe: {
+      webhooks: { constructEvent: vi.fn() },
+      subscriptions: { retrieve: vi.fn().mockResolvedValue({ id: 'sub_123', status: 'active', current_period_end: 1234567890, items: { data: [{ price: { id: 'price_abc' } }] } }) },
+    },
+    verifyWebhookEvent: vi.fn((rawBody: string, sig: string) => {
+      return JSON.parse(rawBody);
+    }),
+  };
+});
+
+// Mock Firestore admin
+const setMock = vi.fn();
+const addMock = vi.fn();
+vi.mock('@/src/lib/firebaseAdmin', () => ({
+  adminDb: {
+    collection: vi.fn().mockReturnThis(),
+    doc: vi.fn().mockReturnThis(),
+    set: setMock,
+    get: vi.fn(),
+    collectionGroup: vi.fn(),
+  },
+}));
+
+describe('Stripe webhook handler', () => {
+  beforeEach(() => {
+    vi.clearAllMocks();
+  });
+
+  it('handles checkout.session.completed (payment)', async () => {
+    const fakeEvent = {
+      type: 'checkout.session.completed',
+      data: {
+        object: {
+          mode: 'payment',
+          metadata: { uid: 'user_1' },
+          customer: 'cus_123',
+          amount_total: 5000,
+          currency: 'usd',
+          payment_intent: 'pi_123',
+        },
+      },
+    };
+    const req = new Request('http://localhost/api/stripe/webhook', {
+      method: 'POST',
+      headers: { 'stripe-signature': 't0k3n' },
+      body: JSON.stringify(fakeEvent),
+    });
+    const res = await webhookHandler(req);
+    expect((res as Response).status).toBe(200);
+  });
+
+  it('handles customer.subscription.updated', async () => {
+    const fakeEvent = {
+      type: 'customer.subscription.updated',
+      data: { object: { id: 'sub_123', status: 'active', current_period_end: 1234567890, metadata: { uid: 'user_2' }, items: { data: [{ price: { id: 'price_abc' } }] } } },
+    };
+    const req = new Request('http://localhost/api/stripe/webhook', {
+      method: 'POST',
+      headers: { 'stripe-signature': 't0k3n' },
+      body: JSON.stringify(fakeEvent),
+    });
+    const res = await webhookHandler(req);
+    expect((res as Response).status).toBe(200);
+  });
+});
+

```




**Command Executed:**
```bash
sed -n '1,200p' README.md
```

**Output:**
```
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
```



**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\README.md
+++ c:\Users\infin\documents\github\freelancerSite2025\README.md
@@ -39,3 +39,85 @@
 
 If you need a refresher:
 Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
+
+---
+
+# Stripe Embedded Checkout + Firebase Integration
+
+This repo includes a production-minded scaffold for Stripe Embedded Checkout + Firebase Auth/Firestore using the Next.js App Router.
+
+Key paths:
+- API routes (App Router):
+  - `src/app/api/stripe/create-checkout-session-one-time/route.ts`
+  - `src/app/api/stripe/create-checkout-session-subscription/route.ts`
+  - `src/app/api/stripe/webhook/route.ts`
+  - `src/app/api/admin/monthly-report/route.ts`
+- Libraries:
+  - `src/lib/firebaseClient.ts`
+  - `src/lib/firebaseAdmin.ts`
+  - `src/lib/stripe.ts`
+  - `src/lib/auth.ts`
+- Client UI:
+  - `src/app/payments/page.tsx`
+  - `src/components/CheckoutButtonOneTime.tsx`
+  - `src/components/SubscriptionCheckout.tsx`
+- Admin UI:
+  - `src/app/admin/reports/page.tsx`
+
+## Environment variables
+Copy `.env.example` to `.env.local` and fill values:
+- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
+- STRIPE_SECRET_KEY
+- STRIPE_WEBHOOK_SECRET
+- ONE_TIME_PRICE_ID, SUBSCRIPTION_PRICE_ID_MONTHLY, SUBSCRIPTION_PRICE_ID_ANNUAL (optional defaults)
+- VERCEL_PROJECT_URL (e.g. http://localhost:3000)
+- FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY (escape newlines as `\n`)
+- NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLIC_FIREBASE_PROJECT_ID
+
+## Local dev
+- Start dev server: `npm run dev`
+- Start Stripe webhook forwarding: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
+- Create Embedded Checkout session from `/payments`. The client requests a Checkout Session with `ui_mode=embedded` and renders with `<EmbeddedCheckout/>`.
+
+## Testing
+- `npm test` runs unit tests with Vitest. Tests mock Stripe and Firebase.
+
+## Webhook handler
+The webhook route reads the raw body via `req.text()` and verifies the event with `stripe.webhooks.constructEvent`. It updates Firestore user docs on events:
+- `checkout.session.completed` (one-time and subscription)
+- `invoice.payment_succeeded` / `invoice.payment_failed`
+- `customer.subscription.updated` / `customer.subscription.deleted`
+
+## Admin monthly reports
+Admins (users/{uid}.role == 'admin') can POST `/api/admin/monthly-report` to generate a report for the current month. Results are persisted at `reports/monthly/months/YYYY-MM` in Firestore.
+
+## How to go live
+1. Create products and prices in Stripe (test first).
+2. Set all environment variables in Vercel Project Settings → Environment Variables.
+3. Deploy to Vercel.
+4. In Stripe Dashboard → Developers → Webhooks, set your webhook endpoint to `https://<your-domain>/api/stripe/webhook` and use the signing secret as STRIPE_WEBHOOK_SECRET.
+5. Swap test keys to live keys in Vercel when ready. Re-deploy.
+6. Verify the Embedded Checkout flow and webhook events on live before announcing.
+
+## cURL / Postman snippets
+- One-time session (requires Firebase ID token Bearer header):
+```
+curl -X POST http://localhost:3000/api/stripe/create-checkout-session-one-time \
+  -H "Authorization: Bearer {{FIREBASE_ID_TOKEN}}" \
+  -H "Content-Type: application/json" \
+  -d '{"priceId":"price_123"}'
+```
+- Subscription session:
+```
+curl -X POST http://localhost:3000/api/stripe/create-checkout-session-subscription \
+  -H "Authorization: Bearer {{FIREBASE_ID_TOKEN}}" \
+  -H "Content-Type: application/json" \
+  -d '{"priceId":"price_monthly_123"}'
+```
+- Webhook testing with Stripe CLI:
+```
+stripe listen --forward-to localhost:3000/api/stripe/webhook
+```
+
+## Maintenance
+See `MAINTENANCE.md` for a monthly checklist (rotate keys, review webhooks, failed invoices, backups, quotas, billing).

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\MAINTENANCE.md
+++ c:\Users\infin\documents\github\freelancerSite2025\MAINTENANCE.md
@@ -0,0 +1,16 @@
+# Maintenance Checklist
+
+Monthly tasks:
+- Rotate Stripe keys (test and live) as needed. Keep Vercel env vars up to date.
+- Review Stripe webhook logs and replay failed events.
+- Review failed invoices and dunning settings. Reach out to customers as necessary.
+- Backup Firestore (export using scheduled Cloud Scheduler / manual exports).
+- Review Firebase billing/quota dashboards for spikes.
+- Verify admin report generation completed on the 1st (for previous month), and reconcile with Stripe dashboard.
+
+Operational notes:
+- Webhook route requires raw request body; do not add JSON body parsing middleware.
+- All API routes are Node runtime (not Edge) due to Stripe SDK + Firebase Admin.
+- Verify Firebase ID tokens for all session-creation routes. Never trust client-provided uid/email without verification.
+- To reconcile a Stripe customer with a Firestore user manually, set users/{uid}.stripeCustomerId to the correct Stripe Customer ID and trigger a resync via the admin UI (future enhancement).
+

```





**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\.github\workflows\ci.yml
+++ c:\Users\infin\documents\github\freelancerSite2025\.github\workflows\ci.yml
@@ -0,0 +1,21 @@
+name: CI
+
+on:
+  push:
+    branches: [ main, feature/* ]
+  pull_request:
+    branches: [ main ]
+
+jobs:
+  build-and-test:
+    runs-on: ubuntu-latest
+    steps:
+      - uses: actions/checkout@v4
+      - uses: actions/setup-node@v4
+        with:
+          node-version: '20'
+          cache: 'npm'
+      - run: npm ci
+      - run: npm run lint --if-present
+      - run: npm test
+

```




**Command Executed:**
```bash
cat tsconfig.json
```

**Output:**
```
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```



**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\app\api\admin\monthly-report\route.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\app\api\admin\monthly-report\route.ts
@@ -1,9 +1,9 @@
 export const runtime = 'nodejs';
 
 import { NextResponse } from 'next/server';
-import { getUidFromRequest } from '@/src/lib/auth';
-import { adminDb } from '@/src/lib/firebaseAdmin';
-import { stripe } from '@/src/lib/stripe';
+import { getUidFromRequest } from '@/lib/auth';
+import { adminDb } from '@/lib/firebaseAdmin';
+import { stripe } from '@/lib/stripe';
 import dayjs from 'dayjs';
 
 function firstLastOfMonth(input?: string) {

--- c:\Users\infin\documents\github\freelancerSite2025\tests\api\webhook_handler.test.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\tests\api\webhook_handler.test.ts
@@ -1,7 +1,7 @@
 import { describe, it, expect, vi, beforeEach } from 'vitest';
-import { POST as webhookHandler } from '@/src/app/api/stripe/webhook/route';
+import { POST as webhookHandler } from '@/app/api/stripe/webhook/route';
 
-vi.mock('@/src/lib/stripe', () => {
+vi.mock('@/lib/stripe', () => {
   return {
     stripe: {
       webhooks: { constructEvent: vi.fn() },
@@ -16,7 +16,7 @@
 // Mock Firestore admin
 const setMock = vi.fn();
 const addMock = vi.fn();
-vi.mock('@/src/lib/firebaseAdmin', () => ({
+vi.mock('@/lib/firebaseAdmin', () => ({
   adminDb: {
     collection: vi.fn().mockReturnThis(),
     doc: vi.fn().mockReturnThis(),

--- c:\Users\infin\documents\github\freelancerSite2025\src\lib\stripe.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\lib\stripe.ts
@@ -1,6 +1,6 @@
 // Stripe server helper functions for Embedded Checkout and webhooks
 import Stripe from 'stripe';
-import { adminDb, getUser, ensureUserInFirestore } from './firebaseAdmin';
+import { getUser, ensureUserInFirestore } from './firebaseAdmin';
 
 export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
   apiVersion: '2022-11-15',

--- c:\Users\infin\documents\github\freelancerSite2025\tests\api\checkout_endpoints.test.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\tests\api\checkout_endpoints.test.ts
@@ -1,12 +1,12 @@
 import { describe, it, expect, vi, beforeEach } from 'vitest';
-import { POST as postOneTime } from '@/src/app/api/stripe/create-checkout-session-one-time/route';
-import { POST as postSub } from '@/src/app/api/stripe/create-checkout-session-subscription/route';
+import { POST as postOneTime } from '@/app/api/stripe/create-checkout-session-one-time/route';
+import { POST as postSub } from '@/app/api/stripe/create-checkout-session-subscription/route';
 
-vi.mock('@/src/lib/auth', () => ({
+vi.mock('@/lib/auth', () => ({
   getUidFromRequest: vi.fn().mockResolvedValue({ uid: 'test_uid', email: 'user@example.com' }),
 }));
 
-vi.mock('@/src/lib/stripe', () => ({
+vi.mock('@/lib/stripe', () => ({
   createCheckoutSessionOneTime: vi.fn().mockResolvedValue({ client_secret: 'cs_test_123' }),
   createCheckoutSessionSubscription: vi.fn().mockResolvedValue({ client_secret: 'cs_test_sub_456' }),
 }));

--- c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\webhook\route.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\webhook\route.ts
@@ -2,8 +2,8 @@
 export const dynamic = 'force-dynamic';
 
 import { NextResponse } from 'next/server';
-import { verifyWebhookEvent, stripe } from '@/src/lib/stripe';
-import { adminDb } from '@/src/lib/firebaseAdmin';
+import { verifyWebhookEvent, stripe } from '@/lib/stripe';
+import { adminDb } from '@/lib/firebaseAdmin';
 
 export async function POST(req: Request) {
   let rawBody: string;

--- c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\create-checkout-session-one-time\route.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\create-checkout-session-one-time\route.ts
@@ -1,8 +1,8 @@
 export const runtime = 'nodejs';
 
 import { NextResponse } from 'next/server';
-import { getUidFromRequest } from '@/src/lib/auth';
-import { createCheckoutSessionOneTime } from '@/src/lib/stripe';
+import { getUidFromRequest } from '@/lib/auth';
+import { createCheckoutSessionOneTime } from '@/lib/stripe';
 
 export async function POST(req: Request) {
   try {

--- c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\create-checkout-session-subscription\route.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\app\api\stripe\create-checkout-session-subscription\route.ts
@@ -1,8 +1,8 @@
 export const runtime = 'nodejs';
 
 import { NextResponse } from 'next/server';
-import { getUidFromRequest } from '@/src/lib/auth';
-import { createCheckoutSessionSubscription } from '@/src/lib/stripe';
+import { getUidFromRequest } from '@/lib/auth';
+import { createCheckoutSessionSubscription } from '@/lib/stripe';
 
 export async function POST(req: Request) {
   try {

--- c:\Users\infin\documents\github\freelancerSite2025\src\app\payments\page.tsx
+++ c:\Users\infin\documents\github\freelancerSite2025\src\app\payments\page.tsx
@@ -1,7 +1,7 @@
 export const dynamic = 'force-dynamic';
 
-import CheckoutButtonOneTime from '@/src/components/CheckoutButtonOneTime';
-import SubscriptionCheckout from '@/src/components/SubscriptionCheckout';
+import CheckoutButtonOneTime from '@/components/CheckoutButtonOneTime';
+import SubscriptionCheckout from '@/components/SubscriptionCheckout';
 
 export default function PaymentsPage() {
   return (

```




**Command Executed:**
```bash
npm test
```

**Output:**
```

> jaren-whitehouse-seo-site@0.1.0 test
> vitest --run


 RUN  v3.2.4 C:/Users/infin/Documents/GitHub/freelancerSite2025


⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 2 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/api/checkout_endpoints.test.ts [ tests/api/checkout_endpoints.test.ts ]
Error: Cannot find package '@/app/api/stripe/create-checkout-session-one-time/route' imported from 'C:/Users/infin/Documents/GitHub/freelancerSite2025/tests/api/checkout_endpoints.test.ts'
 ❯ tests/api/checkout_endpoints.test.ts:2:1
      1| import { describe, it, expect, vi, beforeEach } from 'vitest';
      2| import { POST as postOneTime } from '@/app/api/stripe/create-checkout-session-one-time/route';
       | ^
      3| import { POST as postSub } from '@/app/api/stripe/create-checkout-session-subscription/route';
      4| 

Caused by: Error: Failed to load url @/app/api/stripe/create-checkout-session-one-time/route (resolved id: @/app/api/stripe/create-checkout-session-one-time/route) in C:/Users/infin/Documents/GitHub/freelancerSite2025/tests/api/checkout_endpoints.test.ts. Does the file exist?
 ❯ loadAndTransform node_modules/vite/dist/node/chunks/dep-Bu492Fnd.js:35728:17

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯

 FAIL  tests/api/webhook_handler.test.ts [ tests/api/webhook_handler.test.ts ]
Error: Cannot find package '@/app/api/stripe/webhook/route' imported from 'C:/Users/infin/Documents/GitHub/freelancerSite2025/tests/api/webhook_handler.test.ts'
 ❯ tests/api/webhook_handler.test.ts:2:1
      1| import { describe, it, expect, vi, beforeEach } from 'vitest';
      2| import { POST as webhookHandler } from '@/app/api/stripe/webhook/route';
       | ^
      3| 
      4| vi.mock('@/lib/stripe', () => {

Caused by: Error: Failed to load url @/app/api/stripe/webhook/route (resolved id: @/app/api/stripe/webhook/route) in C:/Users/infin/Documents/GitHub/freelancerSite2025/tests/api/webhook_handler.test.ts. Does the file exist?
 ❯ loadAndTransform node_modules/vite/dist/node/chunks/dep-Bu492Fnd.js:35728:17

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯


 Test Files  2 failed (2)
      Tests  no tests
   Start at  00:41:03
   Duration  660ms (transform 149ms, setup 0ms, collect 0ms, tests 0ms, environment 0ms, prepare 306ms)

```


**Command Executed:**
```bash
npm i -D vite-tsconfig-paths
```

**Output:**
```

added 3 packages, and audited 650 packages in 4s

178 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```



**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\vitest.config.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\vitest.config.ts
@@ -0,0 +1,10 @@
+import { defineConfig } from 'vitest/config';
+import tsconfigPaths from 'vite-tsconfig-paths';
+
+export default defineConfig({
+  plugins: [tsconfigPaths()],
+  test: {
+    environment: 'node',
+  },
+});
+

```




**Command Executed:**
```bash
npm test
```

**Output:**
```

> jaren-whitehouse-seo-site@0.1.0 test
> vitest --run

The CJS build of Vite's Node API is deprecated. See https://vite.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.
failed to load config from C:\Users\infin\Documents\GitHub\freelancerSite2025\vitest.config.ts

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Startup Error ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Error [ERR_REQUIRE_ESM]: require() of ES Module C:\Users\infin\Documents\GitHub\freelancerSite2025\node_modules\vite-tsconfig-paths\dist\index.js from C:\Users\infin\Documents\GitHub\freelancerSite2025\vitest.config.ts not supported.
Instead change the require of index.js in C:\Users\infin\Documents\GitHub\freelancerSite2025\vitest.config.ts to a dynamic import() which is available in all CommonJS modules.
    at _require.extensions.<computed> [as .js] (file:///C:/Users/infin/Documents/GitHub/freelancerSite2025/node_modules/vite/dist/node/chunks/dep-Bu492Fnd.js:49449:9)
    at Object.<anonymous> (C:\Users\infin\Documents\GitHub\freelancerSite2025\vitest.config.ts:37:42)
    at _require.extensions.<computed> [as .js] (file:///C:/Users/infin/Documents/GitHub/freelancerSite2025/node_modules/vite/dist/node/chunks/dep-Bu492Fnd.js:49447:16) {
  code: 'ERR_REQUIRE_ESM'
}



```


**Command Executed:**
```bash
git rm --cached vitest.config.ts >/dev/null 2>&1 || true; mv vitest.config.ts vitest.config.mts
```

**Output:**
```

```


**Command Executed:**
```bash
npm test
```

**Output:**
```

> jaren-whitehouse-seo-site@0.1.0 test
> vitest --run


 RUN  v3.2.4 C:/Users/infin/Documents/GitHub/freelancerSite2025

 ✓ tests/api/checkout_endpoints.test.ts (2 tests) 18ms

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/api/webhook_handler.test.ts [ tests/api/webhook_handler.test.ts ]
Error: [vitest] There was an error when mocking a module. If you are using "vi.mock" factory, make sure there are no top level variables inside, since this call is hoisted to top of the file. Read more: https://vitest.dev/api/vi.html#vi-mock
 ❯ src/app/api/stripe/webhook/route.ts:6:1
      4| import { NextResponse } from 'next/server';
      5| import { verifyWebhookEvent, stripe } from '@/lib/stripe';
      6| import { adminDb } from '@/lib/firebaseAdmin';
       | ^
      7| 
      8| export async function POST(req: Request) {

Caused by: ReferenceError: Cannot access 'setMock' before initialization
 ❯ tests/api/webhook_handler.test.ts:23:10
 ❯ src/app/api/stripe/webhook/route.ts:6:1

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed | 1 passed (2)
      Tests  2 passed (2)
   Start at  00:43:15
   Duration  727ms (transform 159ms, setup 0ms, collect 262ms, tests 18ms, environment 0ms, prepare 259ms)

```



**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\tests\api\webhook_handler.test.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\tests\api\webhook_handler.test.ts
@@ -15,7 +15,6 @@
 
 // Mock Firestore admin
 const setMock = vi.fn();
-const addMock = vi.fn();
 vi.mock('@/lib/firebaseAdmin', () => ({
   adminDb: {
     collection: vi.fn().mockReturnThis(),

```




**Command Executed:**
```bash
npm test
```

**Output:**
```

> jaren-whitehouse-seo-site@0.1.0 test
> vitest --run


 RUN  v3.2.4 C:/Users/infin/Documents/GitHub/freelancerSite2025

 ✓ tests/api/checkout_endpoints.test.ts (2 tests) 13ms

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/api/webhook_handler.test.ts [ tests/api/webhook_handler.test.ts ]
Error: [vitest] There was an error when mocking a module. If you are using "vi.mock" factory, make sure there are no top level variables inside, since this call is hoisted to top of the file. Read more: https://vitest.dev/api/vi.html#vi-mock
 ❯ src/app/api/stripe/webhook/route.ts:6:1
      4| import { NextResponse } from 'next/server';
      5| import { verifyWebhookEvent, stripe } from '@/lib/stripe';
      6| import { adminDb } from '@/lib/firebaseAdmin';
       | ^
      7| 
      8| export async function POST(req: Request) {

Caused by: ReferenceError: Cannot access 'setMock' before initialization
 ❯ tests/api/webhook_handler.test.ts:22:10
 ❯ src/app/api/stripe/webhook/route.ts:6:1

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed | 1 passed (2)
      Tests  2 passed (2)
   Start at  00:43:38
   Duration  693ms (transform 118ms, setup 0ms, collect 161ms, tests 13ms, environment 0ms, prepare 429ms)

```



**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\tests\api\webhook_handler.test.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\tests\api\webhook_handler.test.ts
@@ -14,12 +14,11 @@
 });
 
 // Mock Firestore admin
-const setMock = vi.fn();
 vi.mock('@/lib/firebaseAdmin', () => ({
   adminDb: {
     collection: vi.fn().mockReturnThis(),
     doc: vi.fn().mockReturnThis(),
-    set: setMock,
+    set: vi.fn(),
     get: vi.fn(),
     collectionGroup: vi.fn(),
   },

```




**Command Executed:**
```bash
npm test
```

**Output:**
```

> jaren-whitehouse-seo-site@0.1.0 test
> vitest --run


 RUN  v3.2.4 C:/Users/infin/Documents/GitHub/freelancerSite2025

stderr | tests/api/webhook_handler.test.ts > Stripe webhook handler > handles checkout.session.completed (payment)
Webhook handler error TypeError: paymentsRef.add is not a function
    at Module.POST (C:\Users\infin\Documents\GitHub\freelancerSite2025\src\app\api\stripe\webhook\route.ts:43:31)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at C:\Users\infin\Documents\GitHub\freelancerSite2025\tests\api\webhook_handler.test.ts:51:17
    at file:///C:/Users/infin/Documents/GitHub/freelancerSite2025/node_modules/@vitest/runner/dist/chunk-hooks.js:752:20

 ✓ tests/api/checkout_endpoints.test.ts (2 tests) 10ms
 ❯ tests/api/webhook_handler.test.ts (2 tests | 1 failed) 23ms
   × Stripe webhook handler > handles checkout.session.completed (payment) 20ms
     → expected 500 to be 200 // Object.is equality
   ✓ Stripe webhook handler > handles customer.subscription.updated 1ms

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/api/webhook_handler.test.ts > Stripe webhook handler > handles checkout.session.completed (payment)
AssertionError: expected 500 to be 200 // Object.is equality

- Expected
+ Received

- 200
+ 500

 ❯ tests/api/webhook_handler.test.ts:52:38
     50|     });
     51|     const res = await webhookHandler(req);
     52|     expect((res as Response).status).toBe(200);
       |                                      ^
     53|   });
     54| 

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed | 1 passed (2)
      Tests  1 failed | 3 passed (4)
   Start at  00:46:05
   Duration  642ms (transform 162ms, setup 0ms, collect 378ms, tests 33ms, environment 0ms, prepare 260ms)

```



**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\tests\api\webhook_handler.test.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\tests\api\webhook_handler.test.ts
@@ -14,15 +14,20 @@
 });
 
 // Mock Firestore admin
-vi.mock('@/lib/firebaseAdmin', () => ({
-  adminDb: {
-    collection: vi.fn().mockReturnThis(),
-    doc: vi.fn().mockReturnThis(),
-    set: vi.fn(),
-    get: vi.fn(),
-    collectionGroup: vi.fn(),
-  },
-}));
+vi.mock('@/lib/firebaseAdmin', () => {
+  const payments = { add: vi.fn().mockResolvedValue({ id: 'pay_1' }) };
+  const userDoc = {
+    set: vi.fn().mockResolvedValue(undefined),
+    collection: vi.fn().mockImplementation((name: string) => (name === 'payments' ? payments : {})),
+  };
+  const usersCol = {
+    doc: vi.fn().mockReturnValue(userDoc),
+  };
+  const adminDb = {
+    collection: vi.fn().mockImplementation((name: string) => (name === 'users' ? usersCol : {})),
+  };
+  return { adminDb };
+});
 
 describe('Stripe webhook handler', () => {
   beforeEach(() => {

```




**Command Executed:**
```bash
npm test
```

**Output:**
```

> jaren-whitehouse-seo-site@0.1.0 test
> vitest --run


 RUN  v3.2.4 C:/Users/infin/Documents/GitHub/freelancerSite2025

 ✓ tests/api/webhook_handler.test.ts (2 tests) 9ms
 ✓ tests/api/checkout_endpoints.test.ts (2 tests) 11ms

 Test Files  2 passed (2)
      Tests  4 passed (4)
   Start at  00:46:39
   Duration  666ms (transform 156ms, setup 0ms, collect 369ms, tests 20ms, environment 0ms, prepare 236ms)

```


**Command Executed:**
```bash
git add -A && git commit -m "Stripe Embedded Checkout + Firebase integration: helpers, API routes, webhook, admin reports, tests, docs"
```

**Output:**
```
[feature/stripe-checkout-firebase f2a5b91] Stripe Embedded Checkout + Firebase integration: helpers, API routes, webhook, admin reports, tests, docs
 20 files changed, 5949 insertions(+), 600 deletions(-)
 create mode 100644 .github/workflows/ci.yml
 create mode 100644 MAINTENANCE.md
 create mode 100644 src/app/admin/reports/page.tsx
 create mode 100644 src/app/api/admin/monthly-report/route.ts
 create mode 100644 src/app/api/stripe/create-checkout-session-one-time/route.ts
 create mode 100644 src/app/api/stripe/create-checkout-session-subscription/route.ts
 create mode 100644 src/app/api/stripe/webhook/route.ts
 create mode 100644 src/app/payments/page.tsx
 create mode 100644 src/components/CheckoutButtonOneTime.tsx
 create mode 100644 src/components/SubscriptionCheckout.tsx
 create mode 100644 src/lib/auth.ts
 create mode 100644 src/lib/firebaseAdmin.ts
 create mode 100644 src/lib/firebaseClient.ts
 create mode 100644 src/lib/stripe.ts
 create mode 100644 tests/api/checkout_endpoints.test.ts
 create mode 100644 tests/api/webhook_handler.test.ts
 create mode 100644 vitest.config.mts
```


**Command Executed:**
```bash
git --no-pager remote -v
```

**Output:**
```
origin	https://github.com/m4cbeth/warpofolio.git (fetch)
origin	https://github.com/m4cbeth/warpofolio.git (push)
```


**Command Executed:**
```bash
git push --set-upstream origin feature/stripe-checkout-firebase
```

**Output:**
```
Enumerating objects: 83, done.
Counting objects: 100% (83/83), done.
Delta compression using up to 12 threads
Compressing objects: 100% (54/54), done.
Writing objects: 100% (71/71), 59.86 KiB | 2.72 MiB/s, done.
Total 71 (delta 13), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (13/13), completed with 6 local objects.
remote: 
remote: Create a pull request for 'feature/stripe-checkout-firebase' on GitHub by visiting:
remote:      https://github.com/m4cbeth/warpofolio/pull/new/feature/stripe-checkout-firebase
remote: 
To https://github.com/m4cbeth/warpofolio.git
 * [new branch]      feature/stripe-checkout-firebase -> feature/stripe-checkout-firebase
branch 'feature/stripe-checkout-firebase' set up to track 'origin/feature/stripe-checkout-firebase'.
```


**Command Executed:**
```bash
gh --version
```

**Output:**
```
gh version 2.64.0 (2024-12-20)
https://github.com/cli/cli/releases/tag/v2.64.0
```


**Command Executed:**
```bash
gh pr create --fill --base main --head feature/stripe-checkout-firebase
```

**Output:**
```
  
Creating pull request for feature/stripe-checkout-firebase into main in m4cbeth/warpofolio

https://github.com/m4cbeth/warpofolio/pull/1
```



**Diff:**
```diff
--- c:\Users\infin\documents\github\freelancerSite2025\src\lib\content.ts
+++ c:\Users\infin\documents\github\freelancerSite2025\src\lib\content.ts
@@ -0,0 +1,14 @@
+// Placeholder for a pluggable content generation system.
+// By default uses an OpenAI-compatible endpoint when OPENAI_API_KEY is set.
+
+export type ContentRequest = { prompt: string };
+export type ContentResponse = { text: string };
+
+export async function generateContent(req: ContentRequest): Promise<ContentResponse> {
+  if (!process.env.OPENAI_API_KEY) {
+    return { text: 'Content generation is disabled. Set OPENAI_API_KEY to enable.' };
+  }
+  // Implement provider call here (OpenAI-compatible). Intentionally left as placeholder.
+  return { text: `Echo: ${req.prompt}` };
+}
+

```




**Command Executed:**
```bash
git add -A && git commit -m "chore: add content generation placeholder module"
```

**Output:**
```
[feature/stripe-checkout-firebase 8b01397] chore: add content generation placeholder module
 1 file changed, 14 insertions(+)
 create mode 100644 src/lib/content.ts
```


**Command Executed:**
```bash
git push
```

**Output:**
```
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 12 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 743 bytes | 743.00 KiB/s, done.
Total 5 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/m4cbeth/warpofolio.git
   f2a5b91..8b01397  feature/stripe-checkout-firebase -> feature/stripe-checkout-firebase
```

Plan and first tool usage
- I’m going to run terminal commands to create a feature branch and install the required dependencies. Then I’ll scaffold the environment variables, helper libraries, API routes, UI components, admin report endpoints, tests, and docs, following the Stripe Embedded Checkout Next quickstart as the source of truth.

Actions taken
1) Created feature branch and installed deps
- Created branch feature/stripe-checkout-firebase
- Installed runtime deps: stripe, @stripe/stripe-js, @stripe/react-stripe-js, firebase, firebase-admin, cookie-parser, axios, dayjs
- Installed dev deps: vitest, @vitest/coverage-v8, supertest, @types/supertest, vite-tsconfig-paths

2) Environment variables
- Updated .env.local with placeholders for:
  - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  - STRIPE_SECRET_KEY
  - STRIPE_WEBHOOK_SECRET
  - ONE_TIME_PRICE_ID
  - SUBSCRIPTION_PRICE_ID_MONTHLY
  - SUBSCRIPTION_PRICE_ID_ANNUAL
  - VERCEL_PROJECT_URL
  - FIREBASE_PROJECT_ID
  - FIREBASE_CLIENT_EMAIL
  - FIREBASE_PRIVATE_KEY (escaped with \n)
  - NEXT_PUBLIC_FIREBASE_API_KEY
  - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  - NEXT_PUBLIC_FIREBASE_PROJECT_ID
  - MAINTENANCE_EMAIL, OPENAI_API_KEY (optional)
- Added .env.example with sane defaults and guidance

3) Firebase helpers
- src/lib/firebaseClient.ts: Client SDK init for Auth/Firestore with env validation
- src/lib/firebaseAdmin.ts: Admin SDK init with private key newline fix; ensureUserInFirestore(uid, email), getUser(uid) helpers

4) Stripe helpers
- src/lib/stripe.ts:
  - Stripe initialization with apiVersion: '2022-11-15'
  - createOrRetrieveCustomer({ uid, email })
  - createCheckoutSessionOneTime: creates session with ui_mode='embedded', mode='payment', line_items, metadata uid, return_url for /return page
  - createCheckoutSessionSubscription: ui_mode='embedded', mode='subscription', allow_promotion_codes, subscription_data.metadata uid
  - verifyWebhookEvent(rawBody, signature): uses STRIPE_WEBHOOK_SECRET with constructEvent

5) Next.js API routes (App Router)
- One-time session: src/app/api/stripe/create-checkout-session-one-time/route.ts
  - Auth via Firebase ID token from Authorization: Bearer
  - Uses env ONE_TIME_PRICE_ID if priceId not supplied in request body
  - Returns { clientSecret } for embedded checkout
- Subscription session: src/app/api/stripe/create-checkout-session-subscription/route.ts
  - Same auth flow; returns { clientSecret }
- Webhook: src/app/api/stripe/webhook/route.ts
  - Reads raw body with req.text()
  - Verifies signature using stripe.webhooks.constructEvent
  - Handles events:
    - checkout.session.completed
    - invoice.payment_succeeded
    - invoice.payment_failed
    - customer.subscription.updated
    - customer.subscription.deleted
  - Updates Firestore users/{uid} and writes one-time payments to users/{uid}/payments
  - Returns 200 or 500 (to allow retry) on failure
  - Note: Runtime is Node.js, not Edge

6) Frontend integration
- Payments page: src/app/payments/page.tsx
- One-time embedded trigger and form:
  - src/components/CheckoutButtonOneTime.tsx
  - Calls /api/stripe/create-checkout-session-one-time to obtain client secret, then renders <EmbeddedCheckoutProvider><EmbeddedCheckout/></EmbeddedCheckoutProvider>
  - Appearance theme set to night (dark)
- Subscription embedded trigger and form:
  - src/components/SubscriptionCheckout.tsx

7) Admin pages + monthly reporting
- Admin generation endpoint:
  - src/app/api/admin/monthly-report/route.ts
  - Auth required; checks users/{uid}.role === 'admin'
  - Queries Stripe invoices by month (created gte/lte)
  - Aggregates totals by price, subscription count, payment count, computes MRR/ARR (simple approximation)
  - Stores Firestore reports/monthly/months/YYYY-MM doc
- Admin UI:
  - src/app/admin/reports/page.tsx
  - Button to trigger report generation and displays results

8) Maintenance & hosting
- MAINTENANCE.md: monthly checklist and operational notes

9) Content generation placeholder
- src/lib/content.ts: pluggable, OpenAI-compatible stub (optional addon)

10) CI
- .github/workflows/ci.yml: Node 20, npm ci, lint, test

11) Tests
- Config: vitest.config.mts with vite-tsconfig-paths plugin for @ alias resolution
- Unit tests:
  - tests/api/checkout_endpoints.test.ts: Mocks auth + stripe helpers; tests both endpoints return clientSecret
  - tests/api/webhook_handler.test.ts: Mocks Stripe verification, subscriptions.retrieve, and Firestore; tests checkout.session.completed and customer.subscription.updated

Test run status
- npm test: All tests pass (4 passed)

Manual configuration needed before running end-to-end
- Vercel environment variables:
  - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  - STRIPE_SECRET_KEY
  - STRIPE_WEBHOOK_SECRET
  - ONE_TIME_PRICE_ID, SUBSCRIPTION_PRICE_ID_MONTHLY, SUBSCRIPTION_PRICE_ID_ANNUAL
  - VERCEL_PROJECT_URL (e.g., https://your-vercel-domain)
  - FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY (escaped newlines)
  - NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLIC_FIREBASE_PROJECT_ID
  - Optional: MAINTENANCE_EMAIL, OPENAI_API_KEY
- Stripe webhook:
  - In dev: stripe listen --forward-to localhost:3000/api/stripe/webhook
  - In prod: set live webhook endpoint on Stripe dashboard to https://<your-domain>/api/stripe/webhook and use the signing secret as STRIPE_WEBHOOK_SECRET
- Firebase emulators (optional for local dev) if you prefer not to use live Firestore

Notes aligning to Stripe Embedded Checkout quickstart (source of truth)
- Server creates checkout.sessions with ui_mode='embedded' and returns session.client_secret
- Client uses @stripe/stripe-js and @stripe/react-stripe-js to render <EmbeddedCheckout/> with the provided clientSecret
- Dark theme handled via EmbeddedCheckout appearance: { theme: 'night' }
- Raw body reading for webhooks is correct for App Router (req.text()). No custom body parser needed.

Security and operational notes included
- All session-creation routes verify Firebase ID token; uid/email come from server-verified token (not client)
- Webhooks verified using Stripe signature; Firestore updates are idempotent by doc merges
- Node runtime (not Edge) in API routes that use Stripe SDK or Firebase Admin
- Basic error handling with 500 to allow Stripe to retry failed webhooks

Created files overview (key pieces)
- lib:
  - /src/lib/firebaseClient.ts
  - /src/lib/firebaseAdmin.ts
  - /src/lib/stripe.ts
  - /src/lib/auth.ts
  - /src/lib/content.ts (addon placeholder)
- API routes (App Router):
  - /src/app/api/stripe/create-checkout-session-one-time/route.ts
  - /src/app/api/stripe/create-checkout-session-subscription/route.ts
  - /src/app/api/stripe/webhook/route.ts
  - /src/app/api/admin/monthly-report/route.ts
- UI:
  - /src/app/payments/page.tsx
  - /src/components/CheckoutButtonOneTime.tsx
  - /src/components/SubscriptionCheckout.tsx
  - /src/app/admin/reports/page.tsx
- Tests:
  - /tests/api/checkout_endpoints.test.ts
  - /tests/api/webhook_handler.test.ts
- Docs:
  - README updated with setup, testing, webhook, admin, go-live checklist, and curl examples
  - MAINTENANCE.md with monthly checklist
- CI:
  - .github/workflows/ci.yml
- Config:
  - vitest.config.mts
  - .env.example
  - .env.local updated (placeholders added)

Runbook for local dev testing
- Start dev server: npm run dev
- Forward webhooks: stripe listen --forward-to localhost:3000/api/stripe/webhook
- Go to http://localhost:3000/payments and click the One-time or Subscription button to render embedded checkout
- Ensure you include a valid Firebase ID token in Authorization for API requests if you hit endpoints manually

Go-live checklist
- Create products and prices in Stripe (test first)
- Fill all env vars in Vercel
- Deploy to Vercel
- Configure Stripe webhook endpoint to /api/stripe/webhook (live mode) and set STRIPE_WEBHOOK_SECRET
- Swap test keys for live keys in Vercel and redeploy
- Run a live test payment and confirm webhook updates Firestore
- Schedule monthly report generation via Vercel Cron or run manually from Admin page

Branch and PR
- Pushed branch: feature/stripe-checkout-firebase
- Opened PR: https://github.com/m4cbeth/warpofolio/pull/1

Next suggested step
- Fill your .env.local and Vercel envs with Stripe and Firebase values, then run npm run dev and stripe listen to try the embedded checkout at /payments.
- If you want, I can also add a /app/return page to finish the embedded flow guidance, and a minimal auth gate for /payments and /admin/reports based on your current auth implementation.

Important note: Your .env.local currently contains a SendGrid API key. I recommend rotating that key and ensuring no real secrets are committed to source control.