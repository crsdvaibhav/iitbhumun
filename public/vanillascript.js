import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getDatabase,ref,push,set,get,onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword,signOut,GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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
  const auth = getAuth();
const database=getDatabase();


const userEmail = auth.currentUser ? auth.currentUser.email : "shivanshu264@gmail.com";

    // Function to filter data based on user email
    const filterDataByUserEmail = (data) => {
      const filteredData = Object.values(data).filter((item) => {
        const delegateData = Object.values(item);
        return delegateData.some((nestedItem) => {
          return nestedItem.email === userEmail;
        });
      });
      return filteredData;
    };
  
    // Function to fetch data from the database
    function fetchData() {
        return new Promise((resolve, reject) => {
          let data1, data2;
          const Ref1 = ref(database, "records of Conference ambassadors/");
          onValue(Ref1, (snapshot) => {
            data1 = snapshot.val();
            const filteredData1 = filterDataByUserEmail(data1);
            if (filteredData1.length > 0) {
              resolve(filteredData1);
            }
          });
      
          const Ref2 = ref(database, "records of single delegates/");
          onValue(Ref2, (snapshot) => {
            data2 = snapshot.val();
            const filteredData2 = filterDataByUserEmail(data2);
            if (filteredData2.length > 0) {
              resolve(filteredData2);
            }
          });
        });
      }
      
      fetchData()
        .then((DATA) => {
         
          DATA.map((item) => {
            const delegateData = Object.values(item);
            
            const nestedItem = delegateData.find((item) => item.email === userEmail);
            
           
            document.getElementById("content").innerHTML = `
            
            <ul class='datacard' >
           <li>  ${nestedItem.name} </li>
           <li>  ${nestedItem.Age} </li>
           <li>  ${nestedItem.Gender} </li>
           <li>  ${nestedItem.Institute} </li>
           <li>  ${nestedItem.MUNcount} </li>
           <li>  ${nestedItem.Region} </li>
           <li>  ${nestedItem.email} </li>
           </ul>
           <div class='selectedportfolio'>
           <ul> 
           <h1> ${(nestedItem.
            Committee_Preference_1)}</h1>
            
            
            
            
            </ul>
           <ul><h1>  ${nestedItem.
            Committee_Preference_2}</h1> 
            
            
            
            
            
            
            
            </ul>
           <ul> <h1> ${nestedItem.
            Committee_Preference_3}</h1>
            
            
            
            
            
            
            
            
            </ul>
           </div>
           `;
           
          })
        
        

        })
       



        .catch((error) => {
          console.error(error);
        });