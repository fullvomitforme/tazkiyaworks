import React from 'react';
import TazkiyaWorksLogo from '@/components/ui/tazkiyaworks-logo';
import Link from 'next/link';
import MainNav from './MainNav';

const Navbar = () => {
	return (
		<nav className='flex items-center justify-center p-8 space-x-8 h-[15rem] my-15'>
			<div>
				<Link href={'/'}>
					<TazkiyaWorksLogo />
				</Link>
			</div>
			<div>
				<MainNav />
			</div>
		</nav>
	);
};

export default Navbar;
