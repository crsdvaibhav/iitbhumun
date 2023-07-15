import Image from 'next/image';
import Link from 'next/link';
import {  FaSignInAlt, FaUserCircle } from "react-icons/fa";
import { getDatabase, ref, get, set, onValue, update, query,key, orderByChild, equalTo, child } from 'firebase/database';
import app from "../public/firebaseconfig";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useState } from 'react';
import { useRouter } from "next/router";

import { getAuth,onAuthStateChanged,signOut,sendPasswordResetEmail } from 'firebase/auth';
import Script from 'next/script';
import NavBar2 from '../components/navbarforlogin';









const CADB = () => {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [DATA, setDATA] = useState({});
  const [submitValues, setSubmitValues] = useState({});
  const [inputValues, setInputValues] = useState({});

const [inputData,setinputadta]=useState("");

const auth=getAuth();
// Create a query to find the relevant data entry based on the user's email


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  async function fetchData() {
    try {
      const response = await fetch('https://mun-2023-default-rtdb.firebaseio.com/Referral_program.json');
      const data = await response.json();
      
      setDATA(data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
//   useEffect(() => {
//  fetchPreferencesData()
//   }, [isLoggedIn]);
  setTimeout(()=>{
    if (true) {
      async function fetchData1() {
        try {
          await fetchData(); // Wait for the first command to complete
          setIsLoggedIn(true); // Execute the second command after the first one is finished
          // Any other code that depends on the completion of both commands
        } catch (error) {
          // Handle errors if necessary
        }
      }
   
      
        
      
      // Functional component
     
        fetchData1();
    
    } },2000)
  
  

  const handleOptionChange = (event, itemId) => {
    const { value } = event.target;
    setSubmitValues((prevValues) => ({
      ...prevValues,
      [itemId]: value,
    }));
  };
  const handleinputChange = (event) => {
    const  value  = event.target.value;
    setInputValues(
       value
    )
  };
  



  

  const filteredData = Object.keys(DATA).reduce((filtered, itemId) => {
    const item = DATA[itemId];
    if (item.email === auth.currentUser.email) {
      filtered.push({ itemId, ...item });
    }
    return filtered;
  }, []);






  

  
if(filteredData.length==0){
 
  return(<div className='block mx-auto my-40'><h1 className='m-auto text-center text-4xl  block font-bold text-red-500'>Sorry,You aren't a conference ambassador.</h1>
  
  <Button className='mx-auto my-4 block w-100'><Link href={'/home'}>Home</Link></Button>
  </div>)
}
else{























    
     return (
      <>
       <NavBar2 navbar={true} backgroundColor="white"/>
       <div className="my-50 text-center font-bold">
       
        {filteredData.map((item) => (
          <><h2 className="mt-50 text-center font-bold">Record of this user:</h2>
          <ul className='mt-20'>
          <li >
            Email: {item.email}</li>
          <li>  User Registered: {item.UserRegistered}</li>
          <li>   Payment Confirmed: {item.PaymentConfirmed}</li>
          <li>    Referral Code: {item.referralCode}</li>
          </ul> </>
        ))}
      </div>
      </>
    );
  
    
        }
    
    
    
    
    
    
    
    
    
    
    
  













}
export default CADB