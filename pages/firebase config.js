import firebase from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword,signOut,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAYLIn8hGjgVrX3h23aVZPx47Sn8bZBCz4",
  authDomain: "mun-2023.firebaseapp.com",
  databaseURL: "https://mun-2023-default-rtdb.firebaseio.com",
  projectId: "mun-2023",
  storageBucket: "mun-2023.appspot.com",
  messagingSenderId: "843433332162",
  appId: "1:843433332162:web:faa917397b259754461a5b",
  measurementId: "G-L3C80FWLKS"
};
if (!firebase.apps.length) {
   const app= firebase.initializeApp(firebaseConfig);
  }
// Initialize Firebase
 
 export default firebase;