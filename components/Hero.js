import Image from "next/image";

export default function Hero() {
    return (
      <div>
        <div className="sm:grid hidden">
            <div className="row-span-full col-span-full">
                <Image
                    src="/images/hero-bg.png"
                    width={1920}
                    height={1080}
                    layout="responsive"
                />
            </div>
            <div className="row-span-full col-span-full">
                <Image
                    src="/images/hero-filter.png"
                    width={1920}
                    height={1080}
                    layout="responsive"
                />
            </div>
            <div className="row-span-full col-span-full self-center text-center">
                <Image
                    src="/images/hero-logo.svg"
                    width={688.71}
                    height={284}
                />
            </div>
            <div className="row-span-full col-span-full self-end text-center pb-4">
                <Image
                    src="/images/hero-scroll.svg"
                    width={33.95}
                    height={64.61}
                />
            </div>
        </div>
        <div className="grid sm:hidden">
            <div className="row-span-full col-span-full">
                <Image
                    src="/images/mobile-hero-bg.png"
                    width={1079}
                    height={2318}
                    layout="responsive"
                />
            </div>
            <div className="row-span-full col-span-full">
                <Image
                    src="/images/hero-filter.png"
                    width={1079}
                    height={2318}
                    layout="responsive"
                />
            </div>
            <div className="row-span-full col-span-full self-center text-center">
                <Image
                    src="/images/hero-logo.svg"
                    width={812}
                    height={334.84}
                />
            </div>
            <div className="row-span-full col-span-full self-end text-center pb-4">
                <Image
                    src="/images/hero-scroll.svg"
                    width={33.95}
                    height={64.61}
                />
            </div>
        </div>
      </div>
    );
}
