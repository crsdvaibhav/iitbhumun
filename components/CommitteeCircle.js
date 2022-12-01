import Image from "next/image";
import { useState } from "react";

export default function CommitteeCircle(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const Modal = () => {
        return (
            <div
                className={
                    open
                        ? "absolute w-[74vw] h-[80vh] top-[10vh] bottom-[10vh] left-[13vw] right-[13vw] block z-20 bg-[#F1F1F1] rounded-lg shadow-xl shadow-black/10"
                        : "hidden"
                }
            >
                <div className="w-full flex">
                    <div className="w-1/4 h-[80vh] border-r-[1px] border-black flex flex-col justify-center items-center">
                        <Image
                            src={props.src}
                            width={183}
                            height={132.17}
                        />
                        <div className="font-bold font-sans text-[2rem] text-[#189BA5]">
                            {props.title}
                        </div>
                    </div>
                    <div className="w-3/4 h-full flex flex-col">
                        <div className="w-full flex justify-end">
                            <button onClick={handleClose} className="bg-red-900 text-white font-bold text-xl h-8 w-8 rounded-full">X</button>
                        </div>
                        <div className="h-full">
                            <div className="font-custom text-[1.25rem] font-medium px-4 py-4">The Crisis Committee is an ad-hoc simulation on offer in IITBHU Model United Nations Conference 2022. Further information on this committee will be communicated closer to the conference dates. Delegates with prior MUN experience will be preferred for this committee</div>
                            <div className="font-heading font-bold text-[2rem] text-center py-4">EXECUTIVE BOARD</div>
                            <div className="flex justify-around py-2">
                                <div className="font-custom flex flex-col items-center">
                                    <div className="h-40 w-40 rounded-full border-2 border-black"></div>
                                    <div className="font-bold text-[1.5rem]">Aditya Sharma</div>
                                    <div className="text-[1.25rem] font-medium">Chair</div>
                                </div>
                                <div className="font-custom flex flex-col items-center">
                                    <div className="h-40 w-40 rounded-full border-2 border-black"></div>
                                    <div className="font-bold text-[1.5rem]">Aravind Y Belur</div>
                                    <div className="text-[1.25rem] font-medium">Vice Chair</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <button
                onClick={handleOpen}
                className="mx-2 w-[11.313rem] h-[11.313rem] rounded-full shadow-[#189BA5]/20 shadow-xl top-[12.5rem] left-[9.836rem] bg-white"
            >
                <div className="flex flex-col items-center">
                    <div className="pt-[1.688rem]">
                        <Image
                            src={props.src}
                            width={114}
                            height={95}
                        />
                    </div>
                    <div className="font-bold font-sans text-[1.2rem] text-[#189BA5]">
                        {props.title}
                    </div>
                </div>
            </button>
            <Modal />
        </div>
    );
}
