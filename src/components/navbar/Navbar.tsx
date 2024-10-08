'use client';

import Link from 'next/link';
import Routes from '@/src/components/navbar/routes/Routes';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className='md:top-1 right-0 md:left-0 z-50 fixed md:fixed bg-transparent shadow-sm backdrop-blur-lg md:backdrop-blur-sm md:mx-5 md:my-10 p-2 md:p-0 md:rounded-full ring-1 ring-black/5 w-full md:w-auto'>
      <div className='mx-auto px-4 md:px-10'>
        <div className='flex justify-between'>
          <div className='flex my-auto'>
            <div>
              <Link href='/' className='flex items-center px-2 py-2'>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_366_13)'>
                    <path
                      d='M20.0508 40C19.42 40 18.8868 39.5432 18.734 38.9312C18.247 36.9806 17.3148 34.9062 15.9374 32.7084C14.3054 30.0694 11.9792 27.6216 8.9584 25.3646C6.331 23.3788 3.7036 22.0246 1.0764 21.3022C0.454 21.1312 0 20.5794 0 19.9342C0 19.3014 0.4366 18.7558 1.045 18.5822C3.621 17.8468 6.1024 16.6526 8.4896 15C11.2326 13.0902 13.5242 10.7986 15.3646 8.125C16.9926 5.7432 18.1102 3.3878 18.7172 1.0584C18.8764 0.4482 19.4136 0 20.0442 0C20.6818 0 21.2228 0.458 21.378 1.0766C21.7284 2.473 22.276 3.9024 23.0208 5.3646C23.9584 7.1702 25.1562 8.9062 26.6146 10.573C28.1076 12.205 29.7744 13.6806 31.6146 15C34.0194 16.7046 36.464 17.9022 38.9488 18.5928C39.5584 18.7622 40 19.3048 40 19.9374C40 20.5796 39.545 21.1268 38.9258 21.2966C37.3508 21.7284 35.7296 22.4248 34.0626 23.3854C32.0486 24.566 30.1736 25.9722 28.4374 27.6042C26.7014 29.2014 25.2778 30.8854 24.1666 32.6562C22.7866 34.8586 21.8534 36.949 21.3674 38.9278C21.2166 39.5416 20.6826 40 20.0508 40Z'
                      fill='#27272A'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_366_13'>
                      <rect width='40' height='40' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
          <div className='md:flex items-center space-x-1 hidden'>
            <Routes />
          </div>
          <div className='flex items-center md:hidden'>
            <button
              className='mobile-menu-button outline-none'
              onClick={toggleNavbar}
            >
              {isClick ? (
                <X className='w-6 h-6 text-foreground' />
              ) : (
                <Menu className='w-6 h-6 text-foreground' />
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <motion.div
          className='md:hidden h-full'
          initial={{ opacity: 0, y: -50 }} // Start from above with opacity 0
          animate={{ opacity: 1, y: 0 }} // Animate to visible and y=0
          exit={{ opacity: 0, y: -50 }} // Exit by going back up
          transition={{ duration: 0.3 }} // Smooth transition (0.3 seconds)
        >
          <div className='space-y-1 px-2 sm:px-3 pt-2 pb-3'>
            <Routes />
          </div>
        </motion.div>
      )}
    </nav>
  );
};
