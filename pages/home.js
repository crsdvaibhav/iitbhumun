import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useSession } from 'next-auth/react';

export default function Home() {

  const session=useSession()
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
    return () => window.removeEventListener('scroll', changeNavbar);
  }, []);

  return (
    <div className="bg-[#F5F5F5]">
     {<NavBar navbar={navbar}/>}
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
