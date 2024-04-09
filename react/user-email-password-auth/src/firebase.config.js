// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxFfZBGN90I6h8YFNSg6I_Z8aZP1f8GnE",
    authDomain: "user-email-password-auth-4931d.firebaseapp.com",
    projectId: "user-email-password-auth-4931d",
    storageBucket: "user-email-password-auth-4931d.appspot.com",
    messagingSenderId: "893583791731",
    appId: "1:893583791731:web:77f71f8fcebc4167b63c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;