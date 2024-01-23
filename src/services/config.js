import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAZELJ0h-RlW29EpBR7Otu6J4qetz8jUSA",
    authDomain: "prueba2-f940b.firebaseapp.com",
    projectId: "prueba2-f940b",
    storageBucket: "prueba2-f940b.appspot.com",
    messagingSenderId: "745223076841",
    appId: "1:745223076841:web:c4888082bf97e83de32978"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);