import Image from "next/image";
import Link from "next/link"

export default function ActiveNavbar() {
  return (
    <div className="sticky top-0 z-40 w-full bg-[#F1F1F1] sm:h-[5.625rem] shadow-xl shadow-[#F1F1F1]/50">
      <div className="sm:flex justify-between hidden">
        <div className="pl-[4.375rem] py-[0.688rem]">
          <Image
            src="/images/active-nav-log.svg"
            width={64.82}
            height={68}
            alt="active-nav-logo"
          />
        </div>
        <div className="flex justify-end py-[1.375rem] pr-[4.344rem]">
          <Link href="home">
            <button className="w-[10rem] h-[2.875rem] text-black text-[1.25rem] hover:text-[#189BA5]"><a>Home</a></button>
          </Link>
          <button className="w-[10rem] h-[2.875rem] text-black text-[1.25rem] hover:text-[#189BA5]"><a>Committees</a></button>
          <button className="w-[10rem] h-[2.875rem] text-black text-[1.25rem] hover:text-[#189BA5]"><a>Secretariat</a></button>
          <button className="w-[10rem] h-[2.875rem] text-black text-[1.25rem] hover:text-[#189BA5]"><a>Gallery</a></button>
          <button className="w-[10rem] h-[2.875rem] text-black text-[1.25rem] hover:text-[#189BA5]"><a>FAQ</a></button>
          <Link href="register"><button className="w-[10rem] h-[2.875rem] text-white bg-[#1A1E21] rounded-md text-[18px] font-semibold"><a>Register</a></button></Link>
        </div>
      </div>

      <div className="sm:hidden flex items-center justify-between px-2 py-2">
          <div>
            <Image src="/images/mobile-actinav.svg" width={52} height={20} alt="mobile-actinav"/>
          </div>
          <div className="ml-12">
            <Image src="/images/mobile-activenav-logo.svg" width={52} height={54.45} alt="mobile-activenav-logo"/>
          </div>
          <div>
            <Link href="register">
                <button className="py-2 px-[1.5rem] text-xs font-custom font-semibold text-white bg-[#189BA5] rounded-lg"><a>Register</a></button>
            </Link>
          </div>
      </div>
    </div>
  );
}
