// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHp1VGRPs58M6yQUS9ddSKNGYDbUIjaBE",
  authDomain: "aryan-portfolio-670e4.firebaseapp.com",
  projectId: "aryan-portfolio-670e4",
  storageBucket: "aryan-portfolio-670e4.appspot.com",
  messagingSenderId: "784965622818",
  appId: "1:784965622818:web:7075c630094341ac14be7b",
  measurementId: "G-VWT29WDPPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);