import ImageCard from "../components/ImageCard";
import data from "../data/data.json"
import Navbar from "../components/Navbar"
import Image from 'next/image';

export default function NavBar() {

    return (
        <>
            <Navbar navbar={true} />
            <div>
                <Image
                    width={1688}
                    height={660}
                    src="/images/Mun.webp"
                    alt="image h" />
            </div>

            <div >
                <div className="bold text-center font-extrabold text-4xl mt-10">PAST OFFLINE EDITIONS</div>
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
            </div>

            <div >
                <div className="bold text-center font-extrabold text-4xl mt-10">PLACES TO VISIT IN VARANASI.</div>
                <div className="flex flex-wrap overflow-y-auto justify-around">
                    {data.placesToVisit.map((item) => {
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
            </div>
        </>
    );
}
