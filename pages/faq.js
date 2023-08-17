import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import data from '../data/data.json';
import Dropdown from '../components/FaqDropdown';
import NavBar2 from '../components/navbarforlogin';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
export default function Faq() {
    const auth=getAuth();
    const [changebar,setbar]=useState(true);
   function abc(){auth.onAuthStateChanged((user)=>{if(user){setbar(false)}else{setbar(true)}})}
    abc()
    return (
        <div className='bg-[#F5F5F5]'>
             {changebar? <NavBar navbar={true} backgroundColor="white" qt='' />:<NavBar2 navbar={true} backgroundColor="white" />}
            <div className='flex flex-col justify-center items-center pt-[8.75rem] pb-[17.398rem] w-full h-full'>
                <div className='text-center font-heading font-bold text-[2.5rem]'>FAQs</div>
                <div className='flex flex-wrap justify-center mt-[5.188rem]'>
                    {data.questions.map((i)=>{
                        return(
                            <Dropdown 
                              key={i.id}
                              id={i.id}
                              question={i.question}
                              ans={i.ans}
                            />
                          )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
