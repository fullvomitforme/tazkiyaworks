import RunningDesign from '@/src/components/ui/running-design/RunningDesign';
import { buttonVariants } from '@/src/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import ExperienceCard from '@/src/components/about/experience-card/ExperienceCard';
import WorkinProgress from '@/public/logos/workinprogress.png';

const AboutPage = () => {
  return (
    <section className='container mx-auto p-4'>
      <div className='flex items-center justify-center'>
        <Image src={WorkinProgress} alt='Work in Progress' sizes='100vw' />
      </div>
      {/* <div className='container'>
        <div className='space-y-5'>
          <h2 className='text-lg font-medium text-orange-400'>GTKM</h2>
          <p className='text-xl font-medium leading-relaxed'>
            I&apos;m Tazkiya Mujahid (pronounced &quot;TAZ-kee-yah
            Moo-jahid&quot;), a Jakarta-based Junior Quality Assurance
            enthusiast and an undergraduate student at Mercu Buana University,
            majoring in Information System. I have a flair for crafting seamless
            digital experiences. In the tech realm, I specialize in testing
            automation using tools like TypeScript, Node.js, and Playwright,
            prioritizing precision and quality.
          </p>
          <p className='text-xl font-medium leading-relaxed'>
            Beyond code, I infuse creativity into UI/UX projects, adding a touch
            of graphic design finesse. I prefer function declarations and
            descriptive TypeScript types and thrive on creative problem-solving.
          </p>
          <p className='text-xl font-medium leading-relaxed'>
            I&apos;m deeply passionate about design—I&apos;ve had the joy of
            crafting captivating visuals and user experiences during my time at
            Heulaulastudios. Design isn&apos;t just a skill for me; it&apos;s a
            love affair. I find immense joy in the creative process, infusing
            every project with a touch of aesthetic finesse.
          </p>
        </div>
      </div>
      <div className='my-10'>
        <RunningDesign />
      </div>
      <div className='container min-h-[600px] space-y-5'>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-lg font-medium text-orange-400'>WORK</p>
          <Link
            className={buttonVariants({ variant: 'default' })}
            href={
              'https://tazkiyamujahid.notion.site/Tazkiya-Anafsi-Al-Mujahid-Resume-da37e36e6635439da6f41a64ffa02e00?pvs=4'
            }
          >
            DOWNLOAD RESUME
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
          <div className='rounded-lg border-2 border-orange-400'>
            <div className='flex flex-row items-center space-x-5 p-5'>
              <Image
                src={'/work/looking.png'}
                width={120}
                height={120}
                alt='looking for you'
              />
              <div>
                <p className='mb-4 font-medium'>??? (this could be you!)</p>
                <p>
                  I&apos;m on the lookout for exciting remote freelance
                  opportunities as a dedicated Quality Assurance Tester. If you
                  need someone who values excellence and delivers results,
                  let&apos;s connect! Reach out at{' '}
                  <Link
                    href={'mailto:tazkiyadigitalarchive@gmail.com'}
                    className='font-medium'
                  >
                    tazkiyadigitalarchive@gmail.com
                  </Link>
                  , and let&apos;s discuss how I can contribute to your
                  projects. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='pb-10'>
          <ExperienceCard />
        </div>
      </div> */}
    </section>
  );
};

export default AboutPage;
