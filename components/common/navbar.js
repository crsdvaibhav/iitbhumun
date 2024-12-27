import Image from 'next/image';
import Navlist from './nav-list';

const Navbar = () => {
  return (
    <header className="w-full bg-cyan-800 sm:py-2">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between h-full">
        <Image
          src="/images/munvector.svg"
          width={60}
          height={60}
          alt="active-nav-logo"
        />
        <Navlist />
      </div>
    </header>
  );
};

export default Navbar;
