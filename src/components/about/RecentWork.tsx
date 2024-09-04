import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import OndeliveryScreen from '@/public/about/recent-work/ondelivery_screen.png';
import OndeliveryLogisticLogo from '@/public/about/recent-work/ondelivery_logistic_logo.png';
import OnmarketScreen from '@/public/about/recent-work/onmarket_screen.png';
import PrintedinHeula from '@/public/about/recent-work/printedinheula_logo.png';
import SbbLogo from '@/public/about/recent-work/sbb_logo.png';
import Sparkle from '@/public/about/recent-work/sparkle.png';

export default function RecentWork() {
  return (
    <div className='mt-10 flex w-full flex-col items-center justify-center space-y-3'>
      <h1 className='mb-5 text-center font-dmSans text-3xl text-foreground'>
        Recent Work
      </h1>
      <div className='group relative flex items-center justify-center'>
        <Link
          href='/work'
          className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        >
          <button className='flex flex-row items-center justify-center space-x-2 rounded-full bg-zinc-600/50 px-6 py-2 font-dmSans text-white backdrop-blur-sm transition-colors hover:bg-zinc-600/60'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide-square-arrow-out-up-right lucide'
            >
              <path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
              <path d='m21 3-9 9' />
              <path d='M15 3h6v6' />
            </svg>
            <span>See more work</span>
          </button>
        </Link>
        {/* <div className='right-0 bottom-0 left-0 z-20 absolute bg-gradient-to-t from-white to-transparent w-full h-56'></div> */}
        <Image
          src={OndeliveryLogisticLogo}
          alt='Ondelivery Logistic Logo'
          width={280}
          className='absolute -right-20 bottom-20 z-10 rotate-12 transform'
        />

        <Image
          src={PrintedinHeula}
          alt='Printed in Heula Logo'
          width={212}
          className='absolute -top-5 left-1/2 z-10 translate-x-20 rotate-6 transform'
        />
        <Image
          src={SbbLogo}
          alt='SBB Logo'
          width={212}
          className='absolute -left-44 bottom-10 z-10 translate-x-20 -rotate-12 transform'
        />

        <Image
          src={Sparkle}
          alt='Sparkle Logo'
          width={80}
          className='absolute -left-28 top-10 z-10 translate-x-20 -rotate-6 transform'
        />

        <Image
          src={Sparkle}
          alt='Sparkle Logo'
          width={80}
          className='absolute -left-28 top-10 z-10 translate-x-20 -rotate-6 transform'
        />

        <Image src={OndeliveryScreen} alt='Recent Work' width={1249} />
      </div>
    </div>
  );
}
