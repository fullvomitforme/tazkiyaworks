'use client';

import { useState } from 'react';
import '@/src/styles/home.css';
import Header from '@/src/components/ui/Header';
import Cards from '@/src/components/ui/card/WorkCards';
import { motion } from 'framer-motion';
import { CardsContext, defaultFocusedCard } from '../cardsContext';
import WorkInProgress from '@/src/components/work-in-progress/work-in-progress';

export default function Home() {
  const [focusedCard, setFocusedCard] = useState<string | null>(
    defaultFocusedCard.focusedCard
  );

  return (
    <motion.div className='workwrap' onHoverStart={() => setFocusedCard(null)}>
      <CardsContext.Provider value={{ focusedCard, setFocusedCard }}>
        {/* <Header /> */}
        <WorkInProgress />
        <Cards />
      </CardsContext.Provider>
    </motion.div>
  );
}
