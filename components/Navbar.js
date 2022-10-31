import Image from "next/image";

export default function NavBar() {
  return (
    <div className="absolute top-0 w-full sm:h-[90px] backdrop-opacity-0 z-30 font-medium pt-8 sm:py-[22px] pl-4 sm:pr-[69.5px]">
      <div className="justify-end hidden sm:flex">
        <button className="w-[160px] h-[46px] text-white text-[20px]"><a>Home</a></button>
        <button className="w-[160px] h-[46px] text-white text-[20px]"><a>Committees</a></button>
        <button className="w-[160px] h-[46px] text-white text-[20px]"><a>Secretariat</a></button>
        <button className="w-[160px] h-[46px] text-white text-[20px]"><a>Gallery</a></button>
        <button className="w-[160px] h-[46px] text-white text-[20px]"><a>FAQ</a></button>
        <button className="w-[160px] h-[46px] text-black bg-[#F5CE3F] rounded-md text-[18px] font-semibold"><a>Register</a></button>
      </div>
      <div className="sm:hidden">
        <Image src="/images/mobile-nav.svg" width={52} height={20} alt="mobile-nav"/>
      </div>
    </div>
  );
}
