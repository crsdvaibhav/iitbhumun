import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import CloseReg from './CloseReg';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../public/firebaseconfig';
import data from '../data/data.json';
import { Button } from '@material-tailwind/react';
export default function Hero() {
  const [closeReg, setCloseReg] = useState(true);
  const handleChange = () => {
    setCloseReg(false);
    setTimeout(() => {
      setCloseReg(true);
    }, 1000);
  }
  const testimonial = [];

  data.testimonials.map((i) => {
    testimonial.push(i.review);
  });
  const[index,setCurrentTextIndex]=useState("4")
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % testimonial.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  
  
  const [changebar,setbar]=useState(true);
  const auth=getAuth()
  function abc(){auth.onAuthStateChanged((user)=>{if(user){setbar(false)}else{setbar(true)}})}
  abc()
  
  return (
    <div className="">
      <div className="sm:grid hidden relative">
        <div className="row-span-full col-span-full hero">
          <div className='flex'>
            <div className='leftside'>
          <h1 className='finaldate1 text-4xl text-[#B6FF1A] md:text-8xl mt-96 ml-24 border-[#fff] border-solid'>IIT BHU MODEL</h1>
          <h1 className='finaldate2 text-4xl text-[#B6FF1A] md:text-8xl ml-24'>UNITED NATIONS</h1>
          <h1 className='finaldate3 text-3xl text-[#fff] mt-4 my-2 md:text-7xl ml-24'>RISE.SPEAK.RESOLVE</h1>
          {changebar?<div className='flex gap-24 justify-center ml-4 mt-14'><Link href={'/registerpage'}><button className='bg-[#A3CF3ACC] hover:bg-green-500 hover:text-[#fff] text-5xl px-12 p-4 rounded-lg'>Register</button></Link>
         <Link href={'/loginpage'}><button className='bg-[#A3CF3ACC] hover:bg-green-500 hover:text-[#fff] text-5xl p-4 px-12 rounded-lg'>Login</button></Link></div>:<Link href={'/loggedinhomepage'}><Button className='block  mx-auto my-8 text-5xl'>View Profile</Button></Link>}
          </div>
          <div className='rightside'>
        <img className='block md:w-96 w-44 mx-auto mt-48' src='/images/munvector.svg'></img>
          <h1 className=' finaldate text-4xl text-[#fff] md:text-8xl mt-18 ml-24 border-[#fff] border-solid'>29 SEPT - 1 OCT</h1>
          <h1 className='  text-4xl text-[#fff] currentyear font-bold text-center mt-24 ml-24 border-[#fff] border-solid'>2023</h1>
          </div>
        </div></div>
       

      
        {/* <div className=" row-span-full  justify-center col-span-full self-center text-center mt-96 mr-56 ">
        
         {changebar?<button
            className="text-black bg-[#F5CE3F] hover:bg-yellow-500  mx-auto  px-12 2xl:px-12 h-12 absolute rounded-md text-[1.125rem]  font-semibold "
          ><Link href="/registerpage">
            REGISTER</Link>
          </button>:''}
         
         
        </div>
         */}
        <div className="row-span-full col-span-full self-end  text-center pb-4 mb-28 block">
         
          <div id="testimo" className='text-[#FFFDFA] line-clamp-2 font-italic font-semibold text-3xl text-center inline mx-auto relative border-xl testimo border-black'>"{(testimonial[index])}" </div>
        </div>
      </div>
      <div className="grid sm:hidden">
        <div className="row-span-full col-span-full">
          <Image
            src="/images/mobile-hero-bg.png"
            width={1079}
            height={2318}
            layout="responsive"
            alt="hero images"
          />
        </div>
        <div className="row-span-full col-span-full">
          <Image
            src="/images/hero-filter.png"
            width={1079}
            height={2318}
            layout="responsive"
            alt="hero images"
          />
        </div>
        <div className="row-span-full col-span-full self-center text-center "  data-te-animation-init
  data-te-animation-start="onScroll"
  data-te-animation-on-scroll="repeat"
  data-te-animation-reset="true"
  data-te-animation="[slide-right_1s_ease-in-out]">
          <Image
            src="/images/hero-logo.svg"
            width={300}
            height={123.7}
            alt="hero images"
          />
        </div>
        
          
        
       
        </div>
      </div>
    
  );
}
