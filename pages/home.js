import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
 
  const [navbar, setNavbar] = useState(false);
  const [ab, setab] = useState("");
  
  const changeNavbar = () => {
    if (window.scrollY >= 50) {
     setab("white")
      setNavbar(true);
    } else {
      setab("")
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
    return () => window.removeEventListener('scroll', changeNavbar);
  }, []);

  return (
    <div className="bg-[#F5F5F5]">
      <NavBar navbar={navbar} backgroundColor={ab} />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
