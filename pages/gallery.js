import ImageCard from "../components/ImageCard";
import data from "../data/data.json"
import Navbar from "../components/Navbar"

export default function NavBar() {

    return (
        <>
            <Navbar navbar={true} />
            <div className="h-70 w-full">
                <img src="/images/Rectangle 468.png" alt="image h" />
            </div>

            <div className="flex flex-wrap overflow-y-auto">
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
