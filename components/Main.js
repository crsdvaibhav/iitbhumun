import Image from "next/image";
import CountdownElement from "./Countdown";
import data from '../data/data.json'
import Card from '../components/TestimonialCard'
import SponsorCard from '../components/SponsorCard'

export default function Main(){
    return(
        <div className="w-full pt-[50px] bg-[#F5F5F5]">
            <p className="font-bold font-heading text-center text-[#1A1E21] text-[40px]">
                We will be back in
            </p>
            <CountdownElement/>
            <div className="w-full mt-[146.75px]">
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
                <div className="h-[241px] flex justify-center">
                    <p className="mt-[60px] w-[1174px] text-[#03001E] text-[20px] font-medium font-custom text-justify">
                        {data.legacyText}
                    </p>
                </div>
            </div>
            <div className="mt-[140px]">
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
            <div className="mt-[140px]">
                <p className="font-bold font-heading text-center text-[#1A1E21] text-[40px]">
                    Testimonials
                </p>
                <div className="flex justify-center mt-[60px]">
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
                <p className="font-bold font-heading text-center text-[#1A1E21] text-[40px]">
                    Previous collaborators
                </p>
                <div className="mt-[60px] flex justify-center">
                    <div className="flex flex-col items-center mx-[83px]">
                        <Image src="/images/colab-1.svg" width={469.48} height={166}/>
                        <span className="font-custom text-[20px] text-[#189BA5] font-medium mt-4">UNESCO (INCCU)</span>
                    </div>
                    <div className="flex flex-col items-center mx-[83px]">
                        <Image src="/images/colab-2.svg" width={199.06} height={166}/>
                        <span className="font-custom text-[20px] text-[#189BA5] font-medium mt-4 text-center">UN information Centre for<br/>India and Bhutan</span>
                    </div>
                    <div className="flex flex-col items-center mx-[83px]">
                        <Image src="/images/colab-3.svg" width={469.4} height={166}/>
                        <span className="font-custom text-[20px] text-[#189BA5] font-medium mt-4">MUN Refugee Challenge</span>
                    </div>
                </div>
            </div>
            <div className="mt-[140px]">
                <p className="font-bold font-heading text-center text-[#1A1E21] text-[40px]">
                    Previous sponsors
                </p>
                <div className="flex flex-wrap relative justify-center mt-[43.8px]">
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