
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBrGvHrCpgbzJxIiRyTu0a1Az6KKbUb0qk",
    authDomain: "prepwise-6f6c1.firebaseapp.com",
    projectId: "prepwise-6f6c1",
    storageBucket: "prepwise-6f6c1.firebasestorage.app",
    messagingSenderId: "1024564707633",
    appId: "1:1024564707633:web:f216444fc9400baecab010",
    measurementId: "G-3QJGGPBR0F"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);