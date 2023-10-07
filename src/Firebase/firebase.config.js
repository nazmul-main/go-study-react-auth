
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE6HG5YdoJ5fICloZHnPq-m2t4feLXWBM",
  authDomain: "go-sutdy-auth.firebaseapp.com",
  projectId: "go-sutdy-auth",
  storageBucket: "go-sutdy-auth.appspot.com",
  messagingSenderId: "1011758919219",
  appId: "1:1011758919219:web:fa4f1f9c8968f4fe30bd46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
