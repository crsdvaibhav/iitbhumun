
 import { getAuth } from "firebase/auth";
 import { CgProfile } from 'react-icons/fa';
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import app from "../public/firebaseconfig";
import Script from "next/script";
import NavBar2 from "../components/navbarforlogin";
import Footer2 from "../components/footerforlogin";
const Loggedinhomepage = () => {
  <Script src="/vanillascript.js" typeof='module' type='module'/>
  // const database = getDatabase();
   const auth = getAuth();
  
  const userEmail = auth.currentUser ? auth.currentUser.email : "shivanshu264@gmail.com";

  
    return (
      <>
        <NavBar2 navbar={true} backgroundColor="white" />
        <div className="my-50 text-center font-bold">
          <h2 className="my-50 text-center font-bold">Record of this user:</h2>
          <div id="content"className="my-40 w-100 h-40 display:'block' h-screen m-auto text-center font-bold" ></div>
        
          <Script src="vanillascript.js" typeof='module' type='module'/>
        </div>
        <Footer2 />
      </>
    );
  
  
  }
;

export default Loggedinhomepage;
