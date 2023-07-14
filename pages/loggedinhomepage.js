
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import Footer from "../components/Footer";
import data from '../data/data.json';

import Script from "next/script";
import NavBar2 from "../components/navbarforlogin";
import Footer2 from "../components/footerforlogin";
import { useEffect, useState, Ref } from "react";
import { getDatabase, get,set, onValue, ref,update } from "firebase/database";
import { Alert, Button, alert } from "@material-tailwind/react";
import Router, {  useRouter } from "next/router";
import Link from "next/link";
const Loggedinhomepage = () => {
  var ab=false;
const aippm = data.aippm;
const ls = data.ls;
const ccc = data.ccc;
const uncsw = data.uncsw;
const ecosoc = data.ecosoc;
const disec = data.disec;
const wto = data.wto;
const unodc = data.unodc;
const ip = data.ip;
  <Script src="/vanillascript.js" typeof='module' type='module' />
  const [selected1, setSelected1] = useState('None');
  const [selected2, setSelected2] = useState('none');
  const [selected3, setSelected3] = useState('none');
  const [pref1option1, setSelected4] = useState('');
  const [pref1option2, setSelected5] = useState('');
  const [pref1option3, setSelected6] = useState('');
  const [pref2option1, setSelected7] = useState('');
  const [pref2option2, setSelected8] = useState('');
  const [pref2option3, setSelected9] = useState('');
  const [pref3option1, setSelected10] = useState('');
  const [pref3option2, setSelected11] = useState('');
  const [pref3option3, setSelected12] = useState('');



  let type1 = null;
  let options1 = null;
  if (selected1 === 'AIPPM') {
    type1 = aippm;
  } else if (selected1 === 'Lok Sabha') {
    type1 = ls;
  } else if (selected1 === 'CCC') {
    type1 = ccc;
  } else if (selected1 === 'UNCSW') {
    type1 = uncsw;
  } else if (selected1 === 'ECOSOC') {
    type1 = ecosoc;
  } else if (selected1 === 'DISEC') {
    type1 = disec;
  } else if (selected1 === 'WTO(Online)') {
    type1 = wto;
  } else if (selected1 === 'UNODC(Online)') {
    type1 = unodc;
  } else if (selected1 === 'International Press(Hybrid)') {
    type1 = ip;
  }

  if (type1) {
    options1 = type1.map((el) => <option key={el}>{el}</option>);
  }
  let type2 = null;
  let options2 = null;
  if (selected2 === 'AIPPM') {
    type2 = aippm;
  } else if (selected2 === 'Lok Sabha') {
    type2 = ls;
  } else if (selected2 === 'CCC') {
    type2 = ccc;
  } else if (selected2 === 'UNCSW') {
    type2 = uncsw;
  } else if (selected2 === 'ECOSOC') {
    type2 = ecosoc;
  } else if (selected2 === 'DISEC') {
    type2 = disec;
  } else if (selected2 === 'WTO(Online)') {
    type2 = wto;
  } else if (selected2 === 'UNODC(Online)') {
    type2 = unodc;
  } else if (selected2 === 'International Press(Hybrid)') {
    type2 = ip;
  }












  if (type2) {
    options2 = type1.map((el) => <option key={el}>{el}</option>);
  }
  let type3 = null;
  let options3 = null;
  if (selected3 === 'AIPPM') {
    type3 = aippm;
  } else if (selected3 === 'Lok Sabha') {
    type3 = ls;
  } else if (selected3 === 'CCC') {
    type3 = ccc;
  } else if (selected3 === 'UNCSW') {
    type3 = uncsw;
  } else if (selected3 === 'ECOSOC') {
    type3 = ecosoc;
  } else if (selected3 === 'DISEC') {
    type3 = disec;
  } else if (selected3 === 'WTO(Online)') {
    type3 = wto;
  } else if (selected3 === 'UNODC(Online)') {
    type3 = unodc;
  } else if (selected3 === 'International Press(Hybrid)') {
    type3 = ip;
  }



  if (type3) {
    options3 = type3.map((el) => <option key={el}>{el}</option>);
  }

  const handleChange3 = (e) => {
    setFormInput({
      ...formInput,
      Committee_Preference_3: e.target.value,
    });
    setSelected3(e.target.value);
  };
  const handleChange2 = (e) => {
    setFormInput({
      ...formInput,
      Committee_Preference_2: e.target.value,
    });
    setSelected2(e.target.value);
  };
  const handleChange1 = (e) => {
    setFormInput({
      ...formInput,
      Committee_Preference_1: e.target.value,
    });
    setSelected1(e.target.value);
  };
  const [formInput, setFormInput] = useState({
    
   
   option1: '',
   option2: '',
   option3: '',
    option4: '',
    option5: '',
    option6: '',
    option7: '',
    option8: '',
    option9: '',
  });










 
  const committees = [];

  data.registerCommittees.map((i) => {
    committees.push(i);
  });

  const [result,setresult]=useState("")
function updatedata(){
  const database=getDatabase()
  const databaseRef = ref(database, "preferences");
  const auth = getAuth();
  // Retrieve the data once
  get(databaseRef)
    .then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        
        const data = childSnapshot.val();
  
        
        if (data.email === auth.currentUser.email) {
         
         
          // Get the reference to the specific data using the child snapshot key
          const dataRef = ref(database, `preferences/${childSnapshot.key}`);
  
          // Update the value using the reference and the updated data
          update(dataRef, {

            option1:pref1option1,
            option2:pref1option2,
            option3:pref1option3,
             option4:pref2option1,
             option5:pref2option2,
             option6:pref2option3,
             option7:pref3option1,
             option8:pref3option2,
             option9:pref3option3,












          })
            .then(() => {
              setresult("Portfolio updated Succesfully!")
            })
            .catch((error) => {
              setresult("Error Updating Data!")
            });
        }
      });
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
    });

  }

























  const [updateportfolio1,setfolio]=useState(false);
   const [hideportfolio,setportfolio]=useState(false)
  const [buttonname, rename] = useState("Show Portfolio and alloted preference")
const[buttonname1,rename1]=useState("Change portfolio")
  function pfp() {
    rename(hideportfolio ? buttonname = "Show Portfolio and alloted preference" : buttonname = "Hide Portfolio")
    setportfolio(!hideportfolio)}
    function pft() {
      rename1(updateportfolio1 ? buttonname1 = "Change portfolio" : buttonname1 = "No Change")
      setfolio(!updateportfolio1)}

    
  
    return (
      
      <>
        <NavBar2 navbar={true} backgroundColor="white" />
        <div className="my-50 text-center font-bold">
          <h2 className="my-50 text-center font-bold">Record of this user:</h2>

          <div id="content" className="mt-40 w-100 h-fit-content display:'block' h-min-content m-auto text-center font-bold" ></div>

          <h1 id="showresult" className='my-4 text-red-500 text-xl w-30px text-center'></h1>
          <Button className="block mx-auto py-3 my-3 " id="paynow">Pay now!</Button>
          <button id="showbutton" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={pfp}>{`${buttonname}`}</button>

          <button onClick={pft} id="showbutton1" className="bg-transparent mx-6 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">{`${buttonname1}`}</button>

          <div className={`${hideportfolio ? 'block' : 'hidden'}  justify-center m-auto`} id={!hideportfolio ? "showportfolio" : "showportfolio.active"} >
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


                </thead>
                <tbody>
                  <tr id="container2ul-row1">

                  </tr>
                  <tr id="container2ul-row2">

                  </tr>

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


              </thead>
                <tbody>
                  <tr id="container3ul-row1">

                  </tr>
                  <tr id="container3ul-row2">

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

                </thead>
                <tbody>
                  <tr id="container4ul-row1">

                  </tr>
                  <tr id="container4ul-row2">

                  </tr>

                </tbody>
              </table>

            </div>
          </div>
          <Script src="vanillascript.js" typeof='module' type='module' />
        </div>
        <div className={`flex flex-col sm:grid sm:grid-flow-col sm:grid-cols-3  items-center py-12 m-auto justify-items-center`}>
            <div className={`${updateportfolio1?'block':'hidden'}`}>
              
              <p className=" text-center font-bold text-3xl mb-5">
                PORTFOLIO I
              </p>

              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>
                <select id='Committee1'
                  name="Committee1" 
                  value={selected1}
                  className="w-72 p-2 rounded-lg"
                  onChange={(e) => {
                    handleChange1(e);
                    
                   
                  }} 
                >
                  {committees.map((i) => {
                    return (
                      <option value={i} key={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 1
                  </p>
                  <select id='pref1option1'
                    name="Option 1" value={pref1option1}
                    className="w-72 p-2 rounded-lg"   
                    on onChange={(e)=>{setSelected4(e.target.value)}}
                  >
                    {options1}
                  </select>
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 2
                  </p>
                  <select value={pref1option2}
                    name="Option 2" id='pref1option2'
                    className="w-72 p-2 rounded-lg" 
                    onChange={(e)=>{setSelected5(e.target.value)}}
                  >
                    {options1}
                  </select>
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 3
                  </p>
                  <select  value={pref1option3} onChange={(e)=>{setSelected6(e.target.value)}}
                    name="Option 3" id='pref1option3'
                    className="w-72 p-2 rounded-lg"
                  
                  >
                    {options1}
                  </select>
                </div>
              </div>
              
            </div>
           
            <div className={`${updateportfolio1?'block':'hidden'}`}>
            
              <p className="mt-4 sm:mt-0 text-center font-bold text-3xl mb-5">
                PORTFOLIO II
              </p>
              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>

                <select value={selected2} id='Committee2'
                  name="Committee1"
                  className="w-72 p-2 rounded-lg"
                  onChange={(e) => {
                    handleChange2(e);
                  }}
                >
                  {committees.map((i) => {
                    return (
                      <option value={i} key={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 1
                  </p>
                  <select value={pref2option1} id='pref2option1'onChange={(e)=>{setSelected7(e.target.value)}}
                    name="Option 1"
                    className="w-72 p-2 rounded-lg"
                   
                  >
                    {options2}
                  </select>
                </div>
              </div>{' '}
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 2
                  </p>
                  <select value={pref2option2}
                    name="Option 2" id='pref2option2'
                    className="w-72 p-2 rounded-lg"
                    onChange={(e)=>{setSelected8(e.target.value)}}
                  >
                    {options2}
                  </select>
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 3
                  </p>
                  <select value={pref2option3}
                    name="Option 3" id='pref2option3'
                    className="w-72 p-2 rounded-lg"
                    onChange={(e)=>{setSelected9(e.target.value)}}
                  >
                    {options2}
                  </select>
                </div>
              </div>
            </div>
            <div className={`${updateportfolio1?'block':'hidden'}`}>
              <p className="mt-4 sm:mt-0 text-center font-bold text-3xl mb-5">
                PORTFOLIO III
              </p>
              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>

                <select
                  name="Committee1" id='Committee3'
                  value={selected3}
                  className="w-72 p-2 rounded-lg"
                  onChange={(e) => {
                    handleChange3(e);
                  }}
                >
                  {committees.map((i) => {
                    return (
                      <option value={i} key={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 1
                  </p>
                  <select
                    name="Option 1"
                    className="w-72 p-2 rounded-lg"
                    value={pref3option1} id='pref3option1'
                    onChange={(e)=>{setSelected10(e.target.value)}}
                  >
                    {options3}
                  </select>
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 2
                  </p>
                  <select
                    name="Option 2"
                    className="w-72 p-2 rounded-lg"
                    value={pref3option2} id='pref3option2'
                    onChange={(e)=>{setSelected11(e.target.value)}}
                  >
                    {options3}
                  </select>
                </div>
              </div>
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 3
                  </p>
                  <select
                    name="Option 3"
                    className="w-72 p-2 rounded-lg"
                    value={pref3option3} id='pref3option3'
                    onChange={(e)=>{setSelected12(e.target.value)}}
                  >
                    {options3}
                  </select>
                </div>
              </div>
            </div>
          </div>
         



<Button onClick={updatedata} className={`${updateportfolio1?'block':'hidden'} mx-auto`}>Update portfolio</Button>
<div className={`my-4 ${updateportfolio1?'block':'hidden'} text-[#189BA5] text-2xl font-bold text-center`}>{result}</div>






        <Footer2 />
      </>
    );}
   
      
  

  ;

  export default Loggedinhomepage;
