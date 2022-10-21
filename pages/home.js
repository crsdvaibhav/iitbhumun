import data from '../data/data.json'
import NavBar from '../components/Navbar'
import ActiveNavbar from '../components/ActiveNavbar';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';


export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
  }, [])
  return (

    <div className='font-custom'>
      {navbar ? <ActiveNavbar/> : <NavBar />}
      <Hero/>  
    </div>
  );
}
