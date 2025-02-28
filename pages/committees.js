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
            <div className="h-[70vh] sm:justify-center sm:flex hidden">
                <div className="w-1/3 h-[80vh] flex flex-col items-end justify-center">
                    <div className="flex pb-4">
                        <CommitteeCircle
                            key={arr[0].id}
                            src={arr[0].logosrc}
                            title={arr[0].title}
                            data={arr[0].data}
                            chair={arr[0].chair}
                            vicechair={arr[0].vicechair}
                            agenda={arr[0].agenda}
                            chairsrc={arr[0].chairsrc}
                            vicechairsrc={arr[0].vicechairsrc}
                            href={arr[0].href}
                        />
                        <CommitteeCircle
                            key={arr[1].id}
                            src={arr[1].logosrc}
                            title={arr[1].title}
                            data={arr[1].data}
                            chair={arr[1].chair}
                            vicechair={arr[1].vicechair}
                            agenda={arr[1].agenda}
                            chairsrc={arr[1].chairsrc}
                            vicechairsrc={arr[1].vicechairsrc}
                            href={arr[1].href}

                        />
                    </div>
                    <div className="flex pt-4">
                        <CommitteeCircle
                            key={arr[2].id}
                            src={arr[2].logosrc}
                            title={arr[2].title}
                            data={arr[2].data}
                            chair={arr[2].chair}
                            vicechair={arr[2].vicechair}
                            agenda={arr[2].agenda}
                            chairsrc={arr[2].chairsrc}
                            vicechairsrc={arr[2].vicechairsrc}
                            href={arr[2].href}

                        />
                        <CommitteeCircle
                            key={arr[3].id}
                            src={arr[3].logosrc}
                            title={arr[3].title}
                            data={arr[3].data}
                            chair={arr[3].chair}
                            vicechair={arr[3].vicechair}
                            agenda={arr[3].agenda}
                            chairsrc={arr[3].chairsrc}
                            vicechairsrc={arr[3].vicechairsrc}
                            href={arr[3].href}

                        />
                    </div>
                </div>

                <div className="w-1/3 h-[80vh] flex items-center justify-center">
                    <div className="text-center">
                        <Image
                            src="/images/c-logo.svg"
                            width={241}
                            height={253}
                        />
                        <div className="font-heading text-[2rem] font-bold pt-4">
                            Rise. Speak. Resolve.
                        </div>
                    </div>
                </div>

                <div className="w-1/3 h-[80vh] flex flex-col items-start justify-center">
                    <div className="flex pb-4">
                        <CommitteeCircle
                            key={arr[4].id}
                            src={arr[4].logosrc}
                            title={arr[4].title}
                            data={arr[4].data}
                            chair={arr[4].chair}
                            vicechair={arr[4].vicechair}
                            agenda={arr[4].agenda}
                            chairsrc={arr[4].chairsrc}
                            vicechairsrc={arr[4].vicechairsrc}
                            href={arr[4].href}

                        />
                        <CommitteeCircle
                            key={arr[5].id}
                            src={arr[5].logosrc}
                            title={arr[5].title}
                            data={arr[5].data}
                            chair={arr[5].chair}
                            vicechair={arr[5].vicechair}
                            agenda={arr[5].agenda}
                            chairsrc={arr[5].chairsrc}
                            vicechairsrc={arr[5].vicechairsrc}
                            href={arr[5].href}

                        />
                    </div>
                    <div className="flex pt-4">
                        <CommitteeCircle
                            key={arr[6].id}
                            src={arr[6].logosrc}
                            title={arr[6].title}
                            data={arr[6].data}
                            chair={arr[6].chair}
                            vicechair={arr[6].vicechair}
                            agenda={arr[6].agenda}
                            chairsrc={arr[6].chairsrc}
                            vicechairsrc={arr[6].vicechairsrc}
                            href={arr[6].href}

                        />
                        <CommitteeCircle
                            key={arr[7].id}
                            src={arr[7].logosrc}
                            title={arr[7].title}
                            data={arr[7].data}
                            chair={arr[7].chair}
                            vicechair={arr[7].vicechair}
                            agenda={arr[7].agenda}
                            chairsrc={arr[7].chairsrc}
                            vicechairsrc={arr[7].vicechairsrc}
                            href={arr[7].href}

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
                            chair={arr[0].chair}
                            vicechair={arr[0].vicechair}
                            agenda={arr[0].agenda}
                            chairsrc={arr[0].chairsrc}
                            vicechairsrc={arr[0].vicechairsrc}
                            href={arr[0].href}

                        />
                        <CommitteeCircle
                            key={arr[1].id}
                            src={arr[1].logosrc}
                            title={arr[1].title}
                            data={arr[1].data}
                            chair={arr[1].chair}
                            vicechair={arr[1].vicechair}
                            agenda={arr[1].agenda}
                            chairsrc={arr[1].chairsrc}
                            vicechairsrc={arr[1].vicechairsrc}
                            href={arr[1].href}

                        />
                    </div>
                    <div className="flex justify-around w-full pt-4">
                        <CommitteeCircle
                            key={arr[2].id}
                            src={arr[2].logosrc}
                            title={arr[2].title}
                            data={arr[2].data}
                            chair={arr[2].chair}
                            vicechair={arr[2].vicechair}
                            agenda={arr[2].agenda}
                            chairsrc={arr[2].chairsrc}
                            vicechairsrc={arr[2].vicechairsrc}
                            href={arr[2].href}

                        />
                        <CommitteeCircle
                            key={arr[3].id}
                            src={arr[3].logosrc}
                            title={arr[3].title}
                            data={arr[3].data}
                            chair={arr[3].chair}
                            vicechair={arr[3].vicechair}
                            agenda={arr[3].agenda}
                            chairsrc={arr[3].chairsrc}
                            vicechairsrc={arr[3].vicechairsrc}
                            href={arr[3].href}

                        />
                    </div>
                    <div className="flex justify-around w-full pt-4">
                        <CommitteeCircle
                            key={arr[4].id}
                            src={arr[4].logosrc}
                            title={arr[4].title}
                            data={arr[4].data}
                            chair={arr[4].chair}
                            vicechair={arr[4].vicechair}
                            agenda={arr[4].agenda}
                            chairsrc={arr[4].chairsrc}
                            vicechairsrc={arr[4].vicechairsrc}
                            href={arr[4].href}

                        />
                        <CommitteeCircle
                            key={arr[5].id}
                            src={arr[5].logosrc}
                            title={arr[5].title}
                            data={arr[5].data}
                            chair={arr[5].chair}
                            vicechair={arr[5].vicechair}
                            agenda={arr[5].agenda}
                            chairsrc={arr[5].chairsrc}
                            vicechairsrc={arr[5].vicechairsrc}
                            href={arr[5].href}

                        />
                    </div>
                    <div className="flex justify-around w-full pt-4">
                        <CommitteeCircle
                            key={arr[6].id}
                            src={arr[6].logosrc}
                            title={arr[6].title}
                            data={arr[6].data}
                            chair={arr[6].chair}
                            vicechair={arr[6].vicechair}
                            agenda={arr[6].agenda}
                            chairsrc={arr[6].chairsrc}
                            vicechairsrc={arr[6].vicechairsrc}
                            href={arr[6].href}

                        />
                        <CommitteeCircle
                            key={arr[7].id}
                            src={arr[7].logosrc}
                            title={arr[7].title}
                            data={arr[7].data}
                            chair={arr[7].chair}
                            vicechair={arr[7].vicechair}
                            agenda={arr[7].agenda}
                            chairsrc={arr[7].chairsrc}
                            vicechairsrc={arr[7].vicechairsrc}
                            href={arr[7].href}

                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
