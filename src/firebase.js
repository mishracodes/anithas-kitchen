import { initializeApp } from "firebase/app";
const { getFirestore } = require('firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyCkL9a4kTovjd77bguYdSWTTo6zL_OX2nE",
  authDomain: "anithaskitchen.firebaseapp.com",
  projectId: "anithaskitchen",
  storageBucket: "anithaskitchen.appspot.com",
  messagingSenderId: "806496404615",
  appId: "1:806496404615:web:a886cb7291b693d4436422",
  measurementId: "G-34LFJFWV5X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;
