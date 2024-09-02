import AnimationAvailable from '@/src/components/ui/available-animations';
import TechStack from '@/src/components/ui/techstack-marquee/techstack-marquee';
// import RecentWork from '@/public/about/recent_work.png';
import Image from 'next/image';
import Link from 'next/link';

export default async function About() {
  return (
    <main className='mt-20'>
      <div className='flex flex-col justify-center items-center space-y-24'>
        <div className='flex flex-col justify-center items-center space-y-5'>
          <div className='flex flex-row justify-between items-center space-x-1 bg-zinc-600/50 hover:bg-zinc-600/60 shadow-sm backdrop-blur-sm px-5 py-1 rounded-full font-dmSans text-white transition-colors'>
            <div className='flex items-center'>
              <AnimationAvailable />
            </div>
            <h1>Available for work</h1>
          </div>
          <div className='flex flex-col justify-center items-center space-y-5 text-foreground'>
            <h1 className='font-instrumentSerif text-9xl'>
              I'm Tazkiya Mujahid.
            </h1>
            <p className='max-w-5xl font-dmSans text-center text-lg'>
              A designer of intuitive interfaces and engaging digital
              experiences. As a UI/UX designer based in Jakarta, I've refined my
              craft in creating visually compelling and user-centric designs.
              With expertise in tools like Figma and a strong grasp of design
              principles, I excel in transforming complex ideas into seamless
              user experiences.
            </p>
          </div>
        </div>
        <TechStack />
        <div className='flex flex-col space-y-5'>
          <h1 className='font-dmSans text-4xl text-foreground text-left'>
            Recent Work
          </h1>
          <div className='relative group'>
            <Link
              href='/work'
              className='top-1/2 left-1/2 z-10 absolute opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2 -translate-y-1/2 duration-300'
            >
              <button className='flex flex-row justify-center items-center space-x-2 bg-zinc-600/50 hover:bg-zinc-600/60 backdrop-blur-sm px-6 py-2 rounded-full font-dmSans text-white transition-colors'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide-square-arrow-out-up-right lucide'
                >
                  <path d='M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6' />
                  <path d='m21 3-9 9' />
                  <path d='M15 3h6v6' />
                </svg>
                <span>See more work</span>
              </button>
            </Link>
            {/* <Image src={RecentWork} alt='Recent Work' width={1249} /> */}
            <div className='bottom-0 left-0 absolute bg-gradient-to-t from-white to-transparent w-full h-56'></div>
          </div>
        </div>
      </div>
    </main>
  );
}
