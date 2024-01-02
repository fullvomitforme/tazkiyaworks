import Link from 'next/link';

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
		<Link href={'/'}>
			<div className='bg-alabaster rounded-xl shadow-2xl overflow-hidden py-10 px-10 w-full flex flex-col justify-center items-start gap-3'>
				<div className='text-[1.8rem] font-bold font-editorialNew relative top-5 text-burntsienna'>
					{number}
				</div>
				<div className='ml-10'>
					<span className='text-black text-[1.4rem] font-[500] font-neueMontreal'>
						{position} @{' '}
					</span>
					<span className='text-red-500 text-[1.4rem] font-[500] font-neueMontreal underline'>
						{company}
					</span>
				</div>
				<div className='bg-orange-100 bg-opacity-40 rounded-lg p-1'>
					<div>
						<span className='text-amber-700 text-[0.8rem] font-[700] font-neueMontreal'>
							{caseStudyLink}
						</span>
					</div>
				</div>
				<img
					className='w-full rounded-xl'
					src={imageSrc}
					alt={`Works at ${company}`}
				/>
				<div className='w-full'>
					<span className='text-black text-[1.5rem] font-[500] font-neueMontreal'>
						{description}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default WorksCard;
