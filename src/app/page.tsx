import RunningText from '@/src/components/ui/running-text/RunningText';
import MainCards from '../components/ui/cards/MainCards';

export default function Work() {
	return (
		<main className='flex flex-col justify-center items-center space-y-20'>
			<div className='container flex justify-center items-center'>
				<h1 className='font-normal text-3xl leading-relaxed'>
					I&apos;m Tazkiya Mujahid, a craftsman of{' '}
					<span className='text-red-400 font-editorialNew'>
						code, interfaces, and digital landscapes.
					</span>{' '}
					As a Junior Quality Assurance enthusiast hailing from Jakarta,
					I&apos;ve honed my skills in{' '}
					<span className='text-red-400 font-editorialNew'>
						testing automation, documentation, and more.
					</span>{' '}
					With a focus on precision and quality, I&apos;ve delved into{' '}
					<span className='text-red-400 font-editorialNew'>
						TypeScript, Node.js, Playwright, and React.
					</span>{' '}
					In the realm of design, I weave my creativity into{' '}
					<span className='text-red-400 font-editorialNew'>
						UI/UX aesthetics,
					</span>{' '}
					adding a splash of graphic design finesse to my tech repertoire.
					Let&apos;s collaborate on projects where technology and design
					converge seamlessly!
				</h1>
			</div>
			<RunningText />
			<div className='container'>
				<MainCards />
			</div>
		</main>
	);
}
