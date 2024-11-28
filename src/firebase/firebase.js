// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyqQop_YbmutX8C-mtJSYoS4Cr-usdamM",
  authDomain: "ga-jamia.firebaseapp.com",
  projectId: "ga-jamia",
  storageBucket: "ga-jamia.firebasestorage.app",
  messagingSenderId: "290394895161",
  appId: "1:290394895161:web:b9b96b22be8b113eabaee8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

export { app, auth };
