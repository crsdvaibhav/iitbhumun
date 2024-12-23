import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
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
    <div className="bg-[#F5F5F5]">
      <NavBar navbar={navbar} />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}