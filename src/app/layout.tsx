import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Instrument_Serif } from 'next/font/google';
import Navbar from '@/src/components/navbar/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cn } from '@/src/lib/utils';
import Cursor from '@/src/components/ui/sticky-cursor';
import SplashScreen from '../components/ui/SplashScreen'; 
import SmoothScrolling from '../components/ui/SmoothScrolling';
import UmamiProvider from 'next-umami';
import { Suspense } from 'react';
import Loading from './loading';
import '@/src/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

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
  openGraph: {
    title: 'Tazkiya Works',
    description: 'Personal Site of Tazkiya Mujahid',
    url: 'https://tazkiyaworks.fun/',
    type: 'website',
    locale: 'en_US',
    siteName: 'TazkiyaWorks',
    images: [
      {
        url: 'https://storage.onindonesia.id/tazkiyaworks/public/og/og-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Tazkiya Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tazkiyaworks',
    creator: '@yaakiyaaa',
    images: 'https://storage.onindonesia.id/tazkiyaworks/public/og/og-card.jpg',
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
        <div className='fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] bg-repeat'></div>
        <Cursor />
        <SplashScreen />
        <Navbar />
        <Suspense fallback={<Loading />}>
          <SmoothScrolling>{children}</SmoothScrolling>
        </Suspense>
        <div className='noise'></div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}