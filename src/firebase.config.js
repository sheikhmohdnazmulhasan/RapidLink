
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7nb45NBdUa3nXH8NLbw21NngyUzlIg3A",
    authDomain: "rapid-link-79eb0.firebaseapp.com",
    projectId: "rapid-link-79eb0",
    storageBucket: "rapid-link-79eb0.appspot.com",
    messagingSenderId: "577273762702",
    appId: "1:577273762702:web:6199af1141f7da4f428adf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);