import ImageCard from "../components/ImageCard";
import data from "../data/data.json";
import Navbar from "../components/Navbar";
import Image from "next/image";
import ImageSlider from "../components/ImageSlider";

export default function NavBar() {
  const slides = [
    { source: "/images/mun1.jpg", title: "kvt" },
    { source: "/images/mun2.jpg", title: "kvt" },
    { source: "/images/MUN-260.jpg", title: "kvt" },
    { source: "/images/mun4.jpg", title: "kvt" },
    { source: "/images/MUN-261.jpg", title: "kvt" },
    { source: "/images/mun6.jpg", title: "kvt" },
    { source: "/images/MUN-192.jpg", title: "kvt" },
    { source: "/images/MUN-30.jpg", title: "kvt" },
    { source: "/images/MUN-250.jpg", title: "kvt" },
  ];
  const placesToVisit = [
    { source: "/images/kvt.webp", title: "kvt" },
    { source: "/images/dashashwamedh_ghat.jpg", title: "kvt" },
    { source: "/images/assi_ghat.jpg", title: "kvt" },
    { source: "/images/manikarnika_ghat.jpg", title: "kvt" },
    { source: "/images/Panchganga-Ghat.jpg", title: "kvt" },
    { source: "/images/sarnath.jpg", title: "kvt" },
  ];

  const containerStyles = {
    width: "545px",
    height: "213px",
    margin: "50px auto",
    marginBottom: "125px",
  };

  return (
    <>
      <Navbar navbar={true} />
      <div>
        <Image width={3000} height={660} src="/images/Mun.webp" alt="image h" />
      </div>


      {/* <div >
                
                <div className="flex flex-wrap overflow-y-auto justify-around">
                {data.pastExperiences.map((item) => {
                    return (
                        <ImageCard
                            key={item.id}
                            id={item.id}
                            src={item.src}
                            title={item.title}
                        />
                    )
                })}
            </div>
            </div> */}

      <div className="mt-[40px]">
        <div className="bold text-center font-extrabold text-4xl">
          PAST EXPERIENCE
        </div>
        <div className="flex flex-wrap justify-around w-full">
          <div className="w-[900px] h-[300px] sm:h-[500px] mt-[1.5rem] ">
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="bold text-center font-extrabold text-4xl">
          PLACES TO VISIT IN VARANASI
        </div>
        <div className="flex flex-wrap justify-around w-full">
          <div className="w-[900px] h-[300px] sm:h-[500px] mt-[40px] ">
            <ImageSlider slides={placesToVisit} />
          </div>
        </div>
      </div>

      {/* <div className="mt-[40px]">
        <div className="bold text-center font-extrabold text-4xl">
          PLACES TO VISIT IN KASHI
        </div>
        <div className="flex flex-wrap overflow-y-auto justify-around">
          <div className="w-[900px] h-[300px] sm:h-[500px] mt-[20px]">
            <ImageSlider slides={placesToVisit} />
          </div>
        </div>
      </div> */}
    </>
  );
}
