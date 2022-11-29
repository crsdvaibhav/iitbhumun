import { useState } from "react";
import Card from "../components/Card";
import Link from "next/link";

export default function ImageCard(props) {
    const [data, setData] = useState({ id: 0 });

    const handleClick = () => {
        setData({ id: props.id });

    };

    return (
        <>
            <Card id={data.id} />
            <div>
                <button id="myBtn" onClick={handleClick}>
                    <div className="mr-0 ml-20 mt-20">
                        <img
                            className="h-[12.5rem] w-[20rem] hover:border-4 border-violet-700"
                            src={props.src}
                            alt="image h"
                        />
                        <p className="relative top-0">{props.title}</p>
                    </div>
                </button>
            </div>
        </>
    );
}
