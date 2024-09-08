'use client';

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

import { cn } from '@/src/lib/utils';

import Image from 'next/image';

import { Play, Pause, SpotifyLogo } from '@phosphor-icons/react';

const MusicCard = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  title: string;
  artist: string;
  coverArt: string;
  previewUrl?: string;
  songUrl?: string;
}) => {
  const { title, artist, coverArt, previewUrl, songUrl } = props;
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null);
  React.useEffect(() => {
    const audio = new Audio(previewUrl);
    setAudio(audio);
  }, [previewUrl]);

  const handlePlay = () => {
    if (isPlaying) {
      audio?.pause();
      setIsPlaying(false);
    } else {
      audio?.play();
      setIsPlaying(true);
    }
  };
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className='bg-transparent backdrop-blur-sm'>
        <HoverCardContentData src={coverArt} title={title} author={artist} />
        <div className='flex items-center gap-x-0.5'>
          <button
            className='flex w-1/4 items-center justify-center self-stretch rounded-sm bg-[#1DB954] py-1 text-foreground transition hover:bg-[#1DB954]/80'
            onClick={handlePlay}
          >
            {isPlaying ? (
              <Pause className='shrink-0 text-white' size={15} weight='fill' />
            ) : (
              <Play className='shrink-0 text-white' size={15} weight='fill' />
            )}
          </button>

          <a
            href={songUrl}
            target='_blank'
            className='text-gray-5 flex w-full items-center justify-center gap-x-1 whitespace-nowrap rounded-sm bg-red-300/20 py-1 font-dmSans text-sm font-medium backdrop-blur-sm transition-colors duration-100 hover:bg-red-300 hover:text-white'
          >
            <SpotifyLogo className='shrink-0' size={16} weight='fill' />
            Listen on Spotify
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

const HoverCardContentData = ({
  src,
  title,
  author,
}: {
  src: string;
  title: string;
  author: string;
}) => {
  return (
    <>
      <div className='relative aspect-square rounded-sm border'>
        <Image
          src={src}
          fill
          className='rounded-lg object-cover object-center'
          alt={`Album art for ${title} by ${author}`}
          quality={50}
          priority
        />
      </div>
      <div className='mb-2 mt-2 text-foreground'>
        <span className='block truncate font-medium leading-none'>{title}</span>
        <span className='text-sm text-foreground'>by {author}</span>
      </div>
    </>
  );
};

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardContentData,
  MusicCard,
};
