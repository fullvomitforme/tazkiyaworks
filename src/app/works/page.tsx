'use client';

import { useState } from 'react';
import '@/src/styles/works.css';
import Header from '@/src/components/ui/Header';
import Cards from '@/src/components/ui/card/WorkCards';
import { motion } from 'framer-motion';
import { CardsContext, defaultFocusedCard } from '@/src/app/cardsContext';
import WorkInProgress from '@/src/components/work-in-progress/work-in-progress';
import { worksExperience } from '@/src/lib/works';
import Link from 'next/link';

export default function Home() {
  const [focusedCard, setFocusedCard] = useState<string | null>(
    defaultFocusedCard.focusedCard
  );

  return (
    <motion.div
      className='workwrap overflow-x-hidden'
      onHoverStart={() => setFocusedCard(null)}
    >
      <CardsContext.Provider value={{ focusedCard, setFocusedCard }}>
        <Cards />
        <div className='z-auto mx-auto mt-40 flex flex-col items-center justify-center text-center'>
          <h1 className='mb-10 text-left font-instrumentSerif text-9xl'>
            Work Experience
          </h1>
          {worksExperience.map((work) => (
            <div className='w-full max-w-2xl'>
              <Link
                href={work.url}
                className='block rounded-lg border border-transparent p-4 font-dmSans transition-all duration-300 ease-in-out hover:border-gray-300 hover:bg-transparent hover:backdrop-blur-md'
              >
                <div className='flex items-center justify-between'>
                  <h2 className='text-xl font-semibold'>{work.company}</h2>
                  <p className='text-lg text-gray-500'>{work.year}</p>
                </div>
                <p className='mt-2 text-left text-gray-600'>{work.position}</p>
              </Link>
            </div>
          ))}
        </div>
        <Header />
      </CardsContext.Provider>
    </motion.div>
  );
}
