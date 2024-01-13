import RunningText from '@/src/components/ui/running-text/RunningText';
import MainCards from '../components/ui/cards/MainCards';
import Image from 'next/image';

export default function Work() {
  return (
    <main className='flex flex-col items-center justify-center space-y-20'>
      <div>
        <Image
          src={'/logos/tazkiya_works.png'}
          alt='fuck around and find out'
          width={1000}
          height={500}
          className='m-10'
        ></Image>
      </div>
      <div className='container flex items-center justify-center'>
        <h1 className='text-3xl font-normal leading-relaxed'>
          I&apos;m Tazkiya Mujahid, a craftsman of{' '}
          <span className='font-editorialNew text-highlight'>
            code, interfaces, and digital landscapes.
          </span>{' '}
          As a Junior Quality Assurance enthusiast hailing from Jakarta,
          I&apos;ve honed my skills in{' '}
          <span className='font-editorialNew text-highlight'>
            testing automation, documentation, and more.
          </span>{' '}
          With a focus on precision and quality, I&apos;ve delved into{' '}
          <span className='font-editorialNew text-highlight'>
            TypeScript, Node.js, Playwright, and React.
          </span>{' '}
          In the realm of design, I weave my creativity into{' '}
          <span className='font-editorialNew text-highlight'>
            UI/UX aesthetics,
          </span>{' '}
          adding a splash of graphic design finesse to my tech repertoire.
          Let&apos;s collaborate on projects where technology and design
          converge seamlessly!
        </h1>
      </div>
      <RunningText />
      <div className='container'>
        <MainCards />
      </div>
    </main>
  );
}
