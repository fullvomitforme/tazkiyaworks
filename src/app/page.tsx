import AnimationAvailable from '@/src/components/ui/available-animations';
import TechStack from '@/src/components/ui/techstack-marquee/techstack-marquee';
import RecentWork from '@/public/about/recent_work.png';
import Image from 'next/image';
import Link from 'next/link';

export default async function About() {
  return (
    <main className='mt-20'>
      <div className='flex flex-col items-center justify-center space-y-24'>
        <div className='flex flex-col items-center justify-center space-y-3'>
          <div className='flex flex-row items-center justify-between space-x-1 rounded-full bg-zinc-600/50 px-5 py-1 font-dmSans text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-zinc-600/60'>
            <div className='flex items-center'>
              <AnimationAvailable />
            </div>
            <h1>Available for work</h1>
          </div>
          <div className='flex flex-col items-center justify-center space-y-5 text-foreground'>
            <h1 className='font-instrumentSerif text-9xl'>
              I'm Tazkiya Mujahid.
            </h1>
            <p className='max-w-5xl text-center font-dmSans text-lg'>
              A designer of intuitive interfaces and engaging digital
              experiences. As a UI/UX designer based in Jakarta, I've refined my
              craft in creating visually compelling and user-centric designs.
              With expertise in tools like Figma and a strong grasp of design
              principles, I excel in transforming complex ideas into seamless
              user experiences.
            </p>
          </div>
        </div>
        <div className='-mb-10'>
          <p className='-mb-10 font-dmSans text-lg font-medium text-gray-600'>
            The tools and Tech Stack that flow with me
          </p>
        </div>
        <TechStack />
        <div className='flex flex-col space-y-5'>
          <h1 className='mb-5 text-center font-dmSans text-3xl font-semibold text-foreground'>
            Recent Work
          </h1>
          <div className='group relative'>
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
            <Image src={RecentWork} alt='Recent Work' width={1249} />
            <div className='absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-white to-transparent'></div>
          </div>
        </div>
      </div>
    </main>
  );
}
