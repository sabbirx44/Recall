// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR7g8cTWURIBzwaZiG3JxTjp5V-RPm4TE",
  authDomain: "auth-moha-milon-deaa2.firebaseapp.com",
  projectId: "auth-moha-milon-deaa2",
  storageBucket: "auth-moha-milon-deaa2.appspot.com",
  messagingSenderId: "732577612893",
  appId: "1:732577612893:web:2766e57fc09792016c39b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;