import Image from "next/image"

export default function Footer(){
    return(
        <div>
            <div className="w-full hidden flex-col bg-[#1A1E21] mt-[140px] text-white sm:flex">
                <div className="flex mt-[60px]">
                    <div className="ml-[70px] mr-[75.5px]">
                        <Image src="/images/footer-logo.svg" width={152} height={159.46} alt="logo"/>
                    </div>
                    <div className="mr-[216px] ml-[75.5px]">
                        <div className="flex flex-col">
                            <div className="font-custom text-[24px] font-bold">Explore</div>
                            <div className="mt-[20px] flex justify-between font-custom text-[20px] font-medium">
                                <div className="pr-6">Home</div>
                                <div className="px-6">Committees</div>
                                <div className="px-6">Secretariat</div>
                                <div className="px-6">Gallery</div>
                                <div className="pl-6">FAQs</div>
                            </div>
                            <div>
                                <div className="font-custom text-[24px] font-bold mt-[60px]">Contact us</div>
                                <div className="mt-[20px] flex flex-col font-custom text-[20px] font-medium">
                                    <div>
                                        <a className="flex">
                                            <Image src="/images/location.svg" width={24} height={28.8} alt="location"/>
                                            <p className="pl-[33px]">IIT (BHU), Varanasi, India.</p>
                                        </a>
                                    </div>
                                    <div className="mt-[23.7px]">
                                        <a className="flex">
                                            <Image src="/images/mail.svg" width={24} height={19.2} alt="mail"/>
                                            <p className="pl-[33px]">IIT secretariat@iitbhumun.com</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[216px] mr-[196.42]">
                        <div>
                            <div className="font-custom text-[24px] font-bold">Participation</div>
                            <div>
                                <button className="w-[160px] h-[46px] bg-[#189BA5] text-[18px] font-custom font-medium mt-[20px] text-black rounded-lg">Register</button>
                            </div>
                        </div>
                        <div className="mt-[60px]">
                            <div className="font-custom text-[24px] font-bold mt-[60px]">Follow us</div>
                            <div className="mt-[20px] flex">
                                <a className="mr-[29px]"><Image src="/images/ig.svg" width={24.08} height={24.08}  alt="icons" /></a>
                                <a className="mx-[29px]"><Image src="/images/linkedin.svg" width={24} height={21} alt="icons" /></a>
                                <a className="mx-[29px]"><Image src="/images/twitter.svg" width={28} height={22} alt="icons" /></a>
                                <a className="ml-[29px]"><Image src="/images/medium.svg" width={38.5} height={22} alt="icons" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center my-[14px] font-custom font-normal text-[16px]">
                    © 2023 All Rights Reserved
                </div>
            </div>

            <div className="bg-[#1A1E21] mt-12 text-center text-white font-custom p-4 text-xs sm:hidden">
                Footer-Mobile
            </div>
        </div>
    )
}