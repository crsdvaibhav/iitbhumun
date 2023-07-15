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
  
  const [DATA, setDATA] = useState({});
  const [isLoading, setIsLoading] = useState(true);



const auth=getAuth();



  
  async function fetchData() {
    try {
      const response = await fetch('https://mun-2023-default-rtdb.firebaseio.com/Referral_program.json');
      const data = await response.json();
      
      setDATA(data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  setTimeout(()=>{
    if (true) {
      async function fetchData1() {
        try {
          await fetchData(); // Wait for the first command to complete
          setIsLoading(false); // Execute the second command after the first one is finished
          
        } catch (error) {
          
        }
      }
   
      
        
      
     
        fetchData1();
    
    } },2000)
  
  

  
  
  if (isLoading) {
    return <div className='loader block my-auto'></div>
  }


  

  const filteredData = Object.keys(DATA).reduce((filtered, itemId) => {
    const item = DATA[itemId];
    if (item.email === auth.currentUser.email) {
      filtered.push({ itemId, ...item });
    }
    return filtered;
  }, []);






  

  if(filteredData.length==0&&isLoading==false)
 {
  if(auth.currentUser!=""){
 return(<div className='block mx-auto my-40'><h1 className='m-auto text-center text-4xl  block font-bold text-red-500'>Sorry,You aren't a conference ambassador.</h1>
 
 <Button className='mx-auto my-4 block w-100'><Link href={'/home'}>Home</Link></Button>
 </div>)}
 
}





else{



















    
     return (
      <>
       <NavBar2 navbar={true} backgroundColor="white"/>
       <div className="my-50 text-center font-bold">
       {
        filteredData.map((item) => (
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