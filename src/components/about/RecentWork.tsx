import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RecentWork() {
  const OndeliveryLogisticLogo =
    'https://storage.onindonesia.id/tazkiyaworks/public/about/recent-work/ondelivery_logistic_logo.png';
  const PrintedinHeula =
    'https://storage.onindonesia.id/tazkiyaworks/public/about/recent-work/printedinheula_logo.png';
  const SbbLogo =
    'https://storage.onindonesia.id/tazkiyaworks/public/about/recent-work/sbb_logo.png';
  const Sparkle =
    'https://storage.onindonesia.id/tazkiyaworks/public/about/recent-work/sprinkle.png';
  const OndeliveryScreen =
    'https://storage.onindonesia.id/tazkiyaworks/public/about/recent-work/ondelivery_screen.png';
  const OnMarketScreen =
    'https://storage.onindonesia.id/tazkiyaworks/public/about/recent-work/onmarket_screen.png';

  return (
    <div className='my-20 flex w-full flex-col items-center justify-center space-y-10'>
      {/* :TODO: Add a gradient overlay to the bottom of the image */}
      <div className='absolute -bottom-80 left-0 right-0 z-20 h-56 w-full bg-gradient-to-t from-white to-transparent'></div>
      <h1 className='mb-5 text-center font-dmSans text-7xl font-medium text-foreground'>
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
        <Image
          src={OndeliveryLogisticLogo}
          alt='Ondelivery Logistic Logo'
          width={280}
          height={0}
          style={{ height: 'auto' }}
          className='absolute -right-20 bottom-20 z-10 rotate-12 transform'
        />

        <Image
          src={PrintedinHeula}
          alt='Printed in Heula Logo'
          width={212}
          height={0}
          style={{ height: 'auto' }}
          className='absolute -top-5 left-1/2 z-10 translate-x-20 rotate-6 transform'
        />
        <Image
          src={SbbLogo}
          alt='SBB Logo'
          width={212}
          height={0}
          style={{ height: 'auto' }}
          className='absolute -left-44 bottom-10 z-10 translate-x-20 -rotate-12 transform'
        />

        <Image
          src={Sparkle}
          alt='Sparkle Logo'
          width={80}
          height={0}
          style={{ height: 'auto' }}
          className='absolute -left-28 top-10 z-10 translate-x-20 -rotate-6 transform'
        />

        <Image
          src={Sparkle}
          alt='Sparkle Logo'
          width={80}
          height={0}
          style={{ height: 'auto' }}
          className='absolute -right-11 top-5 z-10 rotate-6 transform'
        />

        <Image
          src={OnMarketScreen}
          alt='On Market Screen'
          width={80}
          height={0}
          style={{ height: 'auto' }}
          className='absolute bottom-5 z-10 translate-x-1/2 rotate-6 transform'
        />

        <Image
          src={OndeliveryScreen}
          alt='Recent Work'
          width={1249}
          height={0}
          style={{ height: 'auto' }}
        />
      </div>
    </div>
  );
}
