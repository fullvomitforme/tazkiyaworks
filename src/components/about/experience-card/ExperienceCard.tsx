import { Experiences } from '@/src/lib/data';
import Image from 'next/image';

const ExperienceCard = () => {
	return (
		<section className='grid grid-cols-2 gap-5'>
			{Experiences.map((experience) => (
				<div
					className='border-2 border-orange-400 rounded-lg min-h-10 px-5 py-2 flex flex-row gap-2 items-center justify-between'
					key={experience.company}
				>
					<div className='flex flex-row gap-2 items-center'>
						<Image
							src={experience.imageSrc}
							alt={experience.company}
							width={89}
							height={89}
							className='rounded-lg mr-2'
						/>
						<div>
							<h2 className='font-medium'>{experience.company}</h2>
							<p>{experience.position}</p>
						</div>
					</div>
					<p className='items-end'>{experience.year}</p>
				</div>
			))}
		</section>
	);
};

export default ExperienceCard;
