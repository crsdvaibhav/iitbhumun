import app from "../public/firebaseconfig";
import 'firebase/database';
import { getDatabase, ref, get, set, onValue, update, connectDatabaseEmulator, DataSnapshot } from 'firebase/database';

document.getElementById("content").innerHTML=""

function handleLogin() {
    if (password === "SHIVANSHUMUN") {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect password");
    }
  };

  const database = getDatabase();
  const ab=ref(database,"preferences/")
  onValue(ab,(snapshot)=>{console.log(snapshot.val())})