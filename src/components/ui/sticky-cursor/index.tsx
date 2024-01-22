'use client';
import { useEffect } from 'react';

import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const cursorSize = 40;

  const mouse: any = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOption = { stiffness: 400, damping: 100, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOption),
    y: useSpring(mouse.y, smoothOption),
  };

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  });

  return (
    <motion.div
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      className='pointer-events-none fixed z-[99999] hidden h-[40px] w-[40px] cursor-none rounded-[50%] border-[1px] border-highlight opacity-[0.4] mix-blend-difference backdrop-blur-[20px] backdrop-filter md:block'
    ></motion.div>
  );
};

export default Cursor;
