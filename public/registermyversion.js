
import { getDatabase,ref,push,set,onValue,get,runTransaction } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword,signInWithPopup,signInWithEmailAndPassword,signOut,GoogleAuthProvider, } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getDownloadURL, uploadBytes,getStorage,ref as Sref } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js';
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
function generateReferralCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const codeLength = 8;
  let referralCode = '';

  for (let i = 0; i < codeLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    referralCode += characters.charAt(randomIndex);
  }

  return referralCode;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const generateUniqueId = () => {
  const prefix = 'ID'; 
  const timestamp = new Date().getTime(); 
  const random = Math.floor(Math.random() * 10000); 
  
  
  const uniqueId = `${prefix}_${timestamp}_${random}`;
  
  return uniqueId;
};

function uploadPhoto() {
  const storage = getStorage(app);
  const fileInput = document.getElementById('photoInput');
  const file = fileInput.files[0];
console.log(file)
  if (!file) {
    console.error('No file selected.');
    return;
  }
const id=generateUniqueId()
  // Create a unique filename for the photo (you can use the current timestamp or any other method)
  const photoRef = Sref(storage, `photos/${id}${file.name}`);

  // Upload the file to Firebase Storage
  uploadBytes(photoRef, file).then((snapshot) => {
    // Get the download URL of the uploaded photo
    
    getDownloadURL(photoRef).then((downloadURL) => {
    
      console.log('Photo URL:', downloadURL);
      
      localStorage.setItem("url",downloadURL)
      
      
    }).catch((error) => {
      console.error('Error getting download URL:', error);
    });
  }).catch((error) => {
    console.error('Error uploading photo:', error);
  });
}
if(document.getElementById("number").value==""){document.getElementById("number").value="+91"}

const database=getDatabase(app)

function validateForm() {
  const name = document.getElementById('name_field').value.trim();
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const institute = document.getElementById('Institute').value.trim();
  const region = document.getElementById('region').value.trim();
  const email = document.getElementById('email_field').value.trim();
  const password = document.getElementById('password').value.trim();
const muncount=document.getElementById('muncount').value.trim();
  if (name === '') {
    alert('Please enter your name.');
    return false;
  }
  if (muncount === '') {
    alert('Please enter the number of MUN you participated before!.');
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

   


function getInput(id) {
    let abc= document.getElementById(id).value;
   
    return abc
}

function submitForm1(e) {
  
document.getElementById('form2').addEventListener("submit",function(e){e.preventDefault()})
  let abcd=validateForm()
if(abcd){
  document.getElementById('register2').innerHTML=`<i class="fa fa-circle-o-notch fa-spin mx-2"> </i> Loading...`
    e.preventDefault();
    
    saveRec1(getInput('name_field'), getInput('number'),getInput('email_field'), getInput('age'),getInput('gender'),getInput('Institute'),getInput('region'),getInput('muncount'),getInput('pastaward'),getInput('refferalcode'),getInput('Committee1'),getInput('pref1option1'),getInput('pref1option2'),getInput('pref1option3'),getInput('Committee2'),getInput('pref2option1'),getInput('pref2option2'),getInput('pref2option3'),getInput('Committee3'),getInput('pref3option1'),getInput('pref3option2'),getInput('pref3option3'));
    
  }
    
   
}
function submitForm2(e) {
  document.getElementById('form2').addEventListener("submit",function(e){e.preventDefault()})
 if( validateForm()){
  document.getElementById('register3').innerHTML=`<i class="fa fa-circle-o-notch fa-spin mx-2"> </i> Loading...`
  e.preventDefault();
  
  saveRec2(getInput('name_field'),getInput('number'), getInput('email_field'), getInput('age'),getInput('gender'),getInput('Institute'),getInput('region'),getInput('muncount'),getInput('pastaward'),getInput('refferalcode'),getInput('Committee1'),getInput('pref1option1'),getInput('pref1option2'),getInput('pref1option3'),getInput('Committee2'),getInput('pref2option1'),getInput('pref2option2'),getInput('pref2option3'),getInput('Committee3'),getInput('pref3option1'),getInput('pref3option2'),getInput('pref3option3'));
 
}
 
}
function saveRec1(name,number,email,age,gender,Institute,region,muncount,pastaward,refferalcode,Committee1,pref1option1,pref1option2,pref1option3,Committee2,pref2option1,pref2option2,pref2option3,Committee3,pref3option1,pref3option2,pref3option3) {
    const uuid=generateUniqueId()
    console.log(uuid)
  
  
    if(refferalcode!=null){
      const snapshot = get(ref(database, "Referral_program/"))
        .then((snapshot) => {
          const data = snapshot.val();
        
          const filteredData = [];
          for (const itemId in data) {
            const item = data[itemId];
            if (item.referralCode === refferalcode) {
              const entryId = itemId;
              const userRegisteredRef = ref(database,"Referral_program/"+entryId+"/"+"UserRegistered");
    
              runTransaction(userRegisteredRef, (userRegistered) => {
                return (userRegistered || 0) + 1; // Increment the count by 1
              })
                .then(() => {
                  console.log('UserRegistered count incremented successfully');
                })
                .catch((error) => {
                  console.error('Error incrementing UserRegistered count:', error);
                });
            }
          }})

  }
  const dbRef1 = ref(database, "records of single delegates/"+uuid);
   
    const newRec = push(dbRef1);
    
    set(newRec, {
      name:name,
      email:email,
      Phone_number:number,
      Committee_Preference_1: Committee1,
      Committee_Preference_2: Committee2,
      Committee_Preference_3: Committee3,
      Age:age,
      Gender:gender,
      Institute:Institute,
      Region:region,
      MUNcount:muncount,
      PastAwards:pastaward,
      Referralcode:refferalcode,

    })
    const option1=Committee1+": "+pref1option1;
  const option2=Committee1+":  "+pref1option2;
  const option3=Committee1+":  "+pref1option3;
  const option4=Committee2+":  "+pref2option1;
  const option5=Committee2+":  "+pref2option2;
  const option6=Committee2+":  "+pref2option3;
  const option7=Committee3+":  "+pref3option1;
  const option8=Committee3+":  "+pref3option2;
  const option9=Committee3+":  "+pref3option3;

  const fileInput = document.getElementById('photoInput');
  const file = fileInput.files[0];
 
  if(file){uploadPhoto()}
  console.log(localStorage.getItem("url"))
  const hehe=ref(database,"preferences/")
  
  const titu=push(hehe);
  
  set(titu,{
    name:name,
    Phone_number:number,
    alloted:"NO" ,
    email,
    Age:age,
    Gender:gender,
    Institute:Institute,
    Institute_ID:`${localStorage.getItem("url")}`,
    Delegate_type:"Outstation",
    Payment_done:"NO",
    PaymentSS:"",
    Region:region,
    MUNcount:`Number_of_MUNs_appeared_before: ${muncount}`,
    PastAwards:` PastAwards_won: ${pastaward}`,
    option1,option2,option3,option4,option5,option6,option7,option8,option9,







  })
  
  
    
    
    
    .then(() => {
      localStorage.removeItem("url"),
      signup1(); 
      
       
      
      
          
        
      
      
     
    }).then(() => {
      // Registration and signup successful
      document.getElementById("registrationForm").reset();
      document.getElementById("form2").reset();
      
      
    })
    
    .catch((error) => {
      
      alert("Registration failed: " + error.message);
      document.getElementById('register2').innerHTML=`Single Delegate`
    });

}

function saveRec2(name,number,email,age,gender,Institute,region,muncount,pastaward,refferalcode,Committee1,pref1option1,pref1option2,pref1option3,Committee2,pref2option1,pref2option2,pref2option3,Committee3,pref3option1,pref3option2,pref3option3) {
  const uuid=generateUniqueId()
  const Reff =generateReferralCode();
 
   
  const abcd=ref(database,"Referral_program/")
  localStorage.setItem("value",Reff)
  const refrec=push(abcd)
  set(refrec,{
email:email,
referralCode:Reff,
UserRegistered:0,
PaymentConfirmed:0

  })
//To increase referral count
  if(refferalcode!=null){
      const snapshot = get(ref(database, "Referral_program/"))
        .then((snapshot) => {
          const data = snapshot.val();
        
          const filteredData = [];
          for (const itemId in data) {
            const item = data[itemId];
            if (item.referralCode === refferalcode) {
              const entryId = itemId;
              const userRegisteredRef = ref(database,"Referral_program/"+entryId+"/"+"UserRegistered");
    
              runTransaction(userRegisteredRef, (userRegistered) => {
                return (userRegistered || 0) + 1; // Increment the count by 1
              })
                .then(() => {
                  console.log('UserRegistered count incremented successfully');
                })
                .catch((error) => {
                  console.error('Error incrementing UserRegistered count:', error);
                });
            }
          }})
  
  
  
   


  }
  const dbRef2 = ref(database, "records of Conference ambassadors/"+uuid);
  
  const newRec = push(dbRef2);
  set(newRec, {
    name:name,
    Phone_number:number,
    email:email,
    Committee_Preference_1: Committee1,
    Committee_Preference_2: Committee2,
    Committee_Preference_3: Committee3,
    Age:age,
    Gender:gender,
    Institute:Institute,
    Region:region,
    MUNcount:muncount,
    PastAwards:pastaward,
    Referralcode:refferalcode,
    

  },)
  const option1=Committee1+":  "+pref1option1;
  const option2=Committee1+":  "+pref1option2;
  const option3=Committee1+":  "+pref1option3;
  const option4=Committee2+":  "+pref2option1;
  const option5=Committee2+":  "+pref2option2;
  const option6=Committee2+":  "+pref2option3;
  const option7=Committee3+":  "+pref3option1;
  const option8=Committee3+":  "+pref3option2;
  const option9=Committee3+":  "+pref3option3;
  const fileInput = document.getElementById('photoInput');
  const file = fileInput.files[0];
  if(file){uploadPhoto()}
  console.log(localStorage.getItem("url"))
  const hehe=ref(database,"preferences/")
  const titu=push(hehe);
  
  set(titu,{
    name:name,
    Phone_number:number,
    alloted:"NO" ,
    email,
    Age:age,
    Gender:gender,
    Institute:Institute,
    Institute_ID:`${localStorage.getItem("url")}`,
    Delegate_type:"Outstation",
    Payment_done:"NO",
    PaymentSS:"",
    Region:region,
    Referralcode:refferalcode,
    MUNcount:`Number_of_MUNs_appeared_before: ${muncount}`,
    PastAwards:` PastAwards_won: ${pastaward}`,
    option1,option2,option3,option4,option5,option6,option7,option8,option9,









  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  .then(() => {
    signup2(); 
      
       
        
          
    
    
  })
  .then(() => {
    // Registration and signup successful
    document.getElementById("registrationForm").reset();
    document.getElementById("form2").reset();
    
    
  })
  .catch((error) => {
    
    alert("Registration failed: " + error.message);
    document.getElementById('register3').innerHTML=`Conference ambassador`
  });
}






  
  








  function signup1(){
    var email1 = document.getElementById("email_field").value;
   
    console.log(email1)
    var password1=document.getElementById("password").value
    console.log(password1)
  createUserWithEmailAndPassword(auth,email1,password1)
    .then((userCredential) => {
      console.log(email1)
      const user = userCredential.user;
      const user1 = auth.currentUser; 
     
     
       
      document.getElementById("qt").innerHTML="<div class='container1'><div class='loader'></div></div>",
     
       setTimeout(()=>{window.location.replace("/thankyou")
     
   
     
     },2000)
        
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('register2').innerHTML=`Single Delegate` 
      alert(errorMessage);
      
      
      // ..
    });}
    function signup2(){
      var email2 = document.getElementById("email_field").value;
      var password2=document.getElementById("password").value;
    createUserWithEmailAndPassword(auth,email2,password2)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
      
     
       document.getElementById("qt").innerHTML="<div class='container1'><div class='loader'></div></div>",
      
     
       setTimeout(()=>{window.location.replace("/thankyouforCA")},2000)
       
      
  })
      .catch((error) => {
        
        const errorMessage = error.message;
        document.getElementById('register3').innerHTML=`Single Delegate`
        alert(errorMessage);
        // ..
      });}

      document.getElementById("google").addEventListener("click", function(){ signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      document.getElementById("or").innerHTML=`<div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
      Signup with Google successful!
      Kindly fill the same email id that you used for Google signup.
    </div>`;
        document.getElementById("google1").innerHTML=`<h1>Hello ${auth.currentUser.displayName}, Complete the registration form now</h1>`
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
    })
       


