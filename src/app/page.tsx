import { unstable_noStore as noStore } from 'next/cache';
import getLastPlayed from '@/src/lib/spotify';

import TechStack from '@/src/components/ui/techstack-marquee/techstack-marquee';
import StatusBadge from '@/src/components/ui/badge/status-badge';
import RecentWork from '@/src/components/about/RecentWork';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  MusicCard,
} from '@/src/components/ui/hover-card';

import { CalendarDays } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';

import Image from 'next/image';

const Currently = async () => {
  noStore();
  const { data: song } = await getLastPlayed();

  const recent = song.is_playing ? song.item : song.items[0].track;
  const track = {
    title: recent.name,
    artist: recent.artists
      .map((_artist: { name: string }) => _artist.name)
      .shift(),
    songUrl: recent.external_urls.spotify,
    coverArt: recent.album.images[0].url,
    previewUrl: recent.preview_url,
  };

  return (
    <>
      <span className='font-semibold'>
        <MusicCard {...track}>
          <a
            href={track.songUrl}
            target='_blank'
            className='underline-offset-4 hover:underline'
          >
            {track.title}
          </a>
        </MusicCard>{' '}
        by {track.artist}
      </span>
    </>
  );
};

export default async function About() {
  const graphicDesigner =
    'https://storage.onindonesia.id/tazkiyaworks/public/about/gktm/graphicdesignerismypassion.png';

  const uiUxDesigner =
    'https://storage.onindonesia.id/tazkiyaworks/public/about/gktm/uiuxmeme.jpg';

  const informationSystem =
    'https://storage.onindonesia.id/tazkiyaworks/public/about/gktm/informationsystemmeme.jpg';

  return (
    <main className='flex flex-col items-center justify-center px-48'>
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
          <p className='max-w-5xl text-center font-dmSans text-lg'>
            While you’re reading this, I’m listening to <Currently />, minding
            my own business waiting for you to hit me up, so enjoy your stay.
            Meanwhile, I hope you’re having a great day and enjoying whatever
            you’re up to!
          </p>
        </div>
      </div>
      <div className='my-10'>
        <span className='text-md font-dmSans text-gray-700'>
          The tools and Tech Stack that flow with me
        </span>
      </div>
      <TechStack />
      <div className='mx-auto my-20 flex flex-col items-start justify-start gap-5 text-left font-dmSans'>
        <h1 className='text-4xl font-medium'>GTKM.</h1>

        <p>
          I'm <span className='font-bold'>Tazkiya Mujahid</span>, a{' '}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className='font-bold underline-offset-4 hover:underline'>
                UI/UX
              </span>
            </HoverCardTrigger>
            <HoverCardContent className='w-80'>
              <div>
                <Image
                  src={uiUxDesigner}
                  alt='UI/UX Designer meme'
                  width={300}
                  height={300}
                  className='rounded-md'
                />
              </div>
            </HoverCardContent>
          </HoverCard>{' '}
          and{' '}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className='font-bold underline-offset-4 hover:underline'>
                Graphic Designer
              </span>
            </HoverCardTrigger>
            <HoverCardContent className='w-80'>
              <div>
                <Image
                  src={graphicDesigner}
                  alt='Graphic Designer meme'
                  width={300}
                  height={300}
                  className='rounded-md'
                />
              </div>
            </HoverCardContent>
          </HoverCard>{' '}
          based in Jakarta, with a background in{' '}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className='font-bold underline-offset-4 hover:underline'>
                Information Systems
              </span>
            </HoverCardTrigger>
            <HoverCardContent className='w-80'>
              <div>
                <Image
                  src={informationSystem}
                  alt='Information System meme'
                  width={300}
                  height={300}
                  className='rounded-md'
                />
              </div>
            </HoverCardContent>
          </HoverCard>{' '}
          from Mercu Buana University. I specialize in creating seamless{' '}
          <span className='font-bold'>digital experiences</span>, blending my
          technical skills with a deep passion for design.
        </p>
        <p>
          In my professional journey, I immerse myself in the creative world of{' '}
          <span className='font-bold'>UI/UX</span> and{' '}
          <span className='font-bold'>Graphic Design</span>. I take joy in
          crafting visually compelling and{' '}
          <span className='font-bold'>user-centric</span> interfaces, infusing
          each project with a unique blend of creativity and functionality. My
          experience at{' '}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className='font-bold underline-offset-4 hover:underline'>
                Heulaula Studios
              </span>
            </HoverCardTrigger>
            <HoverCardContent className='w-80'>
              <div className='flex justify-between space-x-4'>
                <Avatar>
                  <AvatarImage src='https://avatars.githubusercontent.com/u/132384789' />
                  <AvatarFallback>HS</AvatarFallback>
                </Avatar>
                <div className='space-y-1'>
                  <h4 className='text-sm font-semibold'>Heulaula Studios</h4>
                  <p className='text-sm'>
                    A tiny design outpost, embodies the futility of creative
                    endeavors. 🌏🥷
                  </p>
                  <div className='flex items-center pt-2'>
                    <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
                    <span className='text-xs text-muted-foreground'>
                      Joined December 2019
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>{' '}
          has further fueled my love for design, transforming ideas into
          captivating visuals and memorable user experiences.
        </p>
        <p>
          For me, design is more than just a skill—it's a{' '}
          <span className='font-bold'>passion</span>. It’s where I find my{' '}
          <span className='font-bold'>creative spark</span>, turning abstract
          concepts into engaging and aesthetic solutions.
        </p>
      </div>
      <RecentWork />
    </main>
  );
}
