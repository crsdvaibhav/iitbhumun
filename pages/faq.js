import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import data from '../data/data.json';
import Dropdown from '../components/FaqDropdown';

export default function Faq() {

    return (
        <div className='bg-[#F5F5F5]'>
            <NavBar navbar={true} backgroundColor="white" qt='' />
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
