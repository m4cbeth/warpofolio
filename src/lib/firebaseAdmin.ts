// Server-side Firebase Admin SDK initialization and helpers
// Ensures singleton app init and provides ensureUserInFirestore helper.

import admin from 'firebase-admin';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

function required(name: string, value: string | undefined): string {
  if (!value) throw new Error(`Missing required env var ${name} (server). Set it in Vercel & .env.local`);
  return value;
}

// Parse private key with escaped newlines
function parsePrivateKey(key: string) {
  return key.replace(/\\n/g, '\n');
}

// Initialize admin app only once
if (!admin.apps.length) {
  const projectId = required('FIREBASE_PROJECT_ID', process.env.FIREBASE_PROJECT_ID);
  const clientEmail = required('FIREBASE_CLIENT_EMAIL', process.env.FIREBASE_CLIENT_EMAIL);
  const privateKey = required('FIREBASE_PRIVATE_KEY', process.env.FIREBASE_PRIVATE_KEY);

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey: parsePrivateKey(privateKey),
    } as admin.ServiceAccount),
  });
}

export const adminAuth = admin.auth();
export const adminDb = getFirestore();

export type UserDoc = {
  email: string | null;
  stripeCustomerId: string | null;
  subscriptionStatus?: string | null;
  subscriptionId?: string | null;
  currentPeriodEnd?: number | null; // Unix seconds
  priceId?: string | null;
  role?: 'user' | 'admin';
  createdAt?: FirebaseFirestore.FieldValue;
  updatedAt?: FirebaseFirestore.FieldValue;
};

export async function ensureUserInFirestore(uid: string, email: string | null) {
  const ref = adminDb.collection('users').doc(uid);
  const snap = await ref.get();
  const now = FieldValue.serverTimestamp();
  if (!snap.exists) {
    const data: UserDoc = {
      email,
      stripeCustomerId: null,
      subscriptionStatus: null,
      subscriptionId: null,
      currentPeriodEnd: null,
      priceId: null,
      role: 'user',
      createdAt: now,
      updatedAt: now,
    };
    await ref.set(data, { merge: true });
  } else {
    await ref.set({ email, updatedAt: now }, { merge: true });
  }
  return ref;
}

export async function getUser(uid: string) {
  const ref = adminDb.collection('users').doc(uid);
  const snap = await ref.get();
  return { ref, data: snap.exists ? (snap.data() as UserDoc) : null };
}

