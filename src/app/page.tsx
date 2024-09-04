import Image from 'next/image';
import Link from 'next/link';

import TechStack from '@/src/components/ui/techstack-marquee/techstack-marquee';
import StatusBadge from '@/src/components/ui/badge/status-badge';
import RecentWork from '@/src/components/about/RecentWork';

export default async function About() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <div className='mt-10 flex flex-col items-center justify-center space-y-3'>
        {/* Badge here */}
        <StatusBadge />
        <div className='flex flex-col items-center justify-center space-y-5 text-foreground'>
          <h1 className='font-instrumentSerif text-9xl'>
            I'm Tazkiya Mujahid.
          </h1>
          <p className='max-w-5xl text-center font-dmSans text-lg'>
            A designer of intuitive interfaces and engaging digital experiences.
            As a UI/UX and Graphic designer based in Jakarta, I've refined my
            craft in creating visually compelling and user-centric designs. With
            expertise in tools like Figma and a strong grasp of design
            principles, I excel in transforming complex ideas into seamless user
            experiences.
          </p>
        </div>
      </div>
      <div className='my-10'>
        <span className='text-md font-dmSans text-foreground'>
          The tools and Tech Stack that flow with me
        </span>
      </div>
      <TechStack />
      <RecentWork />
    </main>
  );
}
