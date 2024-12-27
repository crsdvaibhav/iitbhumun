import Link from 'next/link';
import { Button } from '../ui/button';

const data = [
  {
    id: 1,
    label: 'home',
    href: '/home',
  },
  {
    id: 2,
    label: 'Committees',
    href: '/committees',
  },
  {
    id: 3,
    label: 'Secretariat',
    href: '/secretariat',
  },
  {
    id: 4,
    label: 'Gallery',
    href: '/gallery',
  },
  {
    id: 5,
    label: 'FAQs',
    href: '/faq',
  },
];

const Navlist = () => {
  return (
    <div className="flex items-center space-x-8">
      <ul className="flex items-center space-x-4">
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.href}>
                <span className="font-medium capitalize cursor-pointer duration-75 text-white hover:text-lime-400">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="grid grid-cols-2 items-center">
        <Button className="bg-lime-300 text-black hover:bg-lime-400 rounded-s-xl rounded-e-none border-e border-neutral-400">
          <Link href="/auth/register">Register</Link>
        </Button>
        <Button className="bg-lime-300 text-black hover:bg-lime-400 rounded-e-xl rounded-s-none">
          <Link href="/auth/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navlist;
