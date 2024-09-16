'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

export default function Routes() {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    { label: 'Work', href: '/works', active: pathname === '/works' },
    { label: 'Blog', href: '/blog', active: pathname === '/blog' },
    { label: 'Contact', href: '/contact', active: pathname === '/contact' },
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
