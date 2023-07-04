import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CloseReg from './CloseReg';
export default function Hero() {
  const [closeReg, setCloseReg] = useState(true);
  const handleChange = () => {
    setCloseReg(false);
    setTimeout(() => {
      setCloseReg(true);
    }, 1000);
  }
  return (
    <div className="">
      <div className="sm:grid hidden relative">
        <div className="row-span-full col-span-full">
          <Image
            src="/images/hero-bg.png"
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

        <div className="row-span-full col-span-full self-center text-center ">
          <Image
            src="/images/hero-logo.svg"
            width={600}
            height={300}
            alt="hero images"
          />
        </div>
        <div className=" row-span-full col-span-full self-center text-center mt-96 mr-56 ">

          { <button
            className="text-black bg-[#F5CE3F] absolute px-12 2xl:px-12 h-8 rounded-md text-[1.125rem] font-semibold "
          ><Link href="/registerpage">
            REGISTER</Link>
          </button>
          }
        </div>
        <div className="row-span-full col-span-full self-end text-center pb-4 mr-12">
          <Image
            src="/images/hero-scroll.svg"
            width={33.95}
            height={64.61}
            alt="hero images"
          />
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
        <div className="row-span-full col-span-full self-center text-center ">
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
