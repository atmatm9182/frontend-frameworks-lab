import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBidfb4Wko3xS_m13JVpb61ulvS6KSXvis",
    authDomain: "frontend-lab-a48bd.firebaseapp.com",
    projectId: "frontend-lab-a48bd",
    storageBucket: "frontend-lab-a48bd.firebasestorage.app",
    messagingSenderId: "70278065661",
    appId: "1:70278065661:web:4f6ac72525f7e1ea563d94",
    measurementId: "G-QF0Z3WT0RQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

