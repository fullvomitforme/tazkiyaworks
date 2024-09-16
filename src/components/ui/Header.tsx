'use client';

import { RightArrow } from '@/src/components/ui/arrow';
import { CardsContext } from '@/src/app/cardsContext';
import { ReactNode, useContext } from 'react';
import { motion } from 'framer-motion';
import { works } from '@/src/lib/works';

interface HoverableWorkProps {
  id: string;
  children: ReactNode;
  url: string;
}

export default function Header() {
  const { setFocusedCard } = useContext(CardsContext);

  const HoverableWork = ({ id, children, url }: HoverableWorkProps) => {
    return (
      <motion.a
        href={url}
        className='hoverable-work'
        onHoverStart={() => setFocusedCard(id)}
        onHoverEnd={() => setFocusedCard(null)}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </motion.a>
    );
  };

  return (
    <div className='header'>
      <div className='flex flex-row gap-24'>
        <div className='header-card works-index-container -rotate-1'>
          <div className='flex flex-row pt-2'>
            <div className='works-index'>
              {works.slice(0, 9).map((work) => {
                return (
                  <HoverableWork id={work.id} url={work.url} key={work.id}>
                    {work.id}{' '}
                    <span style={{ color: '#b9b9b9' }}>{work.year}</span>
                  </HoverableWork>
                );
              })}
            </div>
            <div className='works-index'>
              {works.slice(10).map((work) => {
                return (
                  <HoverableWork id={work.id} url={work.url} key={work.id}>
                    {work.id}{' '}
                    <span style={{ color: '#b9b9b9' }}>{work.year}</span>
                  </HoverableWork>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
