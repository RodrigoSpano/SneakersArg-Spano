// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCdtqCk-_XzkZADZjMmYRBWQkRo6auBa4",
  authDomain: "rj-sneakers.firebaseapp.com",
  projectId: "rj-sneakers",
  storageBucket: "rj-sneakers.appspot.com",
  messagingSenderId: "285537896312",
  appId: "1:285537896312:web:9d7f8af3d340b50886ea8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)