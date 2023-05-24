// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEiMW7que50L8giovCUqq1jkj1kMv-4Fk",
  authDomain: "fir-login-4c5a4.firebaseapp.com",
  projectId: "fir-login-4c5a4",
  storageBucket: "fir-login-4c5a4.appspot.com",
  messagingSenderId: "250544211113",
  appId: "1:250544211113:web:ffaa3d1e31afc529d3d5b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};