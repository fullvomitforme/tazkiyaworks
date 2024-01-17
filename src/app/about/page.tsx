import RunningDesign from '@/src/components/ui/running-design/RunningDesign';
import { buttonVariants } from '@/src/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import ExperienceCard from '@/src/components/about/experience-card/ExperienceCard';
import WorkinProgress from '@/public/logos/workinprogress.png';
import Think from '@/public/acc/think.png';

const AboutPage = () => {
  return (
    <section className='m-4 p-4'>
      <div className='space-y-2'>
        <h2 className='text-lg font-medium leading-relaxed tracking-wider text-highlight'>
          GTKM
        </h2>
        <p className='text-sm font-normal leading-relaxed'>
          I&apos;m Tazkiya Mujahid, a Jakarta-based Junior Quality Assurance
          enthusiast and an undergraduate student at Mercu Buana University,
          majoring in Information System. I have a flair for crafting seamless
          digital experiences. In the tech realm, I specialize in testing
          automation using tools like TypeScript, Node.js, and Playwright,
          prioritizing precision and quality.
        </p>
        <p className='text-sm font-normal leading-relaxed'>
          Beyond code, I infuse creativity into UI/UX projects, adding a touch
          of graphic design finesse. I prefer function declarations and
          descriptive TypeScript types and thrive on creative problem-solving.
        </p>
        <p className='text-sm font-normal leading-relaxed'>
          I&apos;m deeply passionate about design—I&apos;ve had the joy of
          crafting captivating visuals and user experiences during my time at
          Heulaulastudios. Design isn&apos;t just a skill for me; it&apos;s a
          love affair. I find immense joy in the creative process, infusing
          every project with a touch of aesthetic finesse.
        </p>
      </div>
      <div className='my-10'>
        <RunningDesign />
      </div>
      <div className='mb-5 flex flex-col space-y-5'>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-lg font-medium leading-relaxed tracking-wider text-highlight'>
            WORK
          </h2>
          <Link
            href={
              'https://tazkiyamujahid.notion.site/Tazkiya-Anafsi-Al-Mujahid-Resume-da37e36e6635439da6f41a64ffa02e00?pvs=4'
            }
            className='hover:bg-highlight/20 rounded-lg bg-highlight p-2 font-medium text-white'
          >
            Download Resume
          </Link>
        </div>
        <div className='flex cursor-help flex-col items-center justify-center'>
          <div className='p- mb-2 flex flex-col items-center justify-between rounded-lg border border-highlight p-4'>
            <Image
              src={Think}
              alt='think'
              style={{ width: '110px', height: '110px' }}
              className='float-left mb-2 flex cursor-pointer rounded-lg'
            />
            <div>
              <h2 className='mb-2 text-lg font-medium'>
                ??? (this could be you!)
              </h2>
              <p className='text-justify text-sm font-normal'>
                I&apos;m on the lookout for exciting remote freelance
                opportunities as a dedicated Quality Assurance Tester. If you
                need someone who values excellence and delivers results,
                let&apos;s connect! Reach out at{' '}
                <Link
                  href={'mailto:tazkiyadigitalarchive@gmail.com'}
                  className='font-medium text-highlight'
                >
                  tazkiyadigitalarchive@gmail.com
                </Link>
                , and let&apos;s discuss how I can contribute to your projects.
                🚀
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ExperienceCard />
      </div>
    </section>
  );
};

export default AboutPage;
