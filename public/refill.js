import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getDatabase,ref,push,set,get,onValue,update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
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
  const filterDataByUserEmail = (data) => {
    const filteredData = Object.values(data).filter((item) => {
      const delegateData = Object.values(item);
      return delegateData.some((nestedItem) => {
        return nestedItem.email === auth.currentUser.email;
      });
    });
    return filteredData;
  };
  const filterkeyByUserEmail = (data) => {
    const filteredData = Object.values(data).filter((item) => {
      const delegateData = Object.values(item);
      return delegateData.some((nestedItem) => {
        return nestedItem.email === auth.currentUser.email;
      });
    });
    return filteredData.key;
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
const database=getDatabase();


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
  }function fetchKey() {
    return new Promise((resolve, reject) => {
      let data1, data2;
      const Ref1 = ref(database, "records of Conference ambassadors/");
      onValue(Ref1, (snapshot) => {
        data1 = snapshot.val();
       
        const filteredData1 = filterkeyByUserEmail(data1);
        if (filteredData1) {
          resolve(filteredData1);
        }
      });
  
      const Ref2 = ref(database, "records of single delegates/");
      onValue(Ref2, (snapshot) => {
        data2 = snapshot.val();
        
        const filteredData2 = filterDataByUserEmail(data2);
        if (filteredData2) {
          resolve(filteredData2);
        }
      });
      // if (!data1 && !data2) {
      //   resolve([]);
      // }
    });
  }

  fetchData()
        .then((DATA) => {
             console.log(Object.keys(DATA[0]))
          DATA.map((item) => {
            const key1 = Object.keys(item)[0];
            console.log("Key:", key1);
            console.log(DATA.key)
            const delegateData = Object.values(item);
           
            const nestedItem = delegateData.find((item) => item.email === auth.currentUser.email);
           console.log(nestedItem)
            
          
        
         var keys = [];
for (var key in item) {
    keys.push(key);
}
fetchKey().then((key)=>{console.log(key)})





// const itemRef = ref(database, `records of Conference ambassadors/ID_1689198530040_8743/${key1}`);
// if(itemRef!=null){
// update(itemRef, { name: "vascoda" }).then(()=>{alert("alloted!")})


// }
// const itemRef2 = ref(database, `records of single delegates/ID_1689198530040_8743/${key1}`);
// if(itemRef2!=null){
// update(itemRef, { name: "Vascoda"}).then(()=>{alert("alloted!")})

// }







})})

    
