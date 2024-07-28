

import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getDatabase,ref,push,onValue,set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";




const firebaseConfig = {
  apiKey: "AIzaSyAjKJqnxw4OHB9zCg5W_aOeWSwkRhfYNK0",
  authDomain: "mun2024-7dfb9.firebaseapp.com",
  projectId: "mun2024-7dfb9",
  storageBucket: "mun2024-7dfb9.appspot.com",
  messagingSenderId: "14947921082",
  appId: "1:14947921082:web:2e4e890ff0f682d93a6683",
  measurementId: "G-3CG9LW30EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



document.getElementById("login").addEventListener("click",handleLogin)
function handleLogin() {
  console.log("clicked")
  let password=document.getElementById('password').value
    if (password === "SHIVANSHUMUN") {
      document.getElementById("content").innerHTML=`hello`
    } else if(password!=""){
      alert("Incorrect password");
    }
  };

  const database = getDatabase();
  const ab=ref(database,"preferences/")
  onValue(ab,(snapshot)=>{console.log(snapshot.val())})












  