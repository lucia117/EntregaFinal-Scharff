// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyBz_Ut_pIn15qdED9hbeJs9Ff-E_fz4u_A",
  authDomain:"proyecto-coderhouse-reac-ba7f8.firebaseapp.com",
  projectId:"proyecto-coderhouse-reac-ba7f8",
  storageBucket:"proyecto-coderhouse-reac-ba7f8.appspot.com",
  messagingSenderId:"1061765675348",
  appId:"1:1061765675348:web:e4f58966ce9c9e5773f0c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

/*
const apiKey= process.env.REACT_APP_apiKey_ENV
const authDomain= process.env.REACT_APP_authDomain_ENV
const projectId= process.env.REACT_APP_projectId_ENV
const storageBucket= process.env.REACT_APP_storageBucket_ENV
const messagingSenderId= process.env.REACT_APP_messagingSenderId_ENV
const appId= process.env.REACT_APP_appId_ENV
 */