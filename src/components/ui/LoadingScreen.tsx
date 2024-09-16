'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Adjust time as needed
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {/* Your SVG or loading animation */}
      <motion.div
        animate={{
          scale: [0, 1, 1, 0],
          rotate: [0, 360, 0],
          transition: { duration: 3, repeat: Infinity },
        }}
      >
        <div className='m-10 transform-none'>
          <svg
            width='50'
            height='50'
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
                <rect width='50' height='50' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
