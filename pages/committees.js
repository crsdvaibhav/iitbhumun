import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Image from "next/image.js";
import {
	Popover,
	PopoverHandler,
	PopoverContent,
  } from "@material-tailwind/react";

export default function Committees() {
    return (
        <div className="bg-[#F5F5F5]">
            <NavBar navbar={true} />
            <div className="h-[100vh] flex justify-center">
                <div className="w-1/3 h-[100vh] flex flex-col items-end justify-center">
                    <div className="flex pb-4">
                        <div className="mr-4 w-[11.313rem] h-[11.313rem] rounded-full shadow-[#189BA5]/20 shadow-xl top-[12.5rem] left-[9.836rem] bg-white">
                            <div className="flex flex-col items-center">
                                <div className="pt-[1.688rem]">
                                    <Image
                                        src="/images/ecosoc.svg"
                                        width={114}
                                        height={95}
                                    />
                                </div>
                                <div className="font-bold font-sans text-[1.2rem] text-[#189BA5]">
                                    ECOSOC
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 w-[11.313rem] h-[11.313rem] rounded-full shadow-[#189BA5]/20 shadow-xl top-[25.5rem] left-[17.836rem] bg-white">
                            <div className="flex flex-col items-center">
                                <div className="pt-[1.688rem]">
                                    <Image
                                        src="/images/unodc.svg"
                                        width={114}
                                        height={95}
                                    />
                                </div>
                                <div className="font-bold font-sans text-[1.2rem] text-[#189BA5]">
                                    UNODC
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex pt-4">
                        <div className="mr-4 w-[11.313rem] h-[11.313rem] rounded-full shadow-[#189BA5]/20 shadow-xl top-[35.875rem] left-[29.398rem] bg-white">
                            <div className="flex flex-col items-center">
                                <div className="pt-[1.688rem]">
                                    <Image
                                        src="/images/aippm.svg"
                                        width={114}
                                        height={95}
                                    />
                                </div>
                                <div className="font-bold font-sans text-[1.2rem] text-[#189BA5]">
                                    AIPPM
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 w-[11.313rem] h-[11.313rem] rounded-full shadow-[#189BA5]/20 shadow-xl top-[42.563rem] left-[45.336rem] bg-white">
                            <div className="flex flex-col items-center">
                                <div className="pt-[1.688rem]">
                                    <Image
                                        src="/images/cc.svg"
                                        width={126}
                                        height={90}
                                    />
                                </div>
                                <div className="font-bold font-sans text-[0.8rem] text-[#189BA5] text-center">
                                    Crisis<br></br>Committee
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/3 h-[100vh] flex items-center justify-center">
                    <div className="text-center">
                        <Image
                            src="/images/c-logo.svg"
                            width={241}
                            height={253}
                        />
                        <div className="font-heading text-[2rem] font-bold pt-4">
                            Rise. Speak . Resolve.
                        </div>
                    </div>
                </div>

                <div className="w-1/3 h-[100vh] flex flex-col items-start justify-center">
                    <div className="flex pb-4">
                        <div className="mr-4 w-[11.313rem] h-[11.313rem] rounded-full shadow-[#189BA5]/20 shadow-xl top-[42.563rem] left-[63.461rem] bg-white">
                            <div className="flex flex-col items-center">
                                <div className="pt-[1.688rem]">
                                    <Image
                                        src="/images/disec.svg"
                                        width={114}
                                        height={95}
                                    />
                                </div>
                                <div className="font-bold font-sans text-[1.2rem] text-[#189BA5]">
                                    DISEC
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 w-[11.313rem] h-[11.313rem] rounded-full shadow-[#189BA5]/20 shadow-xl top-[42.563rem] left-[63.461rem] bg-white">
                            <div className="flex flex-col items-center">
                                <div className="pt-[1.688rem]">
                                    <Image
                                        src="/images/uncsw.svg"
                                        width={114}
                                        height={95}
                                    />
                                </div>
                                <div className="font-bold font-sans text-[1.2rem] text-[#189BA5]">
                                    UNCSW
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex pt-4">
                        <div className="mr-4 w-[11.313rem] h-[11.313rem] rounded-full shadow-[#189BA5]/20 shadow-xl top-[42.563rem] left-[63.461rem] bg-white">
                            <div className="flex flex-col items-center">
                                <div className="pt-[1.688rem]">
                                    <Image
                                        src="/images/wto.svg"
                                        width={114}
                                        height={95}
                                    />
                                </div>
                                <div className="font-bold font-sans text-[1.2rem] text-[#189BA5]">
                                    WTO
                                </div>
                            </div>
                        </div>
                        <div className="ml-4 w-[11.313rem] h-[11.313rem] rounded-full shadow-[#189BA5]/20 shadow-xl top-[42.563rem] left-[63.461rem] bg-white">
                            <div className="flex flex-col items-center">
                                <div className="pt-[1.688rem]">
                                    <Image
                                        src="/images/ls.svg"
                                        width={114}
                                        height={95}
                                    />
                                </div>
                                <div className="font-bold font-sans text-[1rem] text-[#189BA5]">
                                    Lok Sabha
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
