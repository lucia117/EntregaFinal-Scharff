// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz_Ut_pIn15qdED9hbeJs9Ff-E_fz4u_A",
  authDomain: "proyecto-coderhouse-reac-ba7f8.firebaseapp.com",
  projectId: "proyecto-coderhouse-reac-ba7f8",
  storageBucket: "proyecto-coderhouse-reac-ba7f8.appspot.com",
  messagingSenderId: "1061765675348",
  appId: "1:1061765675348:web:e4f58966ce9c9e5773f0c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )

