import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useState } from 'react';
import CloseReg from './CloseReg';


export default function NavBar({ navbar }) {

  const [closeReg, setCloseReg] = useState(true);
  const handleChange = () => {
    setCloseReg(false);
  }
  return (
    <div
      className={`fixed w-full z-30 font-medium text-white sm:py-2 ${navbar
        ? 'bg-[#F1F1F1] shadow-lg border-b 2xl:shadow-[#F1F1F1]/50 shadow-[#F1F1F1]/50 text-black'
        : ''
        }`}
    >
      <div className="hidden sm:flex flex-row items-center justify-between mx-16">
        <Image
          src="/images/active-nav-log.svg"
          width={50}
          height={50}
          alt="active-nav-logo"
        />
        <div className="justify-end hidden items-center sm:flex space-x-12 2xl:space-x-24 font-medium">
          <Link href="home">
            <button className=" 2xl:text-xl hover:text-[#189BA5] duration-100">
              Home
            </button>
          </Link>
          <Link href="/committees">
            <button className="2xl:text-xl text-lg hover:text-[#189BA5] duration-100">
              Committees
            </button>
          </Link>
          <Link href="/secretariat">
            <button className="2xl:text-xl  text-lg hover:text-[#189BA5] duration-100">
              Secretariat
            </button>
          </Link>
          <Link href="/partners">
            <button className="2xl:text-xl  text-lg hover:text-[#189BA5] duration-100">
              Partners
            </button>
          </Link>
          <Link href="/gallery">
            <button className="2xl:text-xl  text-lg hover:text-[#189BA5] duration-100">
              Gallery
            </button>
          </Link>
          <Link href="/faq">
            <button className="2xl:text-xl  text-lg hover:text-[#189BA5] duration-100">
              FAQ
            </button>
          </Link>

          {!closeReg ? (
            <CloseReg />
          ) : <button onClick={handleChange}
            className={`px-12 2xl:px-12 h-10 rounded-md text-[1.125rem] font-semibold ${navbar ? 'bg-[#1A1E21] text-white' : 'text-black bg-[#F5CE3F]'
              }`}
          >
            Register
          </button>}
        </div>
      </div>
      <div
        className={`sm:hidden w-full flex ${navbar
          ? 'items-center justify-between p-2'
          : 'flex justify-between w-full p-6'
          }`}
      >
        <div>
          <Menu>
            <MenuHandler className={`${!navbar ? 'hidden' : ''}`}>
              <Image
                src="/images/mobile-actinav.svg"
                width={52}
                height={20}
                alt="mobile-actinav"
              />
            </MenuHandler>
            <MenuList className="sm:hidden absolute z-30 top-0 h-full w-[100vw] rounded-none flex flex-col items-center justify-center bg-[#189BA5] bg-opacity-50 text-white text-3xl font-heading font-bold text-center backdrop-blur-lg">
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/">Home</Link></MenuItem>
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/committees">Committee</Link></MenuItem>
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/secretariat">Secretariat</Link></MenuItem>
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/partners">Partners</Link></MenuItem>
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/gallery">Gallery</Link></MenuItem>
              <MenuItem className='text-center hover:text-yellow-400'><Link href="/faq">FAQs</Link></MenuItem>
              <MenuItem className='text-center text-xl pt-12'><button className='text-black bg-white px-4 rounded-lg'>Close</button></MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className={`${!navbar ? 'hidden' : ''}`}>
          <Image
            src="/images/mobile-activenav-logo.svg"
            width={52}
            height={54.45}
            alt="mobile-activenav-logo"
          />
        </div>
        {!closeReg ? (
          <CloseReg />
        ) :
          <button onClick={handleChange} className="py-2 px-[1.5rem] text-xs font-custom font-semibold text-white bg-[#189BA5] rounded-lg">
            <a>Register</a>
          </button>
        }
      </div>
    </div>
  );
}
