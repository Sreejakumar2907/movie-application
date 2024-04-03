// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhuWXuPxVtVf_1POxx1LD9YTF_XZxxbxA",
  authDomain: "movie-application-7ddca.firebaseapp.com",
  projectId: "movie-application-7ddca",
  storageBucket: "movie-application-7ddca.appspot.com",
  messagingSenderId: "987437324239",
  appId: "1:987437324239:web:7b5c10da1baa85ea4924ba",
  measurementId: "G-FQEYFN7TFW"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth=getAuth (app);
 export default app;
// export const db=app.firestore()