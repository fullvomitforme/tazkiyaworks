import { Experiences } from '@/src/lib/data';
import Image from 'next/image';

const ExperienceCard = () => {
  return (
    <section className='grid grid-cols-2 gap-5'>
      {Experiences.map((experience) => (
        <div
          className='flex min-h-10 flex-row items-center justify-between gap-2 rounded-lg border-2 border-orange-400 px-5 py-2'
          key={experience.company}
        >
          <div className='flex flex-row items-center gap-2'>
            <Image
              src={experience.imageSrc}
              alt={experience.company}
              width={89}
              height={89}
              className='mr-2 rounded-lg'
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
