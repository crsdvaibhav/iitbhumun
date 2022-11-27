
import Footer from '../components/Footer';

export default function Thankyou() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="place-items-center flex justify-center font-semibold text-center py-12">
        <div className="text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full ">
          1
        </div>
        <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
        <div className="text-3xl hover:text-[#FFFFFF] justify-center hover:bg-[#1A1E21] bg-[#FFFFFF] w-10 h-10   border-2 border-[#1A1E21] rounded-full  ">
          2
        </div>
        <div className="w-40 mx-2 border h-0 justify-center border-[#1A1E21] my-6"></div>
        <div className="text-3xl text-[#FFFFFF] justify-center bg-[#1A1E21] w-10 h-10   border-2 border-[#1A1E21] rounded-full   ">
          3
        </div>
      </div>
      <div className="flex justify-center items-center h-[100vh] w-full text-6xl">
        Thankyou!
        You have successfully registered !!
        The secretariat will get back to you in 5 days, if not then contact on given email ids.
      </div>
      <Footer />
    </div>
  );
}
