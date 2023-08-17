
import Image from "next/image";
import NavBar from '../components/Navbar';
import EventsCarousel from "../components/EventsCarousel";
import PlacesCarousel from "../components/PlacesCarousel";
import Footer from "../components/Footer";
import NavBar2 from "../components/navbarforlogin";
import { getAuth } from "firebase/auth";
import React from "react";import { useState } from 'react';
import Doubtbox from "../components/doubtbox";
import EventsCarousel1 from "../components/PlacesCarousel";
export default function Gallery() {
  const auth=getAuth();
  const [changebar,setbar]=useState(true);
 function abc(){auth.onAuthStateChanged((user)=>{if(user){setbar(false)}else{setbar(true)}})}
  abc()

  return (
    <div className='bg-gray-100 w-[100%] sm:w-[100%] ' >
        {changebar? <NavBar navbar={true} backgroundColor="white" qt='' />:<NavBar2 navbar={true} backgroundColor="white" />}


      <div className="">
        <div className="bold text-center font-extrabold text-4xl">
          PAST EXPERIENCE
        </div>
        <div className=' w-full '>
        <EventsCarousel/>
        </div>

      </div>
      <div className="mt-[20px]">
        <div className="bold text-center font-extrabold text-4xl">
          PLACES TO VISIT IN VARANASI
        </div>
        <div className=' w-full'>
         <EventsCarousel1 />
        </div>
      </div>
      <Doubtbox/>
<Footer></Footer>
    </div>
  );
}
