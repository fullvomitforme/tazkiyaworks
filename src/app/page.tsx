import RunningText from '@/src/components/ui/running-text/RunningText';
import MainCards from '../components/ui/cards/MainCards';
import Image from 'next/image';
import TazkiyaWorksLogo from '@/public/logos/tazkiya_works.png';

export default async function Work() {
  return (
    <main className='flex flex-col items-center justify-center space-y-10 font-inter text-xl leading-relaxed'>
      {/* <div>
        <Image
          src={TazkiyaWorksLogo}
          alt='fuck around and find out'
          priority
        ></Image>
      </div> */}
      {/* <div className='container flex items-center justify-center p-4 md:p-9'>
        <div>
          <p>
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
            </span>
          </p>
          <p>
            {' '}
            In the realm of design, I weave my creativity into{' '}
            <span className='font-editorialNew text-highlight'>
              UI/UX aesthetics,
            </span>{' '}
            adding a splash of graphic design finesse to my tech repertoire.
            Let&apos;s collaborate on projects where technology and design
            converge seamlessly!
          </p>
        </div>
      </div>
      <div className='my-5 py-5'>
        <RunningText />
      </div> */}
      {/* <div className='container p-4'>
        <h2 className='p-4 text-lg font-medium uppercase leading-relaxed tracking-wider text-highlight'>
          Project
        </h2>
        <MainCards />
      </div> */}
    </main>
  );
}
`                               `;