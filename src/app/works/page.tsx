'use client';

import { useState } from 'react';
import '@/src/styles/works.css';
import Header from '@/src/components/ui/Header';
import Cards from '@/src/components/ui/card/WorkCards';
import { motion } from 'framer-motion';
import { CardsContext, defaultFocusedCard } from '@/src/app/cardsContext';
import { worksExperience } from '@/src/lib/works';
import Link from 'next/link';
import Footer from '@/src/components/footer/Footer';

export default function Home() {
  const [focusedCard, setFocusedCard] = useState<string | null>(
    defaultFocusedCard.focusedCard
  );

  return (
    <motion.div
      className='h-min w-full overflow-hidden'
      onHoverStart={() => setFocusedCard(null)}
    >
      <CardsContext.Provider value={{ focusedCard, setFocusedCard }}>
        <div className='absolute right-52 top-40'>
          <Header />
        </div>
        <Cards />
        <div className='z-auto mx-5 mb-10 mt-32 flex flex-col items-center md:mx-40 md:mt-40 md:items-start md:justify-start'>
          <h1 className='mb-10 text-left font-instrumentSerif text-8xl md:text-9xl'>
            Work Experience
          </h1>
          {worksExperience.map((work) => (
            <div className='w-full max-w-full sm:max-w-lg md:max-w-2xl'>
              <Link
                href={work.url}
                className='block rounded-lg border border-transparent p-4 font-dmSans transition-all duration-300 ease-in-out hover:border-gray-300 hover:bg-transparent hover:backdrop-blur-md'
              >
                <div className='flex items-center justify-between'>
                  <h2 className='text-base font-semibold md:text-lg'>
                    {work.company}
                  </h2>
                  <p className='text-base text-gray-500 md:text-lg'>
                    {work.year}
                  </p>
                </div>
                <p className='mt-2 text-left text-gray-600'>{work.position}</p>
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </CardsContext.Provider>
    </motion.div>
  );
}
