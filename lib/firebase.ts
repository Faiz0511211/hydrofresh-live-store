
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAlhH8Zqt7b2NaRcmsnnxrwpeew4ROdti4",
  authDomain: "hydrofresh-store-live.firebaseapp.com",
  projectId: "hydrofresh-store-live",
  storageBucket: "hydrofresh-store-live.firebasestorage.app",
  messagingSenderId: "29650876292",
  appId: "1:29650876292:web:162a05702b51736af30fd1",
  measurementId: "G-BSE0FH4QHE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
