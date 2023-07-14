import Image from 'next/image';
import Link from 'next/link';
import {  FaSignInAlt, FaUserCircle } from "react-icons/fa";

import app from "../public/firebaseconfig";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useState } from 'react';
import { useRouter } from "next/router";

import { getAuth,onAuthStateChanged,signOut,sendPasswordResetEmail } from 'firebase/auth';
import Script from 'next/script';









const CADB = () => {



































return(
    <>
    <h1>TITU</h1>
    <Script src="refill.js" type='module' typeof='module'></Script></>
)












}
export default CADB