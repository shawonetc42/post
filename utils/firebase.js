// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi-SMGsVLnahV1nRwsoZOyTJ4TMdQcHAk",
  authDomain: "post-7139b.firebaseapp.com",
  projectId: "post-7139b",
  storageBucket: "post-7139b.appspot.com",
  messagingSenderId: "225637369877",
  appId: "1:225637369877:web:8ba4a086eab15bcc68e61c",
  measurementId: "G-22N2CNM99N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
