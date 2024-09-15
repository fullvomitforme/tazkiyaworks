'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

export default function Routes() {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    { label: 'Work', href: '/works', active: pathname === '/works' },
    {
      label: 'Resume',
      href: 'https://tazkiyamujahid.notion.site/Tazkiya-Anafsi-Al-Mujahid-Resume-da37e36e6635439da6f41a64ffa02e00?pvs=4',
    },
    { label: 'Blog', href: '/blog', active: pathname === '/blog' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tazkiya-mujahid/' },
    {
      label: 'Email',
      href: 'mailto:tazkiyadigitalarchive@gmail.com?subject=Hello%20Tazkiya!',
    },
  ];

  return (
    <div className='flex md:flex-row flex-col justify-center items-center md:space-x-10 space-y-5 md:space-y-0 p-4 font-dmSans'>
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.href}
          className={clsx(
            'hover:bg-zinc-800 px-3 py-1 rounded-full w-full font-medium text-base text-left md:text-center hover:text-white uppercase tracking-wide transition-all duration-200 ease-in-out',
            {
              'bg-zinc-800 text-white': route.active,
            }
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};
