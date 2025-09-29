import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArVW3mSVlCxUCOMEUHlZv2GN4Vp70nwtU",
    authDomain: "empowered-nyu.firebaseapp.com",
    projectId: "empowered-nyu",
    storageBucket: "empowered-nyu.firebasestorage.app",
    messagingSenderId: "819490691955",
    appId: "1:819490691955:web:636d5dd5fc272c0190c306",
    measurementId: "G-4C8ZHEQHM7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
