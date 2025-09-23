// Client-side Firebase initialization for Auth and Firestore
// Reads public env vars and throws helpful errors if missing.

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCHHrV4Qrg4JSz8MoBpWtsrwoN-5xZcMYY",
  authDomain: "jarenwhitehouse.firebaseapp.com",
  projectId: "jarenwhitehouse",
  storageBucket: "jarenwhitehouse.firebasestorage.app",
  messagingSenderId: "1097374959314",
  appId: "1:1097374959314:web:841657efe06b2a91760f0b"
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

