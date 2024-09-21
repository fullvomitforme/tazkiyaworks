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
import Footer from '@/src/components/footer/Footer';

export default function Home() {
  const [focusedCard, setFocusedCard] = useState<string | null>(
    defaultFocusedCard.focusedCard
  );

  return (
    <motion.div
      className='overflow-x-hidden workwrap'
      onHoverStart={() => setFocusedCard(null)}
    >
      <CardsContext.Provider value={{ focusedCard, setFocusedCard }}>
        <div className='top-40 right-52 absolute'>
          <Header />
        </div>
        <Cards />
        <div className='z-auto flex flex-col justify-center items-start mx-40 mt-40 mb-10 text-center'>
          <h1 className='mb-10 font-instrumentSerif text-9xl text-left'>
            Work Experience
          </h1>
          {worksExperience.map((work) => (
            <div className='w-full max-w-2xl'>
              <Link
                href={work.url}
                className='block hover:border-gray-300 hover:bg-transparent hover:backdrop-blur-md p-4 border border-transparent rounded-lg font-dmSans transition-all duration-300 ease-in-out'
              >
                <div className='flex justify-between items-center'>
                  <h2 className='font-semibold text-xl'>{work.company}</h2>
                  <p className='text-gray-500 text-lg'>{work.year}</p>
                </div>
                <p className='mt-2 text-gray-600 text-left'>{work.position}</p>
              </Link>
            </div>
          ))}
        </div>
        
        {/* <Footer /> */}
      </CardsContext.Provider>
    </motion.div>
  );
}
