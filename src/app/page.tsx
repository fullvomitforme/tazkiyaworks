import TechStack from '@/src/components/ui/techstack-marquee/techstack-marquee';
import StatusBadge from '@/src/components/ui/badge/status-badge';
import RecentWork from '@/src/components/about/RecentWork';

export default async function About() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <div className='mt-10 flex flex-col items-center justify-center space-y-5'>
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
        <span className='text-md font-dmSans text-gray-700'>
          The tools and Tech Stack that flow with me
        </span>
      </div>
      <TechStack />
      {/* <div className='w-full'>
        <div className='flex flex-col justify-normal items-start space-y-3 my-20 px-96 font-dmSans text-left'>
          <h1 className='text-3xl'>GTKM.</h1>
          <p>
            I'm Tazkiya Mujahid, a UI/UX and graphic designer based in Jakarta,
            with a background in Information Systems from Mercu Buana
            University. Currently, I specialize in creating seamless digital
            experiences, combining my technical skills with a deep passion for
            design.
          </p>
          <p>
            In my professional journey, I've focused on testing automation using
            tools like TypeScript, Node.js, and Playwright. Precision and
            quality are at the core of my work, ensuring that every digital
            product functions flawlessly.
          </p>
          <p>
            Beyond the technical side, I immerse myself in the creative world of
            UI/UX and graphic design. I take joy in crafting visually compelling
            and user-centric interfaces, infusing each project with a unique
            blend of creativity and functionality. My experience at
            Heulaulastudios has further fueled my love for design, transforming
            ideas into captivating visuals and memorable user experiences.
          </p>
          <p>
            For me, design is more than just a skill—it's a passion. It’s where
            I find my creative spark, turning abstract concepts into engaging
            and aesthetic solutions.
          </p>
        </div>
      </div> */}
      <RecentWork />
    </main>
  );
}
