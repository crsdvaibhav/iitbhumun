
 import { getAuth,sendPasswordResetEmail } from "firebase/auth";
 
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
  const [buttonname,rename]=useState("Show Portfolio and alloted preference")
  const userEmail = auth.currentUser ? auth.currentUser.email : "shivanshu264@gmail.com";

  function pfp(){rename(hideportfolio?buttonname="Show Portfolio and alloted preference":buttonname="Hide Portfolio")
    setportfolio(!hideportfolio)
    
  }
    return (
      <>
        <NavBar2 navbar={true} backgroundColor="white" />
        <div className="my-50 text-center font-bold">
          <h2 className="my-50 text-center font-bold">Record of this user:</h2>
       
          <div id="content"className="mt-40 w-100 h-fit-content display:'block' h-min-content m-auto text-center font-bold" ></div>


<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={pfp}>{`${buttonname}`}</button>



<div className={`${hideportfolio?'block':'hidden'} justify-center m-auto`} >
<div className=" sm:mx-[auto] mb-[2.938rem] w-[fit-content] sm:w-[fit-content] sm:h-[cover] bg-white shadow-black/10 shadow-xl rounded-lg px-4 py-8">
<h2 className="'block' py-4  text-red-500">Portfolio-1  </h2>

<h1 id="h1"></h1><table className="table-auto min-w-full border text-center text-sm  dark:border-neutral-500" id="container2ul">
<thead className="border-b font-medium dark:border-neutral-500">
    
       <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">Preference type</th>
       <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">Name</th>
       <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">Allotment</th>
   
  </thead>
  <tbody>
    <tr id="container2ul-row1">

      </tr>
      <tr id="container2ul-row2">

</tr>
<tr><td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">Allotment Pending!</td>
<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">Allotment Pending!</td>
<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">Allotment Pending!</td></tr>

</tbody>

</table>
</div>
<div className=" sm:mx-[auto] mb-[2.938rem] w-[fit-content] sm:w-[fit-content] sm:h-[cover] bg-white shadow-black/10 shadow-xl rounded-lg px-4 py-8">
<h2 className="'block' py-4  text-red-500">Portfolio-2  </h2>
<h1 id="h2"> </h1><table className="table-auto min-w-full border text-center text-sm  dark:border-neutral-500" id="container3ul"><thead className="border-b font-medium dark:border-neutral-500">
    
       <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">Preference type</th>
       <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">Name</th>
       <th
                scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">Allotment</th>
   
  </thead>
  <tbody>
    <tr id="container3ul-row1">

      </tr>
      <tr id="container3ul-row2">

</tr>
<tr>
<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">Allotment Pending!</td>
<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">Allotment Pending!</td>
<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">Allotment Pending!</td>


</tr>

</tbody>
  
  </table>
</div>
<div className=" sm:mx-[auto] mb-[2.938rem] w-[fit-content] sm:w-[fit-content] sm:h-[cover] bg-white shadow-black/10 shadow-xl rounded-lg px-4 py-8">
<h2 className="'block' py-4 text-red-500">Portfolio-3  </h2>
<h1 id="h3"> </h1><table className="table-auto min-w-full border text-center text-sm  dark:border-neutral-500" id="container4ul">
<thead className="border-b font-medium dark:border-neutral-500">
    
       <th
                
                class="border-r px-6 py-4 dark:border-neutral-500">Preference type</th>
       <th
                
                class="border-r px-6 py-4 dark:border-neutral-500">Name</th>
       <th
                
                class="border-r px-6 py-4 dark:border-neutral-500">Allotment</th>
    
  </thead>
  <tbody>
    <tr id="container4ul-row1">

      </tr>
      <tr id="container4ul-row2">

</tr>
<tr><td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">Allotment Pending!</td>
<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">Allotment Pending!</td>
<td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">Allotment Pending!</td></tr>

</tbody>
</table>

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
