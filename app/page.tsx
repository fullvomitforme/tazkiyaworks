'use client';

import BreakpointBadge from '@/components/ui/BreakpointBadge';
import MainCards from '@/components/MainCards';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Work() {
	return (
		<main>
			<BreakpointBadge />
			<div className='flex flex-col items-center justify-center'>
				<div className='w-[93%]'>
					<h1 className='main-text my-10'>
						I&apos;m Tazkiya Mujahid, a craftsman of{' '}
						<span className='standout-text'>
							code, interfaces, and digital landscapes.{' '}
						</span>{' '}
						As a Junior Quality Assurance enthusiast hailing from Jakarta,
						I&apos;ve honed my skills in testing automation, documentation, and
						more. With a focus on precision and quality, I&apos;ve delved into{' '}
						<span className='standout-text'>
							TypeScript, Node.js, Playwright, and React.
						</span>{' '}
						In the realm of design, I weave my creativity into UI/UX{' '}
						<span className='standout-text'>aesthetics,</span> adding a splash
						of graphic design finesse to my tech repertoire.{' '}
						<span className='standout-text'>Let&apos;s collaborate</span> on
						projects where technology and design converge seamlessly!
					</h1>
				</div>
				<div className='my-10'>
					<Marquee speed={50} pauseOnHover={true}>
						<Image
							src={'/tazworks_running_text.svg'}
							alt='Running Text Tazkiya Works'
							width={2500}
							height={0}
							style={{ height: 'auto' }}
							className='p-4'
						></Image>
					</Marquee>
				</div>
			</div>
			<div className='px-12'>
				<MainCards />
			</div>
		</main>
	);
}
