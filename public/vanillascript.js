import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getDatabase,ref,push,set,get,onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword,signOut,GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { onAuthStateChanged } from "firebase/auth";

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
          return nestedItem.email === auth.currentUser.email;
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
          // if (!data1 && !data2) {
          //   resolve([]);
          // }
        });
      }
      document.getElementById("content").innerHTML="<div class='loader'></div>",
      document.getElementById("showbutton").style.display="none"
      fetchData()
        .then((DATA) => {
             document.getElementById("showbutton").style.display="inline"
          DATA.map((item) => {
           
            const delegateData = Object.values(item);
           
            const nestedItem = delegateData.find((item) => item.email === auth.currentUser.email);
           console.log(nestedItem)
          
            document.getElementById("content").innerHTML = `
            
            <ul class='datacard mb-6' >
           <li class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Name:  ${nestedItem.name} </li>
           <li class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Age: ${nestedItem.Age} </li>
           <li class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Gender:  ${nestedItem.Gender} </li>
           <li class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Institute:  ${nestedItem.Institute} </li>
           <li class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Number of MUN participated before:  ${nestedItem.MUNcount} </li>
           <li class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Region: ${nestedItem.Region} </li>
           <li class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"> Email: ${nestedItem.email} </li>
          <li class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Phone Number:${nestedItem.Phone_number}
           </ul>
           <div class='selectedportfolio'>
          
           </div>
           `;
           if(delegateData[1]!=null&&delegateData[2]!=null&&delegateData[3]!=null){
         const stru1= Object.values(delegateData[1]);
         const stru2= Object.values(delegateData[2]);
         const stru3= Object.values(delegateData[3]);
         var keys = [];
for (var key in item) {
    keys.push(key);
}

document.getElementById("h1").innerHTML+=`${keys[1]}`
document.getElementById("h2").innerHTML+=`${keys[2]}`
document.getElementById("h3").innerHTML+=`${keys[3]}`

         stru1.map((item)=>{
for( var key in item){
  document.getElementById("container2ul-row1").innerHTML+=` 
  
    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">${key}</td>`
}
for( var key in item){
  document.getElementById("container2ul-row2").innerHTML+=`<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">${item[key]}</td>`
}
  })
         stru2.map((item)=>{
          for( var key in item){
            document.getElementById("container3ul-row1").innerHTML+=`<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">${key}</td>`
          }
          for( var key in item){
            document.getElementById("container3ul-row2").innerHTML+=`<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">${item[key]}</td>`
          }
                   })

                   stru3.map((item)=>{
                    for( var key in item){
                      document.getElementById("container4ul-row1").innerHTML+=`<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">${key}</td>`
                    }
                    for( var key in item){
                      document.getElementById("container4ul-row2").innerHTML+=`<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">${item[key]}</td>`
                    }
                             })


         
                            }
        
         
         
          
          
          })

        })
       

      
          function fetchData1(){
            const snapshot = get(ref(database, "preferences/"))
              .then((snapshot) => {
                const data = snapshot.val();
              
                const filteredData = [];
                for (const itemId in data) {
                  const item = data[itemId];
                  if (item.email === auth.currentUser.email) {
                    filteredData.push(item);
                  }
                }
                let i=0;
               
                filteredData.forEach((item) => {
                  Object.keys(item).forEach((key) => {
                    if (key === "alloted" && item[key] != "NO") {
                      console.log(item[key])
                     i=1;
                  
                
                        document.getElementById("showresult").innerHTML=`Congratulations! You have been allotted as a delegate speaker of ${item[key]}`
                     
                        document.getElementById("paynow").style.display='block'
                        
                      
                     
                    }
                   
                  });
                  if(i==0){ document.getElementById("showresult").innerHTML=`Sit back and relax,you will be notified on email after allotment of preferences!You can also visit the site regularly to check the allotment.`}
                });
              })
              .catch((error) => {
                alert("Error fetching preferences data:", error);
              });
          };
       
          fetchData1();
        
        
       
        

       