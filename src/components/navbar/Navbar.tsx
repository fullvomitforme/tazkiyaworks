'use client';
import TazkiyaWorksLogo from '@/src/components/ui/tazkiyaworks-logo';
import Link from 'next/link';
import Routes from '@/src/components/navbar/routes/Routes';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Emojiest from '@/public/logos/emojiest.png';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toogleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className='px-4 py-9'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between md:flex-row md:justify-center'>
          <div className='flex flex-row items-center justify-center'>
            <Link
              href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
              className='p-4 text-lg text-white md:inline'
            >
              <Image
                src={Emojiest}
                alt='Never Gonna Give You Up'
                sizes='10vw'
                style={{ width: '100%', height: 'auto' }}
              />
            </Link>
            <div className='hidden md:inline-block'>
              <Routes />
            </div>
          </div>

          <button
            onClick={toogleNavbar}
            className='transition-all duration-300 ease-in-out md:hidden'
            aria-label='Toogle Navigation'
          >
            {isClick ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isClick && (
        <div className='border-gray-100bg-nav-background absolute left-0 right-0 top-[100px] w-full rounded-md bg-opacity-30 bg-clip-padding p-4 backdrop-blur-md backdrop-filter'>
          <Routes />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
