// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSy_OyPb3gAE1Tb4nvWtHs-CZycXvebN8",
  authDomain: "don-julio-vite.firebaseapp.com",
  projectId: "don-julio-vite",
  storageBucket: "don-julio-vite.appspot.com",
  messagingSenderId: "391207579475",
  appId: "1:391207579475:web:251e5d50a28e126562bba6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
