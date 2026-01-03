// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOPe79QD6FXt7_dNKSssAipcze3h9nESI",
  authDomain: "upcycle-connect-ef8b1.firebaseapp.com",
  projectId: "upcycle-connect-ef8b1",
  storageBucket: "upcycle-connect-ef8b1.firebasestorage.app",
  messagingSenderId: "84001721516",
  appId: "1:84001721516:web:14412c7b61ee87a6d26309",
  measurementId: "G-182VP93W43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
