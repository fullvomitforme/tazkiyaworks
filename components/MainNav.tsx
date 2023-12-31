'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

const MainNav = () => {
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
		<div className='flex space-x-8'>
			{routes.map((route) => (
				<Link
					key={route.label}
					href={route.href}
					className={clsx(
						'font-neueMontreal font-[500] uppercase leading-tight p-2 text-[1.5rem]',
						{
							'bg-white bg-opacity-70 rounded-[32px] border border-black':
								route.active,
						},
					)}
				>
					{route.label}
				</Link>
			))}
		</div>
	);
};

export default MainNav;
