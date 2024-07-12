import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/src/components/navbar/Navbar';
import localFont from 'next/font/local';
import { cn } from '@/src/lib/utils';
import Footer from '@/src/components/footer/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Cursor from '@/src/components/ui/sticky-cursor';

const PPNeueMontreal = localFont({
  src: [
    {
      path: '../lib/static-fonts/PPNeueMontreal-Book.otf',
      weight: '300',
    },
    {
      path: '../lib/static-fonts/PPNeueMontreal-Bold.otf',
      weight: '700',
    },
    {
      path: '../lib/static-fonts/PPNeueMontreal-Italic.otf',
      weight: '400',
    },
    {
      path: '../lib/static-fonts/PPNeueMontreal-Medium.otf',
      weight: '500',
    },
    {
      path: '../lib/static-fonts/PPNeueMontreal-SemiBolditalic.otf',
      weight: '600',
    },
    {
      path: '../lib/static-fonts/PPNeueMontreal-Thin.otf',
      weight: '100',
    },
  ],
  variable: '--font-neue-montreal',
});

const PPEditorialNew = localFont({
  src: [
    {
      path: '../lib/static-fonts/PPEditorialNew-Italic.otf',
      weight: '400',
    },
    {
      path: '../lib/static-fonts/PPEditorialNew-Regular.otf',
      weight: '300',
    },
    {
      path: '../lib/static-fonts/PPEditorialNew-Ultrabold.otf',
      weight: '800',
    },
    {
      path: '../lib/static-fonts/PPEditorialNew-UltraboldItalic.otf',
      weight: '800',
    },
    {
      path: '../lib/static-fonts/PPEditorialNew-Ultralight.otf',
      weight: '200',
    },
    {
      path: '../lib/static-fonts/PPEditorialNew-UltralightItalic.otf',
      weight: '200',
    },
  ],
  variable: '--font-editorial-new',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          PPNeueMontreal.variable,
          PPEditorialNew.variable,
          inter.variable
        )}
      >
        {/* <Cursor /> */}
        <Navbar />
        {/* {children} */}
        {/* <Footer /> */}
        <SpeedInsights />
      </body>
    </html>
  );
}
