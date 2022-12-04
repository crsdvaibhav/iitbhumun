import { useState } from "react";
import Card from "../components/Card";
import Image from 'next/image'

export default function ImageCard(props) {
    const [data, setData] = useState({ id: 0 });
    const [state,setState] = useState(false);

    const handleClick = () => {
        setData({ id: props.id });
        setState(true);
    };

    return (
        <>
            {/* <Card id={data.id} open = {state}/> */}
            <div>
                <button id="myBtn" onClick={handleClick} className="mt-20 mb-10">
                    <div className="">
                        <Image
                            height={190}
                            width={305}
                            src={props.src}
                            alt="This is an image."
                        />
                        <p className="relative top-0 font-bold text-lg">{props.title}</p>
                    </div>
                </button>
            </div>
        </>
    );
}
