// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "travel-advisor-f57fb.firebaseapp.com",
  projectId: "travel-advisor-f57fb",
  storageBucket: "travel-advisor-f57fb.appspot.com",
  messagingSenderId: "734998820041",
  appId: "1:734998820041:web:4db1fee853754f8ed54918",
  measurementId: "G-RYJ05R9V87",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
