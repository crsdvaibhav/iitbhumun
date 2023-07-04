import React, { useState,useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <h2 className="text-2xl font-bold mb-6">Login</h2>

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
              type="submit"
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
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default LoginPage;
