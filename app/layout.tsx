import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import BreakpointBadge from '@/components/ui/BreakpointBadge';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const PPNeueMontreal = localFont({
	src: [
		{
			path: '/static-fonts/PPNeueMontreal-Book.otf',
			weight: '300',
		},
		{
			path: '/static-fonts/PPNeueMontreal-Bold.otf',
			weight: '700',
		},
		{
			path: '/static-fonts/PPNeueMontreal-Italic.otf',
			weight: '400',
		},
		{
			path: '/static-fonts/PPNeueMontreal-Medium.otf',
			weight: '500',
		},
		{
			path: '/static-fonts/PPNeueMontreal-SemiBolditalic.otf',
			weight: '600',
		},
		{
			path: '/static-fonts/PPNeueMontreal-Thin.otf',
			weight: '100',
		},
	],
	variable: '--font-neue-montreal',
});

const PPEditorialNew = localFont({
	src: [
		{
			path: '/static-fonts/PPEditorialNew-Italic.otf',
			weight: '400',
		},
		{
			path: '/static-fonts/PPEditorialNew-Regular.otf',
			weight: '300',
		},
		{
			path: '/static-fonts/PPEditorialNew-UltraBold.otf',
			weight: '800',
		},
		{
			path: '/static-fonts/PPEditorialNew-UltraBoldItalic.otf',
			weight: '800',
		},
		{
			path: '/static-fonts/PPEditorialNew-Ultralight.otf',
			weight: '200',
		},
		{
			path: '/static-fonts/PPEditorialNew-UltralightItalic.otf',
			weight: '200',
		},
	],
	variable: '--font-editorial-new',
});

export const metadata: Metadata = {
	title: 'Tazkiya Mujahid | Your Favorites Destroyer',
	description:
		'Crafted with passion and precision, Tazkiya`s web portfolio reflects the seamless blend of technology and design. 🚀🎨',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					PPNeueMontreal.variable,
					PPEditorialNew.variable,
				)}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
