import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog } from '../lib/slices/GlobalDialogWrapperSlice';
import { useSession } from 'next-auth/react';
import { AppRegistrationOutlined, Dashboard, LoginOutlined } from '@mui/icons-material';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect } from 'react';


export default function NavBar({ navbar }) {
  const dispatch = useDispatch()
  const session=useSession()
  const user=useSelector(state=>state.User.user)
  
  const handleChange = () => {
    dispatch(openDialog('login'))
  }
  function renderCta(){
    if(session.status=="authenticated"){
      return (
<DropdownMenu.Root>
		<DropdownMenu.Trigger>
    <AccountCircleIcon sx={{ fontSize: { xs: '2rem', md: '3rem' } }} />
    </DropdownMenu.Trigger>
		<DropdownMenu.Portal>
			<DropdownMenu.Content align="center" className='bg-white cursor-pointer p-4 rounded-lg flex flex-col gap-2 border-b border-gray-500' sideOffset={15}>
				<DropdownMenu.Item className='flex gap-1' onClick={()=>dispatch(openDialog('logout'))}>
          <LoginOutlined/><span>Logout</span>
        </DropdownMenu.Item>
        {!(user?.formFilled) && <DropdownMenu.Item className='flex gap-1' onClick={()=>dispatch(openDialog('register'))}>
          <AppRegistrationOutlined/><span>Complete register</span>
        </DropdownMenu.Item >}
        {(user?.formFilled) && <Link href={"/dashboard"}><DropdownMenu.Item className='flex gap-1'>
          <Dashboard/><span>My dashboard</span>
          </DropdownMenu.Item>
          </Link>}
        </DropdownMenu.Content>
		</DropdownMenu.Portal>
	</DropdownMenu.Root>


      )
    }
    else{
    return <button onClick={handleChange}
    className={`px-12 2xl:px-12 h-10 rounded-md hover:scale-105 text-[1.125rem] font-semibold mx-4  text-black bg-[#F5CE3F]`}
  >
    Register
  </button>
    }
  }
  return (
    <div
<<<<<<< HEAD
      className={`fixed w-full z-30 font-medium sm:py-2 ${navbar
        ? `bg-white shadow-lg border-b 1xl:shadow-[#F1F1F1]/50 shadow-[#F1F1F1]/50 text-black`
        : `bg-none text-white `
=======
      className={`fixed w-full z-30 font-medium  sm:py-2  ${navbar
        ? `bg-[#113C48]  shadow-lg  text-white`
        : `bg-[#113C48] text-white`
>>>>>>> 586c920c8f90ff2d95a824774b4d6f67a4e5a39e
        }`}
    >
      <div className="hidden sm:flex flex-row items-center justify-between mx-16">
        <Image
          src="/images/munvector.svg"
          width={60}
          height={60}
          alt="active-nav-logo"
        />
        <div className="justify-end hidden items-center sm:flex space-x-12 2xl:space-x-24 font-medium">
          <Link href="home">
            <button className=" border-[#A3CF3A] hover:border-b-2 2xl:text-xl hover:border-spacing-4 duration-100">
              Home
            </button>
          </Link>
          <Link href="/committees">
            <button className="2xl:text-xl text-lg border-[#A3CF3A] hover:border-b-2 hover:border-spacing-2 duration-100">
              Committees
            </button>
          </Link>
          <Link href="/secretariat">
            <button className="2xl:text-xl  text-lg border-[#A3CF3A] hover:border-b-2 hover:border-spacing-2 duration-100">
              Secretariat
            </button>
          </Link>
          <Link href="/partners">
            <button className="2xl:text-xl  text-lg border-[#A3CF3A] hover:border-b-2 hover:border-spacing-2 duration-100">
              Partners
            </button>
          </Link>
          <Link href="/gallery">
            <button className="2xl:text-xl  text-lg border-[#A3CF3A] hover:border-b-2 hover:border-spacing-2 duration-100">
              Gallery
            </button>
          </Link>
          <Link href="/faq">
            <button className="2xl:text-xl  text-lg border-[#A3CF3A] hover:border-b-2 hover:border-spacing-2 duration-100">
              FAQ
            </button>
          </Link><div>
<<<<<<< HEAD
            <div className='mr-12'>
           {renderCta()}
           </div>
          </div>
=======
<Link href="/registerpage">
  
         <button 
            className={'px-12 2xl:px-12 h-10 rounded-md text-xl font-semibold mx-2 text-black bg-[#ABCF3A] hover:bg-yellow-300'
              }
          >
            Register
          </button ></Link>
          <Link href="/loginpage">
         <button onClick={handleChange}
            className={`px-12 2xl:px-12 h-10 targetDiv rounded-md text-xl font-semibold mx-4  text-black bg-[#ABCF3A] hover:bg-yellow-300 ${qt} `}
          >
            Login
          </button></Link>
         
         </div>
>>>>>>> 586c920c8f90ff2d95a824774b4d6f67a4e5a39e
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
<<<<<<< HEAD
        <div className='mr-6'>
       {renderCta()}
       </div>
=======
       
          <button onClick={handleChange} className="py-2 px-[1.5rem] text-xs font-custom font-semibold text-white bg-[#A3B63A] rounded-lg">
            <Link href={'/registerpage'}>Register</Link>
          </button>
          <button  className="py-2 px-[1.5rem] text-xs font-custom font-semibold text-white bg-[#A3B63A] rounded-lg">
                 <Link href={'/loginpage'}>    Login</Link> 
                </button>
>>>>>>> 586c920c8f90ff2d95a824774b4d6f67a4e5a39e
      </div>
    </div>
  );
}
