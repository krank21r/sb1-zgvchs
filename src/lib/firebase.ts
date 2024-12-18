import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkGH_0njh2nSsnVrjxOCBjkBsUJ6nScFM",
  authDomain: "rsp-dashboard.firebaseapp.com",
  projectId: "rsp-dashboard",
  storageBucket: "rsp-dashboard.firebasestorage.app",
  messagingSenderId: "66660450430",
  appId: "1:66660450430:web:636a9ca27d369307d8d82f",
  measurementId: "G-J07EWF170L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);