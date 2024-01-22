'use client';

import { ImageHeulaulastudios } from '@/src/lib/data';
import Image from 'next/image';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import useDimension from '@/src/components/project/useDimension';

const ProjectGallery = () => {
  const container = useRef(null);

  const { height } = useDimension();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <div ref={container} className='gallery rounded-lg align-middle'>
        <Column
          images={[
            ImageHeulaulastudios[0],
            ImageHeulaulastudios[1],
            ImageHeulaulastudios[2],
          ]}
          y={y}
        />
        <Column
          images={[
            ImageHeulaulastudios[3],
            ImageHeulaulastudios[4],
            ImageHeulaulastudios[5],
          ]}
          y={y2}
        />
        <Column
          images={[
            ImageHeulaulastudios[6],
            ImageHeulaulastudios[7],
            ImageHeulaulastudios[8],
          ]}
          y={y3}
        />
        <Column
          images={[
            ImageHeulaulastudios[9],
            ImageHeulaulastudios[10],
            ImageHeulaulastudios[11],
          ]}
          y={y4}
        />
      </div>
    </main>
  );
};

export default ProjectGallery;

const Column = ({ images, y = 0 }: any) => {
  return (
    <motion.div style={{ y }} className='column'>
      {images.map((src: any, index: any) => {
        return (
          <div key={index} className='imageContainer'>
            <Image
              src={`/work/heulaulastudios/${src}`}
              fill
              alt='image'
              className='rounded-lg object-cover'
              placeholder='empty'
              priority
            />
          </div>
        );
      })}
    </motion.div>
  );
};
