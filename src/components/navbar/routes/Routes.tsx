'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

const Routes = () => {
	const router = useRouter();
	const pathname = usePathname();

	const routes = [
		{ label: 'Work', href: '/', active: pathname === '/' },
		{ label: 'About', href: '/about', active: pathname === '/about' },
		{
			label: 'Resume',
			href: 'https://tazkiyamujahid.notion.site/Tazkiya-Anafsi-Al-Mujahid-Resume-da37e36e6635439da6f41a64ffa02e00?pvs=4',
		},
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/tazkiya-mujahid/' },
		{
			label: 'Email',
			href: 'mailto:tazkiyadigitalarchive@gmail.com?subject=Hello%20Tazkiya!',
		},
	];

	return (
		<div className='space-x-3'>
			{routes.map((route) => (
				<Link
					key={route.label}
					href={route.href}
					className={clsx(
						'uppercase font-normal text-lg leading-tight tracking-widest px-3 py-1 hover:bg-highlight hover:rounded-full hover:text-white-smoke transition-all duration-300 ease-in-out',
						{
							'bg-highlight rounded-full text-white-smoke': route.active,
						},
					)}
				>
					{route.label}
				</Link>
			))}
		</div>
	);
};

export default Routes;
