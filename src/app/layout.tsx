import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Instrument_Serif } from 'next/font/google';
import '@/src/styles/globals.css';
import Navbar from '@/src/components/navbar/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cn } from '@/src/lib/utils';
import Cursor from '@/src/components/ui/sticky-cursor';
import SplashScreen from '../components/ui/SplashScreen'; 
import SmoothScrolling from '../components/ui/SmoothScrolling';
import UmamiProvider from 'next-umami';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  title: 'Tazkiya Mujahid',
  description: 'Personal Site of Tazkiya Mujahid',
  icons: {
    icon: '/favicon/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <UmamiProvider websiteId='2137f71a-6969-41a3-a928-4925dd3dfe12' />
      </head>
      <body className={cn('', dmSans.variable, instrumentSerif.variable)}>
        <div className='bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] -z-10 fixed inset-0 bg-white bg-[size:6rem_4rem] bg-repeat w-full h-full'></div>
        <Cursor />
        <SplashScreen />
        <Navbar />
        <SmoothScrolling>{children}</SmoothScrolling>
        <SpeedInsights />
        <div className='noise'></div>
      </body>
    </html>
  );
}