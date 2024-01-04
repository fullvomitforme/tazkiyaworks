import Link from 'next/link';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Footer = () => {
	const works = [
		{
			label: 'behance',
			link: 'https://www.behance.net/andrewkdesigns',
		},
		{
			label: 'github',
			link: 'https://github.com/fullvomitforme',
		},
		{
			label: 'resume',
			link: 'https://tazkiya.mujahid.notion.site',
		},
	];

	const talks = [
		{
			label: 'linkedin',
			link: 'https://www.linkedin.com/in/tazkiya-mujahid/',
		},
		{
			label: 'email',
			link: 'mailto:tazkiyadigitalarchive@gmail.com',
		},
	];
	return (
		<footer className='bg-orange-300 p-10'>
			<div className='grid grid-cols-2'>
				<div className='flex flex-col'>
					<div className='flex flex-row gap-20'>
						<div className='flex flex-col'>
							<h1 className='font-medium text-4xl mb-2'>for work</h1>
							{works.map((work) => (
								<Link href={work.link} key={work.label}>
									{work.label}
								</Link>
							))}
						</div>
						<div className='flex flex-col'>
							<h1 className='font-medium text-4xl mb-2'>for talk</h1>
							{talks.map((talk) => (
								<Link href={talk.link} key={talk.label}>
									{talk.label}
								</Link>
							))}
						</div>
					</div>
					<div className='mt-auto'>
						<h1 className='text-lg font-medium mb-2'>
							© 2023 Tazkiya Mujahid. All Rights Reserved.
						</h1>
						<p className='text-sm font-normal'>
							<br />
							The content and works presented on this portfolio are the property
							of Tazkiya Mujahid, unless otherwise noted.
							<br />
							Designed and developed with passion in Jakarta, Indonesia. Powered
							by creativity, technology, and the pursuit of excellence.
							<br />
							For inquiries, collaborations, or just a friendly hello, feel free
							to reach out at{' '}
							<Link
								href={'mailto:tazkiyadigitalarchive@gmail.com'}
								className='font-medium'
							>
								tazkiyadigitalarchive[at]gmail.com
							</Link>
							<br />
							Thank you for visiting!
						</p>
					</div>
				</div>
				<div className='m-auto'>
					<Link href={'/'}>
						<Image
							src={'/logos/tazkiya-works-logo.svg'}
							alt='tazlogo'
							width={600}
							height={0}
							style={{ height: 'auto' }}
						></Image>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
