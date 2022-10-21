import Image from "next/image"

export default function Hero(){
    return(
        <div className="w-full h-[100vh] relative">
            <div className="absolute top-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    width={1920}
                    height={1080}
                />
            </div>
            <div className="absolute top-0 opacity-80 z-10">
                <Image
                    src="/images/hero-filter.png"
                    width={1920}
                    height={1080}
                />
            </div>
            <div className="absolute top-1/4 left-1/4 z-20">
                <div className="flex items-center justify-center">
                    <Image
                        src="/images/hero-logo.svg"
                        width={688.71}
                        height={284}
                    />
                </div>
            </div>
            <div className="absolute top-[630px] left-1/2 z-20">
                <Image
                    src="/images/hero-scroll.svg"
                    width={33.95}
                    height={64.61}
                />
            </div>
        </div>
    )
}