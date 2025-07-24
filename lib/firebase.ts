import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL1wojiPJ1vRhgydRLl6KvSil05vMjnZw",
  authDomain: "hydro-fresh-store.firebaseapp.com",
  projectId: "hydro-fresh-store",
  storageBucket: "hydro-fresh-store.appspot.com",
  messagingSenderId: "1090699587135",
  appId: "1:1090699587135:web:653e70dd244c5cc9c1928a"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };