import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const RunningDesign = () => {
	return (
		<Marquee>
			<div className='flex flex-row items-center justify-around'>
				{/* Duplicate some images at the end to maintain spacing during looping */}
				<Image
					src={'/running-design/hgu-worker.jpg'}
					alt='hgu-worker'
					width={250}
					height={250}
					className='rounded-lg mr-[250px]'
				/>
				<Image
					src={'/running-design/mitski-fanart.jpg'}
					alt='mitski-fanart'
					width={250}
					height={250}
					className='rounded-lg mr-[250px]'
				/>
				<Image
					src={'/running-design/nova-nugas.jpg'}
					alt='nova-nugas'
					width={250}
					height={250}
					className='rounded-lg mr-[250px]'
				/>
				<Image
					src={'/running-design/nova-uas.jpg'}
					alt='nova-uas'
					width={250}
					height={250}
					className='rounded-lg mr-[250px]'
				/>
				<Image
					src={'/running-design/playlist.jpg'}
					alt='playlist'
					width={250}
					height={250}
					className='rounded-lg mr-[250px]'
				/>
				<Image
					src={'/running-design/tbc-donation.jpg'}
					alt='tbc-donation'
					width={250}
					height={250}
					className='rounded-lg mr-[250px]'
				/>
				{/* Duplicate some images at the beginning to maintain spacing during looping */}
				<Image
					src={'/running-design/hgu-worker.jpg'}
					alt='hgu-worker'
					width={250}
					height={250}
					className='rounded-lg mr-[250px]'
				/>
				<Image
					src={'/running-design/mitski-fanart.jpg'}
					alt='mitski-fanart'
					width={250}
					height={250}
					className='rounded-lg mr-[250px]'
				/>
			</div>
		</Marquee>
	);
};

export default RunningDesign;
