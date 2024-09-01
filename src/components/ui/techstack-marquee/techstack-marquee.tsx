import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import AdobeAi from '@/public/techstack/adobe-ai.svg';
import AdobePs from '@/public/techstack/adobe-ps.svg';
import Attlasian from '@/public/techstack/atlassian.svg';
import Figma from '@/public/techstack/figma.svg';
import Flutter from '@/public/techstack/flutter.svg';
import Github from '@/public/techstack/github.svg';
import Go from '@/public/techstack/adobe-ps.svg';
import Javascript from '@/public/techstack/javascript.svg';
import Jira from '@/public/techstack/jira.svg';
import Nodejs from '@/public/techstack/nodejs.svg';
import Npm from '@/public/techstack/npm.svg';
import ReactLogo from '@/public/techstack/react.svg';
import Tailwind from '@/public/techstack/tailwind.svg';
import Typescript from '@/public/techstack/typescript.svg';

const icons = [
  { src: AdobeAi, alt: 'Adobe Illustrator' },
  { src: AdobePs, alt: 'Adobe Photoshop' },
  { src: Attlasian, alt: 'Atlassian' },
  { src: Figma, alt: 'Figma' },
  { src: Flutter, alt: 'Flutter' },
  { src: Github, alt: 'GitHub' },
  { src: Go, alt: 'Go' },
  { src: Javascript, alt: 'JavaScript' },
  { src: Jira, alt: 'Jira' },
  { src: Nodejs, alt: 'Node.js' },
  { src: Npm, alt: 'npm' },
  { src: ReactLogo, alt: 'React' },
  { src: Tailwind, alt: 'Tailwind CSS' },
  { src: Typescript, alt: 'TypeScript' },
];

const TechStackMarquee = () => {
  return (
    <Marquee speed={40} gradient={true}>
      {[...icons, ...icons].map((icon, index) => (
        <div key={index} className='mx-10'>
          <Image
            src={icon.src}
            alt={icon.alt}
            width={40}
            height={40}
            className='transition-transform duration-300 hover:brightness-75'
          />
        </div>
      ))}
    </Marquee>
  );
};

export default TechStackMarquee;
