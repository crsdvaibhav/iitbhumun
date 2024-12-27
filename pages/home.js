import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { useSession } from 'next-auth/react';

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const { data: session, status } = useSession();

  // Initialize the navbar state only on the client side to avoid hydration issues
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true once the component has mounted on the client
  }, []);

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
=======
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import NavBar2 from '../components/navbarforlogin';
import Doubtbox from '../components/doubtbox';
import Footer2 from '../components/footerforlogin';
import Navbar from '@/components/common/navbar';
import Testimonials from '@/components/home/testimonials';

export default function Home() {
  const auth = getAuth();
  const [changebar, setbar] = useState(true);
  function abc() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setbar(false);
      } else {
        setbar(true);
      }
    });
  }
  abc();

  const [navbar, setNavbar] = useState(false);
  const [ab, setab] = useState('');
  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setab('white');
      setNavbar(true);
    } else {
      setab('red');
>>>>>>> 586c920c8f90ff2d95a824774b4d6f67a4e5a39e
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (isMounted) {
      // Only add the event listener on the client side
      window.addEventListener('scroll', changeNavbar);
      return () => window.removeEventListener('scroll', changeNavbar);
    }
  }, [isMounted]);

  // Ensure that the navbar is rendered correctly only after the client-side mount
  if (!isMounted) {
    return null; // Prevent rendering anything during SSR
  }

  return (
<<<<<<< HEAD
    <div className="bg-[#F5F5F5]">
      <NavBar navbar={navbar} />
=======
    <div className="bg-[#FFFFFF] font-semibold">
      <Navbar />
      {/* {changebar ? (
        <NavBar navbar={true} backgroundColor={ab} qt="" />
      ) : (
        <NavBar2 navbar={true} backgroundColor="white" />
      )} */}
>>>>>>> 586c920c8f90ff2d95a824774b4d6f67a4e5a39e
      <Hero />
      <Main />
      <Testimonials />
      <Doubtbox />
      {changebar ? <Footer /> : <Footer2 />}
    </div>
  );
}