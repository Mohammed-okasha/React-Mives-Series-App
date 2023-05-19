// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY1WUyspyW5ZuBEUysCWPAD7oFraYLNuQ",
  authDomain: "netflix-clone-61d73.firebaseapp.com",
  projectId: "netflix-clone-61d73",
  storageBucket: "netflix-clone-61d73.appspot.com",
  messagingSenderId: "541725782662",
  appId: "1:541725782662:web:cd73c1190960a21f91d707",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database Ref
export const dbRef = ref(getDatabase(app));

// Auth
export const auth = getAuth(app);
