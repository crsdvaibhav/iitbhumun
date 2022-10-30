import Image from "next/image";
import CountdownElement from "./Countdown";
import data from '../data/data.json'
import Card from '../components/TestimonialCard'
import SponsorCard from '../components/SponsorCard'

export default function Main(){
    return(
        <div className="w-full pt-[50px] bg-[#F5F5F5]">
            <p className="font-bold font-heading text-center text-[#1A1E21] text-[46px] sm:text-[40px]">
                We will be back in
            </p>
            <div className="hidden sm:block">
                <CountdownElement/>
            </div>
            <div className="w-full mt-[140px]">
                <p className="font-bold font-heading text-center text-[#1A1E21] text-[46px] sm:text-[40px]">
                    Legacy
                </p>
                <div className="sm:flex justify-center mt-[60px] hidden">
                    <div className="mr-[62.5px] sm:mx-[121px] flex flex-col items-center">
                        <Image src="/images/legacy-circles.svg" width={230} height={230} alt="legacy"/>
                        <span className="mt-[4px] text-[28px] sm:text-[20px] font-custom text-[#189BA5] sm:font-medium font-semibold">Delegates</span>
                    </div>
                    <div className="mx-[62.5px] sm:mx-[121px] flex flex-col items-center">
                        <Image src="/images/legacy-circles.svg" width={230} height={230} alt="legacy"/>
                        <span className="mt-[4px] text-[28px] sm:text-[20px] font-custom text-[#189BA5] sm:font-medium font-semibold">Countries</span>
                    </div>
                    <div className="ml-[62.5px] sm:mx-[121px] flex flex-col items-center">
                        <Image src="/images/legacy-circles.svg" width={230} height={230} alt="legacy"/>
                        <span className="mt-[4px] text-[28px] sm:text-[20px] font-custom text-[#189BA5] sm:font-medium font-semibold">Conferences</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="mt-[60px] w-[940px] sm:w-[1174px] text-[#03001E] text-[30px] sm:text-[20px] font-medium font-custom text-justify">
                        {data.legacyText}
                    </p>
                </div>
            </div>
            <div className="mt-[140px]">
                <p className="font-bold font-heading text-center text-[#1A1E21] text-[46px] sm:text-[40px]">
                    About us
                </p>
                <div className="flex justify-center mt-[60px]">
                    <p className="w-[940px] sm:w-[1174px] text-[#03001E] text-[30px] sm:text-[20px] font-medium font-custom text-justify">
                        {data.legacyText}
                        <br/>
                        <span className="text-[#189BA5] underline mt-2"><a>Meet our secretariat!</a></span>
                    </p>
                </div>
            </div>
            <div className="mt-[140px]">
                <p className="font-bold font-heading text-center text-[#1A1E21] text-[46px] sm:text-[40px]">
                    Testimonials
                </p>
                <div className="flex justify-center mt-[60px] overflow-x-scroll">
                    {data.testimonials.map((item)=>{
                        return(
                            <Card
                                key={item.id}
                                name={item.name}
                                designation={item.designation}
                                review={item.review}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="mt-[140px]">
                <p className="font-bold font-heading text-center text-[#1A1E21] text-[46px] sm:text-[40px]">
                    Previous collaborators
                </p>
                <div className="mt-[60px] sm:flex justify-center hidden">
                    <div className="flex flex-col items-center mx-[83px]">
                        <Image src="/images/colab-1.svg" width={469.48} height={166} alt="collaborators"/>
                        <span className="font-custom text-[20px] text-[#189BA5] font-medium mt-4">UNESCO (INCCU)</span>
                    </div>
                    <div className="flex flex-col items-center mx-[83px]">
                        <Image src="/images/colab-2.svg" width={199.06} height={166} alt="collaborators"/>
                        <span className="font-custom text-[20px] text-[#189BA5] font-medium mt-4 text-center">UN information Centre for<br/>India and Bhutan</span>
                    </div>
                    <div className="flex flex-col items-center mx-[83px]">
                        <Image src="/images/colab-3.svg" width={469.4} height={166} alt="collaborators"/>
                        <span className="font-custom text-[20px] text-[#189BA5] font-medium mt-4">MUN Refugee Challenge</span>
                    </div>
                </div>
                <div className="sm:hidden">
                    <Image src="/images/mobile-collaborators.svg" width={1080} height={100} alt="mobile-collaborators"/>
                    <div className="flex justify-around">
                        <div className="font-custom font-semibold text-[28px] text-[#189BA5]">UNESCO (INCCU</div>
                        <div className="font-custom font-semibold text-[28px] text-[#189BA5]">UN information Centre <br/>for India and Bhutan</div>
                        <div className="font-custom font-semibold text-[28px] text-[#189BA5]">MUN Refugee <br/>Challenge</div>
                    </div>
                </div>
            </div>
            <div className="mt-[140px]">
                <p className="font-bold font-heading text-center text-[#1A1E21] text-[46px] sm:text-[40px]">
                    Previous sponsors
                </p>
                <div className="flex sm:flex-wrap relative justify-center mt-[43.8px] overflow-x-scroll sm:overflow-hidden">
                    {data.sponsors.map((item)=>{
                        return(
                            <SponsorCard
                                key={item.id}
                                src={item.src}
                                height={item.height}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}