// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-b7ea4.firebaseapp.com',
  projectId: 'mern-estate-b7ea4',
  storageBucket: 'mern-estate-b7ea4.appspot.com',
  messagingSenderId: '1035710187237',
  appId: '1:1035710187237:web:02994b746ca9759ae7360c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
