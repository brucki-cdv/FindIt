// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm0CMjOlOjhotIFCfsHToTFwpKcfQffCc",
  authDomain: "findit-3bbfb.firebaseapp.com",
  projectId: "findit-3bbfb",
  storageBucket: "findit-3bbfb.appspot.com",
  messagingSenderId: "55692229242",
  appId: "1:55692229242:web:a2687c80655b69a04c59c3",
  measurementId: "G-3W3H573WP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

export {app, storage}