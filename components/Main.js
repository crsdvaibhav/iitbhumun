import Image from "next/image";
import CountdownElement from "./Countdown";
import data from '../data/data.json'

export default function Main(){
    return(
        <div className="w-full mt-[50px]">
            <p className="font-bold font-heading text-center text-[#1A1E21] text-[40px]">
                We will be back in
            </p>
            <CountdownElement/>
            <div className="w-full mt-[176.75px]">
                <p className="font-bold font-heading text-center text-[#1A1E21] text-[40px]">
                    Legacy
                </p>
                <div className="flex justify-center mt-[60px]">
                    <div className="mx-[121px] flex flex-col items-center">
                        <Image src="/images/legacy-circles.svg" width={230} height={230}/>
                        <span className="mt-[4px] text-[20px] font-custom text-[#189BA5] font-medium">Delegates</span>
                    </div>
                    <div className="mx-[121px] flex flex-col items-center">
                        <Image src="/images/legacy-circles.svg" width={230} height={230}/>
                        <span className="mt-[4px] text-[20px] font-custom text-[#189BA5] font-medium">Countries</span>
                    </div>
                    <div className="mx-[121px] flex flex-col items-center">
                        <Image src="/images/legacy-circles.svg" width={230} height={230}/>
                        <span className="mt-[4px] text-[20px] font-custom text-[#189BA5] font-medium">Conferences</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="mt-[60px] h-[301px] w-[1174px] text-[#03001E] text-[20px] font-medium font-custom text-justify">
                        {data.legacyText}
                    </p>
                </div>
            </div>
            <div>
                <p className="font-bold font-heading text-center text-[#1A1E21] text-[40px]">
                    About us
                </p>
                <div className="flex justify-center mt-[60px]">
                    <p className="h-[301px] w-[1174px] text-[#03001E] text-[20px] font-medium font-custom text-justify">
                        {data.legacyText}
                        <br/>
                        <span className="text-[#189BA5] underline mt-2"><a>Meet our secretariat!</a></span>
                    </p>
                </div>
            </div>
        </div>
    )
}