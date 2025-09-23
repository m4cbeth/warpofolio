// Client-side Firebase initialization for Auth and Firestore
// Reads public env vars and throws helpful errors if missing.

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

function required(name: string, value: string | undefined) {
  if (!value) {
    throw new Error(`Missing required env var ${name} (client). Add it to .env.local`);
  }
  return value;
}

const firebaseConfig = {
  apiKey: required('NEXT_PUBLIC_FIREBASE_API_KEY', process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
  authDomain: required('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
  projectId: required('NEXT_PUBLIC_FIREBASE_PROJECT_ID', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
};

let app: FirebaseApp;

export function getFirebaseApp(): FirebaseApp {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0]!;
  }
  return app;
}

export const firebaseAuth = () => getAuth(getFirebaseApp());
export const firestoreClient = () => getFirestore(getFirebaseApp());

