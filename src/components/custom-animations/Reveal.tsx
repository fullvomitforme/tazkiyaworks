'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import { cn } from '@/src/lib/utils';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
}

export default function Reveal({ children, width = 'fit-content' }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      // Fire the animation
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} className={cn('relative overflow-hidden', width)}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 10, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
