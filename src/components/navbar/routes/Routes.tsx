'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

const Routes = () => {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    { label: 'Work', href: '/', active: pathname === '/' },
    { label: 'About', href: '/about', active: pathname === '/about' },
    {
      label: 'Resume',
      href: 'https://tazkiyamujahid.notion.site/Tazkiya-Anafsi-Al-Mujahid-Resume-da37e36e6635439da6f41a64ffa02e00?pvs=4',
    },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tazkiya-mujahid/' },
    {
      label: 'Email',
      href: 'mailto:tazkiyadigitalarchive@gmail.com?subject=Hello%20Tazkiya!',
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center space-y-5 p-4 md:flex-row md:space-x-10 md:space-y-0'>
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.href}
          className={clsx(
            'w-full px-3 py-1 text-center text-lg font-normal uppercase leading-tight tracking-widest transition-all duration-300 ease-in-out hover:rounded-full hover:bg-highlight hover:text-white-smoke',
            {
              'rounded-full bg-highlight text-white-smoke': route.active,
            }
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default Routes;
