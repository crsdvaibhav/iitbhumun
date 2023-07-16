import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getDatabase, ref, push, set, get, onValue, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();


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
document.getElementById("content").innerHTML = "<div class='loader'></div>",
  document.getElementById("showbutton").style.display = "none"
fetchData()
  .then((DATA) => {
    document.getElementById("showbutton").style.display = "inline"
    document.getElementById("showbutton1").style.display = "inline"
    document.getElementById("progressvalue1").style.display="block"
    document.getElementById("progressvalue3").style.display="block"

    DATA.map((item) => {

      const delegateData = Object.values(item);

      const nestedItem = delegateData.find((item) => item.email === auth.currentUser.email);
      localStorage.setItem("name",`${nestedItem.name}`)

      document.getElementById("content").innerHTML = `
      <img src="images/profileicon.png" class="inline mx-auto w-40 h-40"></img>
            <ul class='datacard rounded-lg px-12  bg-red-500 mb-6 w-fit mx-auto  ' >
           <li class="mb-6 text-xl mx-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Name:  ${nestedItem.name} </li>
           <li class="mb-6 text-xl  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Age: ${nestedItem.Age} </li>
           <li class="mb-6 text-xl  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Gender:  ${nestedItem.Gender} </li>
           <li class="mb-6 text-xl  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Institute:  ${nestedItem.Institute} </li>
           <li class="mb-6 text-xl  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Number of MUN participated before:  ${nestedItem.MUNcount} </li>
           <li class="mb-6 text-xl  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Region: ${nestedItem.Region} </li>
           <li class="mb-6 text-xl  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"> Email: ${nestedItem.email} </li>
          <li class="mb-6 text-xl border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-4.5 px-4.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">Phone Number:${nestedItem.Phone_number}
           </ul>
           <div class='selectedportfolio'>
          
           </div>
           `;
     




    })

  })



function fetchData1() {
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
      let i = 0;
      let p = 0;
      filteredData.forEach((item) => {
        Object.keys(item).forEach((key) => {

          if (p <= 4 && p >= 2) { document.getElementById("container2ul-row2").innerHTML += `<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">${item[key]}</td>` }
          if (p <= 7 && p >= 5) { document.getElementById("container3ul-row2").innerHTML += `<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">${item[key]}</td>` }
          if (p <= 10 && p >= 8) { document.getElementById("container4ul-row2").innerHTML += `<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">${item[key]}</td>` }
          if (key === "alloted" && item[key] != "NO") {
            document.getElementById("progressvalue").innerHTML=`75%`
            document.getElementById("progressvalue2").style.width="75%"
           
            
            console.log(item[key])
            i = 1;


            document.getElementById("showresult").innerHTML = `Congratulations! You have been allotted as a delegate speaker of <span class="text-[#189BA5]">${item[key]}</span>`

            document.getElementById("paynow").style.display = 'block'



          }
          p++;
        });
        if (i == 0) { document.getElementById("showresult").innerHTML = `Sit back and relax,you will be notified on email after allotment of preferences!You can also visit the site regularly to check the allotment.` }
      });
    })
    .catch((error) => {
      alert("Error fetching preferences data:", error);
    });
};

fetchData1();




function updatedata() {

  let Committee1 = document.getElementById("Committee1").value
  let Committee2 = document.getElementById("Committee2").value
  let Committee3 = document.getElementById("Committee3").value
  let pref1option1 = document.getElementById("pref1option1").value
  let pref1option2 = document.getElementById("pref1option2").value
  let pref1option3 = document.getElementById("pref1option3").value
  let pref2option1 = document.getElementById("pref2option1").value
  let pref2option2 = document.getElementById("pref2option2").value
  let pref2option3 = document.getElementById("pref2option3").value
  let pref3option1 = document.getElementById("pref3option1").value
  let pref3option2 = document.getElementById("pref3option2").value
  let pref3option3 = document.getElementById("pref3option3").value
  const databaseRef = ref(database, "preferences");
  const auth = getAuth();
  // Retrieve the data once
  get(databaseRef)
    .then((snapshot) => {
      snapshot.forEach((childSnapshot) => {

        const data = childSnapshot.val();


        if (data.email === auth.currentUser.email) {


          // Get the reference to the specific data using the child snapshot key
          const dataRef = ref(database, `preferences/${childSnapshot.key}`);

          // Update the value using the reference and the updated data
          update(dataRef, {

            option1: Committee1 + ":" + pref1option1,
            option2: Committee1 + ":" + pref1option2,
            option3: Committee1 + ":" + pref1option3,
            option4: Committee2 + ":" + pref2option1,
            option5: Committee2 + ":" + pref2option2,
            option6: Committee2 + ":" + pref2option3,
            option7: Committee3 + ":" + pref3option1,
            option8: Committee3 + ":" + pref3option2,
            option9: Committee3 + ":" + pref3option3,












          })
            .then(() => {



              document.getElementById("after").innerHTML = "Portfolio Successfully Updated!"













































            })
            .catch((error) => {
              alert("Error Updating Data!")

            });
        }
      });
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
    });

}

document.getElementById("updatevalues").addEventListener("click", updatedata)










