// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO3Tez2a5Iqvr8IdkpHKd_Mf7unTFx0Jc",
  authDomain: "fireship-tutorial-fkit.firebaseapp.com",
  projectId: "fireship-tutorial-fkit",
  storageBucket: "fireship-tutorial-fkit.appspot.com",
  messagingSenderId: "917977949279",
  appId: "1:917977949279:web:8dc61e18c9b433e37e67ea"
};

// Initialize Firebase
export const db = getFirestore();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();