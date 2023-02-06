import Navbar from "../components/Navbar";
import Image from "next/image";

import EventsCarousel from "../components/eventsCarousel";
import PlacesCarousel from "../components/placesCarousel";
export default function NavBar() {


  return (
    <>
      <Navbar navbar={true} />
      <div>
        <Image width={3000} height={1024} src="/images/Mun.webp" alt="image h" />
      </div>


      <div className="mt-[40px]">
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
        <div className=' w-full '>
          <PlacesCarousel />
        </div>
      </div>


    </>
  );
}
