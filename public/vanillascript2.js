import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
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
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();










async function fetchData() {
    try { document.getElementById("viewdetails").innerHTML="<i class='fa fa-circle-o-notch fa-spin mx-2'></i>Loading..."
      const response = await fetch('https://mun-2023-default-rtdb.firebaseio.com/Referral_program.json');
      const data = await response.json();
      const filteredData = Object.keys(data).reduce((filtered, itemId) => {
        const item = data[itemId];
        if (item.email === auth.currentUser.email) {
          filtered.push({ itemId, ...item });
        }
        return filtered;
      }, []);
      return filteredData
  
    } catch (error) {
      console.error('Error:', error);
    }
  }
  


async function fetchData2() {
    try {
      const response = await fetch('https://mun-2023-default-rtdb.firebaseio.com/preferences.json');
      const data = await response.json();
     
      const  filteredData= await fetchData()
       filteredData.map((item1) => {
        const filteredData2 = Object.keys(data).reduce((filtered, itemId) => {
          const item = data[itemId];
          
          if (item.Referralcode === item1.referralCode) {
            
           
            document.getElementById("showtable").style.display="inline-block"
           document.getElementById("html1").innerHTML+=`<td className="whitespace-nowrap border-r px-6 py-4 my-4 font-medium dark:border-neutral-500">${item.name}</td>`
           document.getElementById("html2").innerHTML+=`<td className="whitespace-nowrap border-r px-6 py-4 my-4 font-medium dark:border-neutral-500">${item.Payment_done}</td>`
           document.getElementById("viewdetails").style.display="none"
          
          }
          return filtered;
        }, []);
        
      
        
              })
    } catch (error) {
      
      console.error('Error:', error);
    }
  }
  document.getElementById("viewdetails").addEventListener("click",function(){fetchData2()})