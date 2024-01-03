import Link from 'next/link';
import Image from 'next/image';

interface WorksCardProps {
	number: string;
	position: string;
	company: string;
	caseStudyLink: string;
	imageSrc: string;
	description: string;
}

const WorksCard: React.FC<WorksCardProps> = ({
	number,
	position,
	company,
	caseStudyLink,
	imageSrc,
	description,
}) => {
	return (
		<div className='bg-gray-200 flex flex-row items-start justify-start p-5 space-y-5 rounded-2xl space-x-5 my-10'>
			<Image
				src={'/work/heulaulastudios_work.jpg'}
				alt={company}
				width={484}
				height={420}
				className='rounded-2xl'
			/>
			<div className='flex flex-col space-y-5'>
				<div className='flex flex-row items-start justify-start space-x-2 text-sm font-bold'>
					<Link href={'/'}>
						<div className='bg-gray-300 rounded-full py-1 px-2'>
							<span>🚧 UNDER CONSTRUCTION</span>
						</div>
					</Link>
					<Link href={'/'}>
						<div className='bg-gray-300 rounded-full py-1 px-2'>
							<span>📓 STUDY CASE</span>
						</div>
					</Link>
				</div>
				<div>
					<h1 className='text-3xl'>
						{position} @{' '}
						<span className='text-red-400 font-editorialNew'>{company}</span>
					</h1>
					<p>{description}</p>
				</div>
				<div className='pt-10'>
					<Link
						href={caseStudyLink}
						className='bg-red-400 rounded-full py-1 px-2 leading-tight tracking-widest hover:bg-red-200 hover:rounded-full transition-all duration-300 ease-in-out'
					>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default WorksCard;
