// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBMnqTsvOIpz2ZrrCSAjbN1OaBU8nHtAk",
  authDomain: "cocochat-84865.firebaseapp.com",
  projectId: "cocochat-84865",
  storageBucket: "cocochat-84865.appspot.com",
  messagingSenderId: "806055311852",
  appId: "1:806055311852:web:06e0b305505cebdb47a8c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();