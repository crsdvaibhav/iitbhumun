
import Image from "next/image";
import NavBar from '../components/Navbar';
import EventsCarousel from "../components/EventsCarousel";
import PlacesCarousel from "../components/PlacesCarousel";
import Footer from "../components/Footer";
export default function gallery() {


  return (
    <div className='bg-gray-100 w-[100%] sm:w-[100%] ' >
       <NavBar navbar={true} backgroundColor="white" qt='' />


      <div className="">
        <div className="bold text-center font-extrabold text-4xl">
          PAST EXPERIENCE
        </div>
        <div className=' w-full '>
          <EventsCarousel />
        </div>

      </div>
      <div className="mt-[20px]">
        <div className="bold text-center font-extrabold text-4xl">
          PLACES TO VISIT IN VARANASI
        </div>
        <div className=' w-full'>
         <PlacesCarousel></PlacesCarousel>
        </div>
      </div>

<Footer></Footer>
    </div>
  );
}
