import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Image from "next/image.js";
import CommitteeCircle from "../components/CommitteeCircle.js";

export default function Committees() {
    return (
        <div className="bg-[#F5F5F5]">
            <NavBar navbar={true} />
            <div className="h-[100vh] flex justify-center">
                <div className="w-1/3 h-[100vh] flex flex-col items-end justify-center">
                    <div className="flex pb-4">
                        <CommitteeCircle key={1} src={"/images/ecosoc.svg"} title={"ECOSOC"}/>
                        <CommitteeCircle key={2} src={"/images/unodc.svg"} title={"UNODC"}/>
                    </div>
                    <div className="flex pt-4">
                        <CommitteeCircle key={3} src={"/images/aippm.svg"} title={"AIPPM"}/>
                        <CommitteeCircle key={4} src={"/images/cc.svg"} title={"Crisis"}/>
                    </div>
                </div>

          <div className="w-1/3 h-[100vh] flex items-center justify-center">
            <div className="text-center">
              <Image src="/images/c-logo.svg" width={241} height={253} />
              <div className="font-heading text-[2rem] font-bold pt-4">
                Rise. Speak . Resolve.
              </div>
            </div>
          </div>

                <div className="w-1/3 h-[100vh] flex flex-col items-start justify-center">
                    <div className="flex pb-4">
                        <CommitteeCircle key={5} src={"/images/disec.svg"} title={"DISEC"}/>
                        <CommitteeCircle key={6} src={"/images/uncsw.svg"} title={"UNCSW"}/>
                    </div>
                    <div className="flex pt-4">
                        <CommitteeCircle key={7} src={"/images/wto.svg"} title={"WTO"}/>
                        <CommitteeCircle key={8} src={"/images/ls.svg"} title={"Lok Sabha"}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
