// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmuRd0hRL6Kd0Y5sLg4xyM0MFKY7pvzA4",
  authDomain: "service-share-422ca.firebaseapp.com",
  projectId: "service-share-422ca",
  storageBucket: "service-share-422ca.firebasestorage.app",
  messagingSenderId: "590299471382",
  appId: "1:590299471382:web:008e902e147259729bdf37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth