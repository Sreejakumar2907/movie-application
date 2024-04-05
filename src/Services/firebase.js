// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjVP5dhXXNwETIudzK57kE_JNNL_Ld1rc",
  authDomain: "movie-web-application-dfdc8.firebaseapp.com",
  projectId: "movie-web-application-dfdc8",
  storageBucket: "movie-web-application-dfdc8.appspot.com",
  messagingSenderId: "237917203870",
  appId: "1:237917203870:web:ce5f5c8f3d5e391ba0fa8f",
  measurementId: "G-TJJ87X57F9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const db=getFirestore(app)
