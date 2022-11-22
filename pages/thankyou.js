import { Navbar } from '@material-tailwind/react';
import Footer from '../components/Footer';

export default function Thankyou() {
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      <div className="flex justify-center items-center h-[100vh] w-full text-6xl">
        Thankyou!
      </div>
      <Footer />
    </div>
  );
}
