'use client';
import clsx from 'clsx';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const PATHS = [
   {
      label: 'Personajes',
      href: '/',
   },
   {
      label: 'Planetas',
      href: '/planetas',
   },
];

const Navbar = () => {
   const pathName = usePathname();
   return (
      <nav className="py-6">
         <ul className="flex w-full justify-center gap-x-6">
            {PATHS.map((path, index) => (
               <li key={index}>
                  <Link
                     className={clsx(
                        'hover:underline font-semibold px-4 py-2 rounded-md',
                        {
                           'bg-dragon-500': pathName === path.href,
                        }
                     )}
                     href={path.href}
                  >
                     {path.label}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navbar;
