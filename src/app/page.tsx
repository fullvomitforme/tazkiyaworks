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
            className='bg-red-300/20 hover:bg-red-500 hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'
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

  const tazkiya =
    'https://storage.onindonesia.id/tazkiyaworks/public/about/gktm/tazkiya.jpg';

  const menarik =
    'https://storage.onindonesia.id/tazkiyaworks/public/about/gktm/MENARIK.gif';

  return (
    <main className='flex flex-col justify-center items-center mx-5 md:px-48'>
      <div className='flex flex-col justify-center items-center space-y-5 mt-32 md:mt-40'>
        {/* Badge here */}
        <StatusBadge />
        <div className='flex flex-col justify-center items-center space-y-10 text-foreground'>
          <h1 className='font-instrumentSerif text-9xl'>
            I'm Tazkiya Mujahid.
          </h1>
          <p className='md:max-w-5xl font-dmSans text-left text-lg md:text-center'>
            A designer of{' '}
            <span className='bg-red-300/20 hover:bg-red-500 hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
              intuitive interfaces
            </span>{' '}
            and engaging digital experiences. As a{' '}
            <span className='bg-red-300/20 hover:bg-red-500 hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
              UI/UX and Graphic designer based in Jakarta
            </span>
            , I've refined my craft in creating{' '}
            <span className='bg-red-300/20 hover:bg-red-500 hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
              visually compelling
            </span>{' '}
            and user-centric designs. With expertise in tools like Figma and a
            strong grasp of design principles, I excel in{' '}
            <span className='bg-red-300/20 hover:bg-red-500 hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
              transforming complex ideas
            </span>{' '}
            into seamless user experiences.
          </p>
          <p className='md:max-w-5xl font-dmSans text-left text-lg md:text-center'>
            While you’re reading this, I’m listening to <Currently />, minding
            my own business waiting for you to hit me up, so enjoy your stay. I
            hope you’re having a great day and enjoying whatever you’re up to!
          </p>
        </div>
      </div>
      <div className='mt-10 mb-10'>
        <span className='font-dmSans text-gray-700 text-md'>
          The tools and Tech Stack that flow with me
        </span>
      </div>
      <TechStack />
      <div className='flex flex-col justify-start items-start gap-5 mx-auto mt-20 mb-10 font-dmSans text-left'>
        <h1 className='font-medium text-4xl'>GTKM.</h1>

        <div className='flex flex-col gap-5 text-lg'>
          <p>
            I'm{' '}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
                  Tazkiya Mujahid
                </span>
              </HoverCardTrigger>
              <HoverCardContent className='bg-transparent backdrop-blur-sm w-80'>
                <div>
                  <Image
                    src={tazkiya}
                    alt='Tazkiya'
                    width={300}
                    height={300}
                    className='rounded-md'
                  />
                </div>
              </HoverCardContent>
            </HoverCard>{' '}
            , a{' '}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
                  UI/UX
                </span>
              </HoverCardTrigger>
              <HoverCardContent className='bg-transparent backdrop-blur-sm w-80'>
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
                <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
                  Graphic Designer
                </span>
              </HoverCardTrigger>
              <HoverCardContent className='bg-transparent backdrop-blur-sm w-80'>
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
                <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
                  Information Systems
                </span>
              </HoverCardTrigger>
              <HoverCardContent className='bg-transparent backdrop-blur-sm w-80'>
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
            <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
              digital experiences
            </span>
            , blending my technical skills with a deep passion for design.
          </p>
          <p>
            In my professional journey, I immerse myself in the creative world
            of{' '}
            <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
              UI/UX
            </span>{' '}
            and{' '}
            <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
              Graphic Design
            </span>
            . I take joy in crafting visually compelling and{' '}
            <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
              user-centric
            </span>{' '}
            interfaces, infusing each project with a unique blend of creativity
            and functionality. My experience at{' '}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
                  Heulaula Studios
                </span>
              </HoverCardTrigger>
              <HoverCardContent className='bg-transparent backdrop-blur-sm w-80'>
                <div className='flex justify-between space-x-4'>
                  <Avatar>
                    <AvatarImage src='https://avatars.githubusercontent.com/u/132384789' />
                    <AvatarFallback>HS</AvatarFallback>
                  </Avatar>
                  <div className='space-y-1'>
                    <h4 className='font-semibold text-sm'>Heulaula Studios</h4>
                    <p className='text-sm'>
                      A tiny design outpost, embodies the futility of creative
                      endeavors. 🌏🥷
                    </p>
                    <div className='flex items-center pt-2'>
                      <CalendarDays className='opacity-70 mr-2 w-4 h-4' />{' '}
                      <span className='text-muted-foreground text-xs'>
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
            <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
              passion
            </span>
            . It’s where I find my{' '}
            <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
              creative spark
            </span>
            ,{' '}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className='bg-red-300/20 hover:bg-red-500 font-medium hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
                  turning abstract concepts into engaging and aesthetic
                  solutions.
                </span>
              </HoverCardTrigger>
              <HoverCardContent className='bg-transparent backdrop-blur-sm w-80'>
                <div>
                  <Image
                    src={menarik}
                    alt='MENARIK'
                    width={300}
                    height={300}
                    className='rounded-md'
                  />
                </div>
              </HoverCardContent>
            </HoverCard>
          </p>
        </div>
      </div>
      <RecentWork />
    </main>
  );
}
