import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Instrument_Serif } from 'next/font/google';
import '@/src/styles/globals.css';
import Navbar from '@/src/components/navbar/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cn } from '@/src/lib/utils';
import Cursor from '@/src/components/ui/sticky-cursor';
import SplashScreen from '../components/ui/SplashScreen'; 

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
  title: 'Tazkiya Mujahid | Your Favorites Destroyer',
  description:
    'Crafted with passion and precision, Tazkiya`s web portfolio reflects the seamless blend of technology and design. 🚀🎨',
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
      <body className={cn('', dmSans.variable, instrumentSerif.variable)}>
        <div className='absolute inset-0 -z-10 h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'></div>
        <Cursor />
        <SplashScreen />
        <Navbar />
        {children}
        <SpeedInsights />
        <div className='noise'></div>
      </body>
    </html>
  );
}