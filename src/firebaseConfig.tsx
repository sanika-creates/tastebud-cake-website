// src/firebaseConfig.tsx
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tastebuds-mumbai.firebaseapp.com",
  databaseURL: "https://tastebuds-mumbai-default-rtdb.firebaseio.com",
  projectId: "tastebuds-mumbai",
  storageBucket: "tastebuds-mumbai.firebasestorage.app",
  messagingSenderId: "517777431871",
  appId: "1:517777431871:web:176eca7cdfa20db1bc078a",
  measurementId: "G-BGGLZVN3HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
