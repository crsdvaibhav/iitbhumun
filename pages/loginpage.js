import React, { useState,useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

import app from '../public/firebaseconfig';

import GoogleButton from 'react-google-button';
import { getAuth,signInWithPopup,signInWithEmailAndPassword,sendPasswordResetEmail,GoogleAuthProvider } from 'firebase/auth';


import { useRouter } from 'next/router';
const LoginPage = () => {
  const texts = ['RISE', 'SPEAK', 'RESOLVE'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 500); // Adjust the time (in milliseconds) for the fade-in effect duration
    }, 3000); // Adjust the time (in milliseconds) to change text every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const provider=new GoogleAuthProvider();
  const auth=getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const[buttonswap,swapbutton]=useState(true);
  function signinemail(){
    swapbutton(false)
    signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user
    console.log("email"),
    window.location.href = "/loggedinhomepage";
    // ...
  })
  .catch((err) => {
    console.log(err.code);
    console.log(err.message);
    alert(err.message);
    swapbutton(true)
  })};
  function signInWithGoogle(){
    signInWithPopup(auth,provider)
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      window.location.href = "/loggedinhomepage";
   console.log(auth.currentUser.displayName)
     
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
    
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    })
  };
function forgotpassword(){
  
  if(email!=""){
    
  sendPasswordResetEmail(auth,email)
    .then(() => {
      // Email sent
      console.log('Password reset email sent to:', email);
      alert('Password reset email sent. Please check your inbox.');
    })
    .catch((error) => {
      console.error('Error:', error.message);
      alert('Error sending password reset email. Please try again later.');
    });
  }
  else{
    alert("Enter your registered email id first.")
  }



}

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  
  return (
    <> 
    <NavBar navbar={true} backgroundColor="white" qt='hidden'/>
    <div className="flex flex-col w-100% items-center justify-center min-h-screen py-2  bg-no-repeat bg-center bg-auto bg-origin-padding  place-items-center"  style={{ backgroundImage: 'url("/images/Group-242.svg")' }}>
   
      <Head>
        <title>Login Page</title>
      </Head>

      <div className=" shadow-md rounded px-20 pt-12 pb-28 mb-4 mt-8       ">
       
        <h2 className="text-3xl font-bold mb-6 text-[#189BA5] text-center">Welcome back!</h2>
        <img className="w-40 h-40 block mx-auto"src='/images/loginicon.png'/>
       
        <form onSubmit={handleSubmit}>
       
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
<button className='mt-0 mb-4 text-blue-500 font-medium'onClick={()=>{forgotpassword()}} type='button'>Forgot password?</button>
          <div className="flex items-center justify-between">
         {  buttonswap? <button
              className="bg-blue-500 w-40 mx-5 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit" onClick={function(){signinemail()}}
            >
              Sign In
            </button>:<button class="buttonload">
  <i class="fa fa-circle-o-notch fa-spin mx-2"></i>Loading...
</button>}
           <button
              className="bg-green-500 w-40 mx-5 hover:bg-green-700 text-white font-bold py-1 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
            <Link href={'/home'}> Home</Link> 
            </button>
          </div>
          <h1 className='font-bold text-3xl text-[#189BA5] text-center my-4'>OR</h1>
          <GoogleButton onClick={function(){
            signInWithGoogle() 
          }} id='#google' className="mx-auto 'block' mt-6 border-r-4"type='button'></GoogleButton>
       <h1 className='mt-5 text-center text-5xl text-[#189BA5] font-bold'>{texts[currentTextIndex]}</h1>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default LoginPage;
