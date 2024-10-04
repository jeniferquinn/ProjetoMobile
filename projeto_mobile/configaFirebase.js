// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRK_jdcvbjuiWHXS-hymdFQBRMG8_OBwc",
    authDomain: "haute-couture-80297.firebaseapp.com",
    projectId: "haute-couture-80297",
    storageBucket: "haute-couture-80297.appspot.com",
    messagingSenderId: "92929766805",
    appId: "1:92929766805:web:9351580de1452de2dfb29c",
    measurementId: "G-6CC9QEXBXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
