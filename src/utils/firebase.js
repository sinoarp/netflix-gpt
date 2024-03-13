// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZEbyaqAD21aZWRYJg8ITh9vXzhSS0J6c",
  authDomain: "netflixgpt-d18cd.firebaseapp.com",
  projectId: "netflixgpt-d18cd",
  storageBucket: "netflixgpt-d18cd.appspot.com",
  messagingSenderId: "955251732324",
  appId: "1:955251732324:web:b7a888ef8d0a87bde01471",
  measurementId: "G-3EZB5GQQC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();