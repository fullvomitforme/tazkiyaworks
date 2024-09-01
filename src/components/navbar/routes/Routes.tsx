'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

export default function Routes() {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    { label: 'Work', href: '/work', active: pathname === '/work' },
    {
      label: 'Resume',
      href: 'https://tazkiyamujahid.notion.site/Tazkiya-Anafsi-Al-Mujahid-Resume-da37e36e6635439da6f41a64ffa02e00?pvs=4',
    },
    { label: 'Blog', href: '/blog' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tazkiya-mujahid/' },
    {
      label: 'Email',
      href: 'mailto:tazkiyadigitalarchive@gmail.com?subject=Hello%20Tazkiya!',
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center space-y-5 p-4 font-dmSans md:flex-row md:space-x-10 md:space-y-0'>
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.href}
          className={clsx(
            'w-full rounded-full px-3 py-1 text-center text-base font-medium uppercase tracking-wide transition-all duration-200 ease-in-out hover:bg-zinc-800 hover:text-white',
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
