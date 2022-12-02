import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Image from "next/image.js";
import CommitteeCircle from "../components/CommitteeCircle.js";
import data from "../data/data.json"

const arr = data.committees;

export default function Committees() {
    return (
        <div className="bg-[#F5F5F5]">
            <NavBar navbar={true} />
            <div className="h-[100vh] sm:justify-center sm:flex hidden">
                <div className="w-1/3 h-[100vh] flex flex-col items-end justify-center">
                    <div className="flex pb-4">
                        <CommitteeCircle
                            key={arr[0].id}
                            src={arr[0].logosrc}
                            title={arr[0].title}
                            data={arr[0].data}
                        />
                        <CommitteeCircle
                            key={arr[1].id}
                            src={arr[1].logosrc}
                            title={arr[1].title}
                            data={arr[1].data}
                        />
                    </div>
                    <div className="flex pt-4">
                        <CommitteeCircle
                            key={arr[2].id}
                            src={arr[2].logosrc}
                            title={arr[2].title}
                            data={arr[2].data}
                        />
                        <CommitteeCircle
                            key={arr[3].id}
                            src={arr[3].logosrc}
                            title={arr[3].title}
                            data={arr[3].data}
                        />
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
                        <CommitteeCircle
                            key={arr[4].id}
                            src={arr[4].logosrc}
                            title={arr[4].title}
                            data={arr[4].data}
                        />
                        <CommitteeCircle
                            key={arr[5].id}
                            src={arr[5].logosrc}
                            title={arr[5].title}
                            data={arr[5].data}
                        />
                    </div>
                    <div className="flex pt-4">
                        <CommitteeCircle
                           key={arr[6].id}
                           src={arr[6].logosrc}
                           title={arr[6].title}
                           data={arr[6].data}
                        />
                        <CommitteeCircle
                           key={arr[7].id}
                           src={arr[7].logosrc}
                           title={arr[7].title}
                           data={arr[7].data}
                        />
                    </div>
                </div>
            </div>
            <div className="sm:hidden w-full flex flex-col items-center pt-24">
                <div className="flex items-center justify-center">
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
                <div className="flex flex-col">
                    <div className="flex justify-around w-full pt-4">
                        <CommitteeCircle
                            key={arr[0].id}
                            src={arr[0].logosrc}
                            title={arr[0].title}
                            data={arr[0].data}
                        />
                        <CommitteeCircle
                            key={arr[1].id}
                            src={arr[1].logosrc}
                            title={arr[1].title}
                            data={arr[1].data}
                        />
                    </div>
                    <div className="flex justify-around w-full pt-4">
                        <CommitteeCircle
                            key={arr[2].id}
                            src={arr[2].logosrc}
                            title={arr[2].title}
                            data={arr[2].data}
                        />
                        <CommitteeCircle
                             key={arr[3].id}
                             src={arr[3].logosrc}
                             title={arr[3].title}
                             data={arr[3].data}
                        />
                    </div>
                    <div className="flex justify-around w-full pt-4">
                        <CommitteeCircle
                            key={arr[4].id}
                            src={arr[4].logosrc}
                            title={arr[4].title}
                            data={arr[4].data}
                        />
                        <CommitteeCircle
                            key={arr[5].id}
                            src={arr[5].logosrc}
                            title={arr[5].title}
                            data={arr[5].data}
                        />
                    </div>
                    <div className="flex justify-around w-full pt-4">
                        <CommitteeCircle
                            key={arr[6].id}
                            src={arr[6].logosrc}
                            title={arr[6].title}
                            data={arr[6].data}
                        />
                        <CommitteeCircle
                            key={arr[7].id}
                            src={arr[7].logosrc}
                            title={arr[7].title}
                            data={arr[7].data}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
