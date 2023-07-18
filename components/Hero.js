import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import CloseReg from './CloseReg';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../public/firebaseconfig';
import data from '../data/data.json';
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
  const[index,setCurrentTextIndex]=useState("")
  
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
        <div className="row-span-full col-span-full">
          <Image
            src="/images/MUN.jpg"
            width={1920}
            height={1080}
            layout="responsive"
            alt="hero images"
          />
        </div>
        <div className="row-span-full col-span-full">
          <Image
            src="/images/hero-filter.png"
            width={1920}
            height={1080}
            layout="responsive"
            alt="hero images"
          />


          
        </div>

        <div className="row-span-full col-span-full self-center text-center logo mb-56 ">
          <Image
            src="/images/hero-logo.svg"
            width={600}
            height={300}
            alt="hero images"
          />
        </div>
        <div className=" row-span-full  justify-center col-span-full self-center text-center mt-96 mr-56 ">
        
         {changebar?<button
            className="text-black bg-[#F5CE3F] hover:bg-yellow-500  mx-auto  px-12 2xl:px-12 h-12 absolute rounded-md text-[1.125rem]  font-semibold "
          ><Link href="/registerpage">
            REGISTER</Link>
          </button>:''}
         
         
        </div>
        
        <div className="row-span-full col-span-full self-end  text-center pb-4 mb-28 block">
         
          <div id="testim" className='text-[#ffffff] line-clamp-2 font-semibold text-3xl text-center inline mx-auto relative border-xl border-black'>"{(testimonial[index])}" </div>
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
