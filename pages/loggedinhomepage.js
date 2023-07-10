
 import { getAuth } from "firebase/auth";
 import { CgProfile } from 'react-icons/fa';
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import app from "../public/firebaseconfig";
import Script from "next/script";
import NavBar2 from "../components/navbarforlogin";
import Footer2 from "../components/footerforlogin";
import { useState } from "react";
const Loggedinhomepage = () => {
  <Script src="/vanillascript.js" typeof='module' type='module'/>
  // const database = getDatabase();
   const auth = getAuth();
  const [hideportfolio,setportfolio]=useState(false)
  const [buttonname,rename]=useState("Show Portfolio")
  const userEmail = auth.currentUser ? auth.currentUser.email : "shivanshu264@gmail.com";

  function pfp(){rename(hideportfolio?buttonname="Show Portfolio":buttonname="Hide Portfolio")
    setportfolio(!hideportfolio)
    
  }
    return (
      <>
        <NavBar2 navbar={true} backgroundColor="white" />
        <div className="my-50 text-center font-bold">
          <h2 className="my-50 text-center font-bold">Record of this user:</h2>
       
          <div id="content"className="my-40 w-100 h-40 display:'block' h-screen m-auto text-center font-bold" ></div>


<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={pfp}>{`${buttonname}`}</button>



<div className={`${hideportfolio?'flex':'hidden'} justify-center m-auto`} >
<div className="  sm:mx-[auto] mb-[2.938rem] w-[80vw] sm:w-[34.313rem] sm:h-[12.563rem] bg-white shadow-black/10 shadow-xl rounded-lg px-4 py-8">
<h1 id="h1">Portfolio-1  </h1><ul id="container2ul"></ul>
</div>
<div className=" sm:mx-[auto] mb-[2.938rem]  w-[80vw] sm:w-[34.313rem] sm:h-[12.563rem] bg-white shadow-black/10 shadow-xl rounded-lg px-4 py-8"
>
<h1 id="h2">Portfolio-2  </h1><ul id="container3ul"></ul>
</div>
<div className=" sm:mx-[auto] mb-[2.938rem] w-[80vw] sm:w-[34.313rem] sm:h-[12.563rem] bg-white shadow-black/10 shadow-xl rounded-lg px-4 py-8">
<h1 id="h3">Portfolio-3  </h1><ul id="container4ul"></ul>
</div>
</div>


          <Script src="vanillascript.js" typeof='module' type='module'/>
        </div>
        <Footer2 />
      </>
    );
  
  
  }
;

export default Loggedinhomepage;
