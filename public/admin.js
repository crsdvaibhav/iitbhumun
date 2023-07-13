

import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getDatabase,ref,push,onValue,set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";




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












  