
import { getDatabase, ref, push, set,  get, runTransaction } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,EmailAuthProvider,linkWithCredential } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAjKJqnxw4OHB9zCg5W_aOeWSwkRhfYNK0",
  authDomain: "mun2024-7dfb9.firebaseapp.com",
  projectId: "mun2024-7dfb9",
  storageBucket: "mun2024-7dfb9.appspot.com",
  messagingSenderId: "14947921082",
  appId: "1:14947921082:web:2e4e890ff0f682d93a6683",
  measurementId: "G-3CG9LW30EF"
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




const database = getDatabase(app)

function validateForm() {
  const name = document.getElementById('name_field').value.trim();
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const institute = document.getElementById('Institute').value.trim();
  const region = document.getElementById('region').value.trim();
  const email = document.getElementById('email_field').value.trim();
  const password = document.getElementById('password').value.trim();
  const muncount = document.getElementById('muncount').value.trim();
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
  let abc = document.getElementById(id).value;

  return abc
}

function submitForm1(e) {
  document.getElementById('register2').disabled=true
  document.getElementById('form2').addEventListener("submit", function (e) { e.preventDefault() })
  let abcd = validateForm()
  if (abcd) {
    e.preventDefault();
    saveRec1(getInput('name_field'), getInput('number'), getInput('email_field'), getInput('age'), getInput('gender'), getInput('Institute'), getInput('region'), getInput('muncount'), getInput('pastaward'), getInput('refferalcode'), getInput('Committee1'), getInput('pref1option1'), getInput('pref1option2'), getInput('pref1option3'), getInput('Committee2'), getInput('pref2option1'), getInput('pref2option2'), getInput('pref2option3'), getInput('Committee3'), getInput('pref3option1'), getInput('pref3option2'), getInput('pref3option3'));
  }
  else{
    document.getElementById('register2').disabled=false
  }


}
function submitForm2(e) {
  document.getElementById('register3').disabled=true
  document.getElementById('form2').addEventListener("submit", function (e) { e.preventDefault() })
  if (validateForm()) {
    e.preventDefault();

    saveRec2(getInput('name_field'), getInput('number'), getInput('email_field'), getInput('age'), getInput('gender'), getInput('Institute'), getInput('region'), getInput('muncount'), getInput('pastaward'), getInput('refferalcode'), getInput('Committee1'), getInput('pref1option1'), getInput('pref1option2'), getInput('pref1option3'), getInput('Committee2'), getInput('pref2option1'), getInput('pref2option2'), getInput('pref2option3'), getInput('Committee3'), getInput('pref3option1'), getInput('pref3option2'), getInput('pref3option3'));

  }
  else{
    document.getElementById('register3').disabled=false
  }

}
function saveRec1(name, number, email, age, gender, Institute, region, muncount, pastaward, refferalcode, Committee1, pref1option1, pref1option2, pref1option3, Committee2, pref2option1, pref2option2, pref2option3, Committee3, pref3option1, pref3option2, pref3option3) {
  const uuid = generateUniqueId()
  console.log(uuid)

  if (refferalcode != null) {
    const snapshot = get(ref(database, "Referral_program/"))
      .then((snapshot) => {
        const data = snapshot.val();

        const filteredData = [];
        for (const itemId in data) {
          const item = data[itemId];
          if (item.referralCode === refferalcode) {
            const entryId = itemId;
            const userRegisteredRef = ref(database, "Referral_program/" + entryId + "/" + "UserRegistered");

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
        }
      })

  }
  const dbRef1 = ref(database, "records of single delegates/" + uuid);

  const newRec = push(dbRef1);

  set(newRec, {
    name: name,
    email: email,
    Phone_number: number,
    Committee_Preference_1: Committee1,
    Committee_Preference_2: Committee2,
    Committee_Preference_3: Committee3,
    Age: age,
    Gender: gender,
    Institute: Institute,
    Region: region,
    MUNcount: muncount,
    PastAwards: pastaward,
    Referralcode: refferalcode,

  })
  const option1 = Committee1 + ": " + pref1option1;
  const option2 = Committee1 + ": " + pref1option2;
  const option3 = Committee1 + ": " + pref1option3;
  const option4 = Committee2 + ": " + pref2option1;
  const option5 = Committee2 + ": " + pref2option2;
  const option6 = Committee2 + ": " + pref2option3;
  const option7 = Committee3 + ": " + pref3option1;
  const option8 = Committee3 + ": " + pref3option2;
  const option9 = Committee3 + ": " + pref3option3;
  const hehe = ref(database, "preferences/")
  const titu = push(hehe);

  set(titu, {
    alloted: "NO", email, option1, option2, option3, option4, option5, option6, option7, option8, option9,









  })





    .then(() => {
      {
        const dbRef3 = ref(database, "records of single delegates/" + uuid + "/" + Committee1);
        const dbRef4 = ref(database, "records of single delegates/" + uuid + "/" + Committee2);
        const dbRef5 = ref(database, "records of single delegates/" + uuid + "/" + Committee3);
        const newRec1 = push(dbRef3);
        const newRec2 = push(dbRef4);
        const newRec3 = push(dbRef5);
        return Promise.all([
          set(newRec1, {
            Committee_1_Country_Preference_1: pref1option1,
            Committee_1_Country_Preference_2: pref1option2,
            Committee_1_Country_Preference_3: pref1option3,
          }),
          set(newRec2, {
            Committee_2_Country_Preference_1: pref2option1,
            Committee_2_Country_Preference_2: pref2option2,
            Committee_2_Country_Preference_3: pref2option3,
          }),
          set(newRec3, {
            Committee_3_Country_Preference_1: pref3option1,
            Committee_3_Country_Preference_2: pref3option2,
            Committee_3_Country_Preference_3: pref3option3,
          })
        ]);
      }
    })
    .then(() => {

      signup1();
      document.getElementById('register2').disabled=false








    })

    .catch((error) => {
      document.getElementById('register2').disabled=false
      alert("Registration failed: " + error.message);
    });

}

function saveRec2(name, number, email, age, gender, Institute, region, muncount, pastaward, refferalcode, Committee1, pref1option1, pref1option2, pref1option3, Committee2, pref2option1, pref2option2, pref2option3, Committee3, pref3option1, pref3option2, pref3option3) {
  const uuid = generateUniqueId()
  const Reff = generateReferralCode();
  const abcd = ref(database, "Referral_program/")
  const refrec = push(abcd)
  set(refrec, {
    email: email,
    referralCode: Reff,
    UserRegistered: 0,
    PaymentConfirmed: 0

  })
  //To increase referral count
  if (refferalcode != null) {
    const snapshot = get(ref(database, "Referral_program/"))
      .then((snapshot) => {
        const data = snapshot.val();

        const filteredData = [];
        for (const itemId in data) {
          const item = data[itemId];
          if (item.referralCode === refferalcode) {
            const entryId = itemId;
            const userRegisteredRef = ref(database, "Referral_program/" + entryId + "/" + "UserRegistered");

            runTransaction(userRegisteredRef, (userRegistered) => {
              return (userRegistered || 0) + 1; // Increment the count by 1
            })
              .then(() => {
                console.log('UserRegistered count incremented successfully');
              })
              .catch((error) => {
                document.getElementById('register3').disabled=false
                console.error('Error incrementing UserRegistered count:', error);
              });
          }
        }
      })






  }
  const dbRef2 = ref(database, "records of Conference ambassadors/" + uuid);

  const newRec = push(dbRef2);
  set(newRec, {
    name: name,
    Phone_number: number,
    email: email,
    Committee_Preference_1: Committee1,
    Committee_Preference_2: Committee2,
    Committee_Preference_3: Committee3,
    Age: age,
    Gender: gender,
    Institute: Institute,
    Region: region,
    MUNcount: muncount,
    PastAwards: pastaward,
    Referralcode: refferalcode,


  },)
  const option1 = Committee1 + ": " + pref1option1;
  const option2 = Committee1 + ": " + pref1option2;
  const option3 = Committee1 + ": " + pref1option3;
  const option4 = Committee2 + ": " + pref2option1;
  const option5 = Committee2 + ": " + pref2option2;
  const option6 = Committee2 + ": " + pref2option3;
  const option7 = Committee3 + ": " + pref3option1;
  const option8 = Committee3 + ": " + pref3option2;
  const option9 = Committee3 + ": " + pref3option3;
  const hehe = ref(database, "preferences/")
  const titu = push(hehe);

  set(titu, {
    alloted: "NO", email, option1, option2, option3, option4, option5, option6, option7, option8, option9,









  })












    .then(() => {
      {
        const dbRef3 = ref(database, "records of Conference ambassadors/" + uuid + "/" + Committee1);
        const dbRef4 = ref(database, "records of Conference ambassadors/" + uuid + "/" + Committee2);
        const dbRef5 = ref(database, "records of Conference ambassadors/" + uuid + "/" + Committee3);
        const newRec1 = push(dbRef3);
        const newRec2 = push(dbRef4);
        const newRec3 = push(dbRef5);
        return Promise.all([
          set(newRec1, {
            Preference_1: pref1option1,
            Preference_2: pref1option2,
            Preference_3: pref1option3,
          }),
          set(newRec2, {
            Preference_1: pref2option1,
            Preference_2: pref2option2,
            Preference_3: pref2option3,
          }),
          set(newRec3, {
            Preference_1: pref3option1,
            Preference_2: pref3option2,
            Preference_3: pref3option3,
          })
        ]);
      }
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
    });
}
















function signup1() {
  var email1 = document.getElementById("email_field").value;

  console.log(email1)
  var password1 = document.getElementById("password").value
  console.log(password1)
  createUserWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
      console.log(email1)
      document.getElementById("qt").innerHTML = "<div class='container1'><div class='loader'></div></div>",
        setTimeout(() => {
          window.location.replace("/thankyou")
        }, 2000)

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,"QT")
      if (errorCode === 'auth/email-already-in-use') {
        handleEmailAlreadyInUse(email1, password1);
      } else {
        console.error("Error creating user:", errorMessage);
      }

      // ..
    });
}
function handleEmailAlreadyInUse(email1, password1) {
  // Get the currently signed-in user
  const user = auth.currentUser;

  if (user) {
    // Link email and password to the current user
    const credential = EmailAuthProvider.credential(email1, password1);
    linkWithCredential(user, credential)
      .then(() => {
        console.log("Email and password linked to existing user");
        // Continue with your logic (e.g., redirection)
        document.getElementById("qt").innerHTML = "<div class='container1'><div class='loader'></div></div>";
        setTimeout(() => {
          window.location.replace("/thankyou");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error linking email and password:", error.message);
      });
  } else {
    console.error("No user is currently signed in.");
  }
}
function signup2() {
  var email2 = document.getElementById("email_field").value;
  var password2 = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email2, password2)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;



      document.getElementById("qt").innerHTML = "<div class='container1'><div class='loader'></div></div>",


        setTimeout(() => { window.location.replace("/thankyouforCA") }, 2000)


    })
    .catch((error) => {

      const errorMessage = error.message;

      alert(errorMessage);
      // ..
    });
}

document.getElementById("google").addEventListener("click", function () {
  console.log("clicked")
  signInWithPopup(auth, provider)
  .then((result) => {
    document.getElementById("or").innerHTML = `<h1 className="afterLoginNotice">Hello <span>${auth.currentUser.displayName}</span>, Complete the registration form now without refreshing the website !</h1>`;
    const email = document.getElementById('email_field');
    email.value=auth.currentUser.email
    email.disabled=true

  }).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  })
})

