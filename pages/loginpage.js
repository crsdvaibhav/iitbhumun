import React, { useState,useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

import GoogleButton from 'react-google-button';
import { getAuth,signInWithPopup,signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';


import { useRouter } from 'next/router';
const LoginPage = () => {
  
  const provider=new GoogleAuthProvider();
  const auth=getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  function signinemail(){signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user
    console.log("email"),
    router.push('/loggedinhomepage')
    // ...
  })
  .catch((err) => {
    console.log(err.code);
    console.log(err.message);
    alert(err.message);
  })};
  function signInWithGoogle(){
    signInWithPopup(auth,provider)
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      router.push('/loggedinhomepage')
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


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  
  return (
    <> 
    <NavBar navbar={true} backgroundColor="white" qt='hidden'/>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[url(../public/images/Group-242.svg)] bg-no-repeat bg-center bg-auto bg-origin-padding  place-items-center">
   
      <Head>
        <title>Login Page</title>
      </Head>

      <div className=" shadow-md rounded px-20 pt-12 pb-28 mb-4       ">
        <h2 className="text-2xl font-bold mb-6 text-[#189BA5]">Login</h2>

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

          <div className="mb-6">
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

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 w-40 mx-5 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit" onClick={function(){signinemail()}}
            >
              Sign In
            </button>
            <button
              className="bg-green-500 w-40 mx-5 hover:bg-green-700 text-white font-bold py-1 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
            <Link href={'/home'}> Home</Link> 
            </button>
          </div>
          <GoogleButton onClick={function(){
            signInWithGoogle() 
          }} id='#google' className="mx-auto 'block' mt-6 border-r-4"type='button'></GoogleButton>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default LoginPage;
