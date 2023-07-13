

import { getDatabase,ref,push,set,onValue,get,runTransaction } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword,signOut,GoogleAuthProvider, } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
const provider = new GoogleAuthProvider();

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
// const app = initializeApp(firebaseConfig);
// const auth=getAuth()
// if(auth.currentuser!=null){
//   console.log(auth.currentuser.email)
// }
// console.log(auth.currentuser.email)
var bc=localStorage.getItem("value")
console.log(bc)
document.getElementById("reff").innerHTML=`${bc}`
//  async () => {
//   try {
//     const response = await fetch('https://mun-2023-default-rtdb.firebaseio.com/Referral_program.json');
//     const data = await response.json();

//     const auth = getAuth();
//     let userEmail = '';

//     const unsubscribe = await onAuthStateChanged(auth,async (user) => {
//       if (user) {
      
//        const userEmail = await user.email;
//         const filteredData = Object.values(data).filter(item => item.email === userEmail);
       
//         if (filteredData.length > 0) {
//           const referralCode = filteredData.referralCode;
//           console.log(referralCode)
//           document.getElementById('titu').innerHTML = `"${referralCode}"`;
//         }
//       }
      
//     });
//     unsubscribe()
    
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
