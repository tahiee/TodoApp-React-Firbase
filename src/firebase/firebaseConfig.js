// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxmF4KUQ-mMzdKWZucx-rc68pueChwvJM",
    authDomain: "todoapp-firebase-c99d5.firebaseapp.com",
    projectId: "todoapp-firebase-c99d5",
    storageBucket: "todoapp-firebase-c99d5.appspot.com",
    messagingSenderId: "816417989920",
    appId: "1:816417989920:web:e5596fa7725387f2d26345",
    measurementId: "G-HSMCRSG2R0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);