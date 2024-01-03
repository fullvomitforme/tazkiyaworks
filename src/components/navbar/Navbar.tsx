import TazkiyaWorksLogo from '@/src/components/ui/tazkiyaworks-logo';
import Link from 'next/link';
import Routes from '@/src/components/navbar/routes/Routes';

const Navbar = () => {
	return (
		<nav className='container flex flex-row justify-center items-center space-x-5 my-10'>
			<Link href={'/'} className='p-2'>
				<TazkiyaWorksLogo />
			</Link>
			<div className='p-2'>
				<Routes />
			</div>
		</nav>
	);
};

export default Navbar;
