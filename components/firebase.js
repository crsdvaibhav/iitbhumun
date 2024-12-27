// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAjKJqnxw4OHB9zCg5W_aOeWSwkRhfYNK0",
  authDomain: "mun2024-7dfb9.firebaseapp.com",
  projectId: "mun2024-7dfb9",
  storageBucket: "mun2024-7dfb9.appspot.com",
  messagingSenderId: "14947921082",
  appId: "1:14947921082:web:2e4e890ff0f682d93a6683",
  measurementId: "G-3CG9LW30EF"
};

// Check if Firebase app is already initialized
if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
