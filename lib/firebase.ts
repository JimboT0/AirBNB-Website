// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBraBtVq15G6oecVrBScCJf4StFu3QaQlo",
  authDomain: "roomflow-ec80a.firebaseapp.com",
  databaseURL: "https://roomflow-ec80a-default-rtdb.firebaseio.com",
  projectId: "roomflow-ec80a",
  storageBucket: "roomflow-ec80a.appspot.com",
  messagingSenderId: "116614565742",
  appId: "1:116614565742:web:5ae2e89b2deae4ef84bb7f",
  measurementId: "G-HM4P3XGREL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };