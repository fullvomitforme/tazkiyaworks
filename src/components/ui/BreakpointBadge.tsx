// components/BreakpointBadge.tsx
import { useEffect, useState } from 'react';
import { Badge } from '@/src/components/ui/badge';

const BreakpointBadge: React.FC = () => {
	const [breakpoint, setBreakpoint] = useState<string>('');
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

	const getBreakpoint = (): void => {
		const screenWidth = window.innerWidth;

		if (screenWidth >= 1280) {
			setBreakpoint('xl');
		} else if (screenWidth >= 1024) {
			setBreakpoint('lg');
		} else if (screenWidth >= 768) {
			setBreakpoint('md');
		} else {
			setBreakpoint('sm');
		}

		setWindowWidth(screenWidth);
	};

	useEffect(() => {
		getBreakpoint();

		// Listen for window resize events to dynamically update the badge
		window.addEventListener('resize', getBreakpoint);

		return () => {
			// Remove the event listener on component unmount
			window.removeEventListener('resize', getBreakpoint);
		};
	}, []);

	return (
		<Badge
			variant='destructive'
			className='fixed bottom-10 left-10 z-20 text-2xl'
		>
			🔎 breakpoint: {breakpoint} and screensize: {windowWidth} px
		</Badge>
	);
};

export default BreakpointBadge;
