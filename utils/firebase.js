// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBec9LSZ37WtVXKp83Qj7gKcTYTsYcjA4g",
  authDomain: "bongo-bangla.firebaseapp.com",
  projectId: "bongo-bangla",
  storageBucket: "bongo-bangla.appspot.com",
  messagingSenderId: "19612817777",
  appId: "1:19612817777:web:f636aeca4f8d57767ffed0",
  measurementId: "G-KZGM8M4C0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
