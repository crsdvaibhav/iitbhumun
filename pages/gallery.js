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

            <div className="flex flex-wrap overflow-y-auto justify-around">
                {data.gallery.map((item) => {
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
        </>
    );
}
