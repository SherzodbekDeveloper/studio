// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXVX1KhBAC3PyNQmSSQVjcGFpv1r_14v4",
  authDomain: "studio-test-81ff2.firebaseapp.com",
  projectId: "studio-test-81ff2",
  storageBucket: "studio-test-81ff2.firebasestorage.app",
  messagingSenderId: "1023404186281",
  appId: "1:1023404186281:web:d83f36db66e165551fe7b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)