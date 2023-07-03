import Head from 'next/head';
import Script from 'next/script'
import Link from 'next/link';
import { Button } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
const HomePage = () => {
  const handleCheck = (e) => {
    if (error == false) {
      setCheck(true);
    } else {
      setCheck(false);
    }

  };
  var [error, setError] = useState(true);
var ab=false;
const [error1, setError1] = useState(true);
const [check, setCheck] = useState(false);
const [member, setMember] = useState(false);
const [solo, setSolo] = useState(true);
  
  return (
    <>
      <Head>
      
        
        <title>MUN Registration Form</title>
      </Head>
      <Script src="/registermyversion.js"/>
        <Script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js" />
    <Script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js" />
      <style global></style>
      <div className={check?'hidden':'block'}>
    <div className="container mx-auto my-auto mb-auto  px-4 py-8" >
    <p className="font-bold font-heading text-center text-[#1A1E21] text-xl sm:text-[4.5rem] pt-8">
        Delegate Application Form
          </p>
          <div className="place-items-center flex justify-center font-semibold text-center py-16">
            <div
              
              className="text-3xl text-[#FFFFFF] justify-center bg-[#1A1E21] w-10 h-10   border-2 border-[#1A1E21] rounded-full "
            >
              1
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6">Personal Info</div>
            <div
             onClick={handleCheck}
              className={`text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full cursor-pointer ${ab?`text-[#FFFFFF] bg-[#1A1E21]`:``}`}
            >
              2
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6">Portfolio Selection</div>
            <div className="  text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full cursor-pointer ">
              3
            </div>
          </div>
      <form id="registrationForm"  className=" bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:*</label>
          <input type="text" id="name_field" placeholder="Enter your name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="age" required className="block text-gray-700 font-bold mb-2">Age:*</label>
          <input type="number" id="age" placeholder="Age" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender*</label>
          <select id="gender" name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="Insitute" required className="block text-gray-700 font-bold mb-2">Name of Institution:</label>
          <input type="text" placeholder="College or University" id="Institute" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="region" required className="block text-gray-700 font-bold mb-2">Region:*</label>
          <input type="text" placeholder="City or state" id="region" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" required className="block text-gray-700 font-bold mb-2">Email:*</label>
          <input type="email" placeholder="abc264@gmail.com" id="email_field" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="Password" required className="block text-gray-700 font-bold mb-2">Password:*</label>
          <input type="password" placeholder="Use a strong password" id="password" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="MUNcount" className="block text-gray-700 font-bold mb-2">Number of MUNS participated earlier:*</label>
          <input type="number" id="muncount" placeholder="" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="pastaward" className="block text-gray-700 font-bold mb-2">MUN Awards won in past:</label>
          <input type="text" placeholder="Leave if none" id="pastaward"  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="refferalcode"  className="block text-gray-700 font-bold mb-2">Referral code:</label>
          <input type="text"   placeholder="Optional" id="refferalcode"   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
        </div>
  
       
        
        
        <div className="registeroptions2">
        <button  type="button" onClick={handleCheck}  className="w-full bg-green-500 text-white weight-bold py-2 px-1 font-bold rounded-lg hover:bg-blue-600" >
      Select portfolio in next page</button>
      <Link href="/home">
                      <button              
          className="w-full bg-red-500 text-white py-2 px-2 rounded-lg font-bold hover:bg-blue-600">
                        Cancel
                      </button>
                    </Link>
                    </div>
      </form>
    </div></div>
    
                    
                   
                  
                
  
                  {error=false}
        <div className={check ? 'block' : 'hidden'}>
          <p className="font-bold font-heading text-center text-[#1A1E21] text-xl sm:text-[4.5rem] pt-8 my-5 ">
            Delegate Application Form
          </p>
          <div className="place-items-center flex justify-center font-semibold text-center  pt-12 mb-12 mt-60px ">
            <div
              onClick={() => {
                setCheck(false);
              }}
              className="text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  "
            >
              1
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6">Personal Info</div>
            <div
              onClick={() => {
                setCheck(true);
              }}
              className="text-3xl text-[#FFFFFF] justify-center bg-[#1A1E21] w-10 h-10   border-2 border-[#1A1E21] rounded-full "
            >
              2
            </div>
            <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6">Portfolio Selection</div>
            <div className="  text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  ">
              3
            </div>
          </div>

          <div className="flex flex-col sm:grid sm:grid-flow-col sm:grid-cols-3 items-center py-12 m-auto justify-items-center">
            <div>
              <p className=" text-center font-bold text-3xl mb-5">
                PORTFOLIO I
              </p>
              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>
                <select
                  name="Committee1"
                  className="w-72 p-2 rounded-lg"
                  onChange={(e) => {
                    handleChange1(e);
                  }}
                >
                 
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
                    
                  >
                    
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
                    
                  >
                   
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
                    onChange={(e) => {
                      setFormInput({
                        ...formInput,
                        Committee_1_Country_Preference_3: e.target.value,
                      });
                    }}
                  >
                   
                  </select>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-4 sm:mt-0 text-center font-bold text-3xl mb-5">
                PORTFOLIO II
              </p>
              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>

                <select
                  name="Committee1"
                  className="w-72 p-2 rounded-lg"
                  onChange={(e) => {
                    handleChange2(e);
                  }}
                >
                  
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
                    onChange={(e) => {
                      setFormInput({
                        ...formInput,
                        Committee_2_Country_Preference_1: e.target.value,
                      });
                    }}
                  >
                    
                  </select>
                </div>
              </div>{' '}
              <div>
                <div className="w-72 pb-4">
                  <p className="font-medium text-[#189BA5] flex py-2">
                    Option 2
                  </p>
                  <select
                    name="Option 2"
                    className="w-72 p-2 rounded-lg"
                    onChange={(e) => {
                      setFormInput({
                        ...formInput,
                        Committee_2_Country_Preference_2: e.target.value,
                      });
                    }}
                  >
                    
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
                    
                  >
                    
                  </select>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-4 sm:mt-0 text-center font-bold text-3xl mb-5">
                PORTFOLIO III
              </p>
              <div className="w-72 pb-4">
                <p className="font-medium text-[#189BA5] flex py-2">
                  Select a committee
                </p>

                <select
                  name="Committee1"
                  className="w-72 p-2 rounded-lg"
                 
                >
                  
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
                   
                  >
                    
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
                  
                  >
                   
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
                   
                  >
                   
                  </select>
                </div>
              </div>
            </div>
          </div>
          <h1 className='registeras'>Register as:</h1>
        <div className="registeroptions">
          
        <button id="register2" type="submit" onClick={handleCheck}  className="w-full bg-green-500 text-white py-2 px-2 m-auto rounded-lg hover:bg-blue-600" data-tooltip="Tooltip content for Single Delegate Start with your country. Do not simply type in your agenda into google and start reading. Type in your country first and get a solid idea of your government economy, conflicts, etc. Make sure you know your heads of state, GDP, major military and political allies, any major conflicts that persist in or around your country, and jot down a couple of notes. Make a small document about your general foreign policy on various issues. Make a document about your stance on social rights, humanitarian rights, military intervention, etc.

        Once you have gotten your country down, and I mean DOWN, now move on to the agenda. Now, some delegates may crucify me for this, but I look at Wikipedia. ">Single Delegate </button>
        <button id="register3" type="submit"   className="w-full bg-green-500 text-white weight-bold py-2 px-1 font-bold rounded-lg hover:bg-blue-600" data-tooltip="Tooltip content for Conference ambassadorStart with your country. Do not simply type in your agenda into google and start reading. Type in your country first and get a solid idea of your government economy, conflicts, etc. Make sure you know your heads of state, GDP, major military and political allies, any major conflicts that persist in or around your country, and jot down a couple of notes. Make a small document about your general foreign policy on various issues. Make a document about your stance on social rights, humanitarian rights, military intervention, etc.

        Once you have gotten your country down, and I mean DOWN, now move on to the agenda. Now, some delegates may crucify me for this, but I look at Wikipedia. " >Conference ambassador</button>
      </div>
          <div className="flex justify-center m-auto mt-3">
            <button
              onClick={() => {
                setCheck(false);
                setCheck(false);
              }}
              className="py-2 px-4 bg-black text-white rounded-lg w-32 mx-2 my-4"
            >
              Back
            </button>
            {error1 == false && (
              <Link href="thankyou">
                <Button onClick={handleSubmit} className="px-10">
                  Submit
                </Button>
              </Link>
            )}
          </div>
        </div>
      
    

  

    


    

    
<Script src="registermyversion.js" typeof='module' type='module'/>
<Script src="https://smtpjs.com/v3/smtp.js"/>


    </>
  );
};

export default HomePage;