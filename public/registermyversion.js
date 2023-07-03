
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getDatabase,ref,push,set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const generateUniqueId = () => {
  const prefix = 'ID'; // Unique prefix for your IDs
  const timestamp = new Date().getTime(); // Current timestamp in milliseconds
  const random = Math.floor(Math.random() * 10000); // Random number between 0 and 9999
  
  // Concatenate the prefix, timestamp, and random number to create the unique ID
  const uniqueId = `${prefix}_${timestamp}_${random}`;
  
  return uniqueId;
};


const analytics = getAnalytics(app);

const database=getDatabase(app)

function validateForm() {
  const name = document.getElementById('name_field').value.trim();
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const institute = document.getElementById('Institute').value.trim();
  const region = document.getElementById('region').value.trim();
  const email = document.getElementById('email_field').value.trim();
  const password = document.getElementById('password').value.trim();

  if (name === '') {
    alert('Please enter your name.');
    return false;
  }

  if (age === '') {
    alert('Please enter your age.');
    return false;
  }

  if (gender === '') {
    alert('Please select your gender.');
    return false;
  }

  if (institute === '') {
    alert('Please enter the name of your institution.');
    return false;
  }

  if (region === '') {
    alert('Please enter your region (city or state).');
    return false;
  }

  if (email === '') {
    alert('Please enter your email.');
    return false;
  }

  // Email validation using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (password === '') {
    alert('Please enter your password.');
    return false;
  }

  return true;
}

    document.getElementById('register2').addEventListener("click", submitForm1);
    document.getElementById('register3').addEventListener("click", submitForm2);


var db_ref1 = ref(database, "records of single delegates")
var db_ref2 = ref(database, "records of Conference ambassadors")

function getInput(id) {
    let abc= document.getElementById(id).value;
    if (id==pastaward||id==refferalcode){return " "}
    else{return abc}
}

function submitForm1(e) {
  validateForm();
    e.preventDefault();
    
    signup1()

    
   
}
function submitForm2(e) {
  validateForm();
  e.preventDefault();
  signup2()
  
 
}
function saveRec1(name,email,password,age,gender,Institute,region,muncount,pastaward,refferalcode,uid) {
    const dbRef1 = ref(database, "records of single delegates/");
   
    const newRec = push(dbRef1);
    const uuid=generateUniqueId();
    set(newRec, {
      name:name,
      email:email,
      Password:password,
      delegatecountry: '',
      preference1:'',
      preference2:'',
      preference3:'',
      Age:age,
      UniqueId:uid,
      Gender:gender,
      Institute:Institute,
      Region:region,
      MUNcount:muncount,
      PastAwards:pastaward,
      Referralcode:refferalcode

    }).then(() => {
      // Registration successful
      
      alert("Registration successful! Check your Email!");
     
    }).catch((error) => {
      // Error handling
      alert("Registration failed: " + error.message);

    });
    document.getElementById("registrationForm").reset();


}

function saveRec2(name,email,password,age,gender,Institute,region,muncount,pastaward,refferalcode,uid) {
  
  const dbRef2 = ref(database, "records of Conference ambassadors/"+uid);
  
  const newRec = push(dbRef2);
  set(newRec, {
    name:name,
    email:email,
    Password:password,
   delegatecountry:'',
    preference1:'',
    preference2:'',
    preference3:'',
    Age:age,
    UniqueId:uid,
    Gender:gender,
    Institute:Institute,
    Region:region,
    MUNcount:muncount,
    PastAwards:pastaward,
    Referralcode:refferalcode

  }).then(() => {
    // Registration successful
    
    alert("Registration successful! Check your Email!");
   
  }).catch((error) => {
    // Error handling
    alert("Registration failed: " + error.message);
  });
  document.getElementById("registrationForm").reset();
}







  
  








var ab=false;
  function signup1(){
    var email = document.getElementById("email_field").value;

    console.log(email)
    var password=document.getElementById("password").value;
  createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const uid = auth.currentUser.uid;
 console.log(uid)
      saveRec1(getInput('name_field'), getInput('email_field'),getInput('password'), getInput('age'),getInput('gender'),getInput('Institute'),getInput('region'),getInput('muncount'),getInput('pastaward'),getInput('refferalcode'),uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      alert(errorMessage);
      // ..
    });}
    function signup2(){
      var email = document.getElementById("email_field").value;
  
      console.log(email)
      var password=document.getElementById("password").value;
    createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const uid = auth.currentUser.uid;
  
        saveRec2(getInput('name_field'), getInput('email_field'),getInput('password'), getInput('age'),getInput('gender'),getInput('Institute'),getInput('region'),getInput('muncount'),getInput('pastaward'),getInput('refferalcode'), uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        alert(errorMessage);
        // ..
      });}