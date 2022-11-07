import Footer from "../components/Footer";
import ActiveNavbar from "../components/ActiveNavbar";


export default function Thankyou() {
    return (
        <div className="bg-[#F5F5F5]">
            <ActiveNavbar />
            <div className="flex justify-center items-center h-[100vh] w-full text-6xl">
                Thankyou!
            </div>
            <Footer />
        </div>
    );
}
