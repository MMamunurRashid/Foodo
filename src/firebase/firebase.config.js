// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDga8_O0KCreSA5EwKAiJBntpMhJDzyzAQ",
  authDomain: "rms-foodo.firebaseapp.com",
  projectId: "rms-foodo",
  storageBucket: "rms-foodo.appspot.com",
  messagingSenderId: "706167327524",
  appId: "1:706167327524:web:47f5e3872de151ad1dc1b1",
  measurementId: "G-43ELJZRSNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;