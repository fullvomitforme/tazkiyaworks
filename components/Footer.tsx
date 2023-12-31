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
		<footer className='bg-jade h-[573px] m-[32px] rounded-[32px] flex flex-row items-center justify-center'>
			<div className='flex flex-col items-start justify-start'>
				<div className='m-[57px] flex flex-row items-start justify-between gap-[100px]'>
					<div className='forwork'>
						<h1 className='font-[500] text-[64px]'>for work</h1>
						{works.map((work) => (
							<Link
								key={work.label}
								href={work.link}
								className='flex flex-col font-[500] text-[34px]'
							>
								{work.label}
							</Link>
						))}
					</div>
					<div className='fortalk'>
						<h1 className='font-[500] text-[64px]'>for talk</h1>
						{talks.map((talk) => (
							<Link
								key={talk.label}
								href={talk.link}
								className='flex flex-col font-[500] text-[34px]'
							>
								{talk.label}
							</Link>
						))}
					</div>
				</div>
				<div className='mx-[57px] my-[20px]'>
					<h1 className='text-lg font-[500]'>
						© 2023 Tazkiya Mujahid. All Rights Reserved.
					</h1>
					<p className='text-sm font-[500]'>
						<br />
						The content and works presented on this portfolio are the property
						of Tazkiya Mujahid, unless otherwise noted.
						<br />
						Designed and developed with passion in Jakarta, Indonesia. Powered
						by creativity, technology, and the pursuit of excellence.
						<br />
						For inquiries, collaborations, or just a friendly hello, feel free
						to reach out at tazkiyadigitalarchive[at]gmail.com
						<br />
						Thank you for visiting!
					</p>
				</div>
			</div>
			<div className='flex flex-row m-[32px]'>
				<Link href={'/'}>
					<Image
						src={'/tazworks_logo.svg'}
						alt='tazlogo'
						width={600}
						height={0}
						style={{ height: 'auto' }}
					></Image>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
