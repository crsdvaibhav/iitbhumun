import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="absolute top-0 w-full sm:h-[5.625rem] backdrop-opacity-0 z-30 font-medium pt-8 sm:py-[1.375rem] pl-4 sm:pr-[4.344rem]">
      <div className="justify-end hidden sm:flex">
        <Link href="home">
          <button className="w-[10rem] h-[2.875rem] text-white text-[1.25rem]"><a>Home</a></button>
        </Link>
        <button className="w-[10rem] h-[2.875rem] text-white text-[1.25rem]"><a>Committees</a></button>
        <button className="w-[10rem] h-[2.875rem] text-white text-[1.25rem]"><a>Secretariat</a></button>
        <button className="w-[10rem] h-[2.875rem] text-white text-[1.25rem]"><a>Gallery</a></button>
        <button className="w-[10rem] h-[2.875rem] text-white text-[1.25rem]"><a>FAQ</a></button>
        <Link href="register"><button className="w-[10rem] h-[2.875rem] text-black bg-[#F5CE3F] rounded-md text-[1.125rem] font-semibold"><a>Register</a></button></Link>
      </div>
      <div className="sm:hidden">
        <Image src="/images/mobile-nav.svg" width={52} height={20} alt="mobile-nav"/>
      </div>
    </div>
  );
}
