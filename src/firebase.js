// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhYcDCvNRKoShG3QY8UhXQce2-R7puFxA",
  authDomain: "chat-app-df187.firebaseapp.com",
  projectId: "chat-app-df187",
  storageBucket: "chat-app-df187.appspot.com",
  messagingSenderId: "520870968204",
  appId: "1:520870968204:web:b8390a0e2fbe6cafadf4a9",
  measurementId: "G-3FMKLSNM1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)