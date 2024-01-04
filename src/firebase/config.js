// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiidneC6KDmj2z-L1_Rd6kIj35aBdik-U",
  authDomain: "react-js-proyecto-juanbruno.firebaseapp.com",
  projectId: "react-js-proyecto-juanbruno",
  storageBucket: "react-js-proyecto-juanbruno.appspot.com",
  messagingSenderId: "818439647120",
  appId: "1:818439647120:web:15f27ab0f069b6c9e28d15",
  measurementId: "G-9RRML7TMJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

export const dataBase = getFirestore(app)