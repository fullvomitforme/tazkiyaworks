import TazkiyaWorksLogo from '@/src/components/ui/tazkiyaworks-logo';
import Link from 'next/link';
import Routes from '@/src/components/navbar/routes/Routes';

const Navbar = () => {
	return (
		<nav className='container flex flex-row justify-center items-center space-x-5 my-20'>
			<div className='text-[30px]'>
				<Link href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>🕺🏻💃🏻</Link>
			</div>
			<div className='p-2'>
				<Routes />
			</div>
		</nav>
	);
};

export default Navbar;
