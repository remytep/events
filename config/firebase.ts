// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYv7HtHB_zSvZIV_UIp4mkwp0DaYYy1Yg",
    authDomain: "myevents-e96bc.firebaseapp.com",
    projectId: "myevents-e96bc",
    storageBucket: "myevents-e96bc.appspot.com",
    messagingSenderId: "807612906965",
    appId: "1:807612906965:web:1261e60e98d7d189be115c",
    measurementId: "G-G59B715L2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);