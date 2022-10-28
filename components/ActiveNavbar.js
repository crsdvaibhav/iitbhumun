import Image from "next/image";

export default function ActiveNavbar() {
  return (
    <div className="sticky top-0 z-40 w-full bg-[#F1F1F1] h-[90px] shadow-lg shadow-black">
      <div className="flex justify-between">
        <div className="pl-[70px] py-[11px]">
          <Image
            src="/images/active-nav-log.svg"
            width={64.82}
            height={68}
          />
        </div>
        <div className="flex justify-end py-[22px] pr-[69.5px]">
          <button className="w-[160px] h-[46px] text-black text-[20px] hover:text-[#189BA5]"><a>Home</a></button>
          <button className="w-[160px] h-[46px] text-black text-[20px] hover:text-[#189BA5]"><a>Committees</a></button>
          <button className="w-[160px] h-[46px] text-black text-[20px] hover:text-[#189BA5]"><a>Secretariat</a></button>
          <button className="w-[160px] h-[46px] text-black text-[20px] hover:text-[#189BA5]"><a>Gallery</a></button>
          <button className="w-[160px] h-[46px] text-black text-[20px] hover:text-[#189BA5]"><a>FAQ</a></button>
          <button className="w-[160px] h-[46px] text-white bg-[#1A1E21] rounded-md text-[18px] font-semibold"><a>Register</a></button>
        </div>
      </div>
    </div>
  );
}
