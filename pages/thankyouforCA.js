import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../public/firebaseconfig';
import Link from 'next/link';
import Footer from '../components/Footer';
import Image from 'next/image';
import Script from 'next/script';
const Thankyou = () => {
 
  

  return (
    <div className="bg-[#F5F5F5]">
      <div className="place-items-center flex justify-center font-semibold text-center py-12">
        <div className="text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full ">
          1
        </div>
        <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
        <div className="text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  ">
          2
        </div>
        <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
        <div className="text-3xl text-[#FFFFFF] justify-center bg-[#1A1E21] w-10 h-10   border-2 border-[#1A1E21] rounded-full   ">
          3
        </div>
      </div>
      <p className="font-bold font-heading text-center text-[#1A1E21] text-xl sm:text-[4.5rem] pt-2">
        Thank you
      </p>
      <p className="font-bold font-heading text-center text-[#1A1E21] text-xl sm:text-[1.5rem] mt-2 pt-8">
        <span id='titu'>
          You have successfully registered for the 12th edition of IIT BHU MUN as a conference ambassador!.
        </span>
      </p>
      <h1>Your referral code is:<span id='reff'></span></h1>
      {/* {Object.keys(filteredData).map((key) => {
        if (key === 'referralCode') {
          return <h1 className="text-black">{filteredData[key]}</h1>;
        }
      })} */}
      <button className="qtp mx-2 rounded-md">
        <Link href={'/loginpage'}>Login</Link>
      </button>
      <div className="font-bold text-2xl text-[#189BA5] flex m-auto justify-center pt-4">
        <div>Login using your email and password to confirm your portfolio and complete payment.</div>
      </div>
      <div className="flex m-auto justify-center pt-4">
        <Image src="/images/Payment.png" width={800} height={600} alt="icons" />
      </div>
      <div className="font-bold flex space-y-5 flex-col justify-between items-center sm:w-3/4 w-5/6 lg:w-1/2 mx-auto text-sm lg:text-2xl text-justify p-12">
        For any issues with Login and Payment, kindly write to us at{' '}
        <a href="mailto:secretariat@iitbhumun.com" className="text-indigo-700 mt-8">
          secretariat@iitbhumun.com
        </a>
      </div>
      <Footer />
      <Script src='/admin.js'type='module'typeof='module'/>
    </div>
  );
};

export default Thankyou;
