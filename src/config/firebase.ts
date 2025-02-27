import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA6BiVKGFLSz9MQV4mRtPR7joF06S2oyRk",
  authDomain: "lumethblog.firebaseapp.com",
  projectId: "lumethblog",
  storageBucket: "lumethblog.appspot.com",
  messagingSenderId: "940044308060",
  appId: "1:940044308060:web:8247e3b5d38aa377822099",
  measurementId: "G-62TSS7XNWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Enable Firestore offline persistence
import { enableIndexedDbPersistence } from 'firebase/firestore';

try {
  enableIndexedDbPersistence(db);
} catch (err) {
  console.error('Failed to enable offline persistence:', err);
}