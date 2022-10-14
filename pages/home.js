import data from '../data/data.json'
import ReviewCard from '../components/ReviewCard'
import NavBar from '../components/NavBar'
import ActiveNavbar from '../components/ActiveNavbar';
import { useState, useEffect } from 'react';
import Head from 'next/head';


export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
  }, [])
  return (

    <div className='font-custom'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
      </Head>
      {navbar ? <ActiveNavbar/> : <NavBar />}
      <div className="bg-yellow-light">
        <div className="bg-[url('../public/images/bg-image-delegates(1).jpg')] bg-cover sm:h-[85vh] h-[75vh] shadow-magenta-light/30 shadow-xl">
          <div className="flex flex-col justify-center items-center h-[100%] brightness-100">
            <img src="/images/logo.png" className="sm:w-2/5 w-3/4 mt-24"></img>
            <div className="flex my-12 p-2">
              <div><button className="bg-yellow-dark m-2 py-[5px] px-2 rounded-md text-magenta-dark sm:text-xl font-semibold sm:w-36 w-28">Register</button></div>
              <div><button className="border-[2px] border-white text-white text-yellow-light sm:text-xl font-semibold sm:w-36 w-28 m-2 py-[3px] rounded-md">About us</button></div>
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <div className="flex justify-around items-center">
            <div className="text-center sm:text-xl text-magenta-light font-bold"><img src="/images/delegates.png" alt="delegates" className="sm:w-32 w-24 mt-12 mb-4"></img>Delegates</div>
            <div className="text-center sm:text-xl text-magenta-light font-bold"><img src="/images/countries.png" alt="countries" className="sm:w-32 w-24 mt-12 mb-4"></img>Countries</div>
            <div className="text-center sm:text-xl text-magenta-light font-bold"><img src="/images/conferences.png" alt="conferences" className="sm:w-32 w-24 mt-12 mb-4"></img>Conferencees</div>
          </div>
        </div>
        <div className='text-center mt-8 mx-12 p-4'>
          {data.body}
        </div>
        <div className='h-[30vh] mt-12 bg-magenta-dark shadow-2xl shadow-magenta-light/50'>
          <p className='text-yellow-light text-2xl text-center font-bold p-2'>Sponsors</p>
        </div>
        <div>
          <p className='text-2xl sm:text-3xl text-magenta-light text-center font-bold mt-12'>About Us</p>
          <p className='text-center mx-12 sm:p-8 p-4'>{data.body}</p>
        </div>
        <div className='mt-12'>
          <p className='text-3xl text-magenta-light text-center font-bold mb-8'>Reviews</p>
          <div className='flex flex-col sm:flex-row sm:justify-around items-center'>
            {data.reviews.map((i) => {
              return (
                <ReviewCard
                  key={i.id}
                  name={i.name}
                  country={i.country}
                  review={i.review}
                />
              )
            })}
          </div>
        </div>
        <div className="mt-24 bg-[url('/images/bg-2.png')] bg-cover h-[70vh] shadow-magenta-light/30 shadow-xl">
          <div className='flex flex-col sm:flex-row h-[100%] bg-magenta-dark bg-opacity-50'>
            <div className='sm:w-3/5 flex p-4 items-start justify-start my-8'>
              <div className='flex items-center'>
                <img src='/images/logo-2.png' className='sm:h-28 h-20 mx-4'></img>
                <img src='/images/logo-3.png' className='sm:h-16 h-8 mx-4'></img>
              </div>
            </div>
            <div className='sm:w-2/5 flex flex-col items-center justify-center text-yellow-light'>
              <p className='text-justify text-xs sm:text-base sm:mx-12 mx-8'>{data.body}</p>
              <div className='flex justify-end p-2'><button className="bg-yellow-dark sm:w-36 w-28 m-2 py-[5px] rounded-md text-magenta-dark text-xs sm:text-base font-bold">Register</button></div>
            </div>
          </div>
        </div>
        <div className='bg-yellow-light'>
          <div className='mt-24 border-t-[2px] border-magenta-light'>
            <div className='mx-12 p-2 flex border-b-[1px] border-magenta-light'>
              <div className='w-2/4 flex flex-col p-2'>
                <div className='flex'>
                  <img src='/images/logo-4.png' className='h-16 m-2'></img>
                  <div>
                    <img src='/images/logo-5.png' className='h-16 m-2'></img>
                    <p className='pr-20 text-justify sm:text-base text-xs'>{data.footerdata}</p>
                  </div>
                </div>
              </div>
              <div className='w-1/4 flex flex-col justify-center'>
                <div className='m-2'>
                  <p className='text-magenta-light text-xl font-bold my-2'>Explore</p>
                  <span className='mr-4'>Home</span>
                  <span className='border-x-[2px] border-magenta-dark px-4'>FAQ</span>
                  <span className='mx-4'>About us</span>
                </div>
                <div className='m-2'>
                  <p className='text-magenta-light text-xl font-bold my-2'>Follow us</p>
                  <span className='mr-4'><img src='/images/ig.png' className='w-4 inline'></img></span>
                  <span className='border-x-[2px] border-magenta-dark px-4'><img src='/images/linkedin.png' className='w-4 inline'></img></span>
                  <span className='mx-4'><img src='/images/twitter.png' className='w-4 inline'></img></span>
                </div>
              </div>
              <div className='w-1/4 flex flex-col justify-center'>
                <div className='text-magenta-light text-xl font-bold my-2 text-left'>Contact</div>
                <div>
                  <div className='py-2'><img src="/images/phone.png" className='w-8 inline px-2'></img>+91 8645951255</div>
                  <div className='py-2'><img src="/images/mail.png" className='w-8 inline px-2'></img>name@itbhu.ac.in</div>
                  <div className='py-2'><img src="/images/location.png" className='w-8 inline px-2'></img>IIT BHU, Varanasi</div>
                </div>
              </div>
            </div>
            <div className='p-2 text-center text-xs flex justify-center'>
              <span className='p-2'>All rights reserved</span>
              <span className='p-2'>Privacy</span>
              <span className='p-2'>Terms & Conditons</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
