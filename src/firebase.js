import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0VI6mKlsHVETk_5MFGjrw_k8CUx0Yvsw",
    authDomain: "empowered-nyu.firebaseapp.com",
    projectId: "empowered-nyu",
    storageBucket: "empowered-nyu.firebasestorage.app",
    messagingSenderId: "819490691955",
    appId: "1:819490691955:web:214ab60d515b98ae90c306",
    measurementId: "G-RFRH7587EZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
