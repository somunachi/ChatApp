// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqS4p5OB-XTKwrbQDebUqRj8bdTLDQ690",
  authDomain: "celebchat-bf903.firebaseapp.com",
  projectId: "celebchat-bf903",
  storageBucket: "celebchat-bf903.appspot.com",
  messagingSenderId: "186733332449",
  appId: "1:186733332449:web:880b9041ead624f5d574a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();