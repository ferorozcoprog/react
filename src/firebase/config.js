// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzA2-xLzeqBnQJhE_bWgnQFQOP5izVkpo",
    authDomain: "proyecto-final-b14f1.firebaseapp.com",
    projectId: "proyecto-final-b14f1",
    storageBucket: "proyecto-final-b14f1.appspot.com",
    messagingSenderId: "457029068195",
    appId: "1:457029068195:web:8e26a326364797f942a616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)