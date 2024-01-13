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
    <div className='my-10 flex flex-row items-start justify-start space-x-5 space-y-5 rounded-2xl bg-gray-200 p-5'>
      <Image
        src={'/work/heulaulastudios_work.jpg'}
        alt={company}
        width={484}
        height={420}
        className='rounded-2xl'
      />
      <div className='flex flex-col space-y-10'>
        <div className='flex flex-row items-start justify-start space-x-2 text-sm font-bold'>
          <Link href={'/'}>
            <div className='rounded-full bg-gray-300 px-2 py-1'>
              <span>🚧 UNDER CONSTRUCTION</span>
            </div>
          </Link>
          <Link href={'/'}>
            <div className='rounded-full bg-gray-300 px-2 py-1'>
              <span>📓 STUDY CASE</span>
            </div>
          </Link>
        </div>
        <div>
          <h1 className='text-3xl'>
            {position} @{' '}
            <span className='font-editorialNew text-red-400'>{company}</span>
          </h1>
          <p>{description}</p>
        </div>
        <div>
          <Link
            href={caseStudyLink}
            className='rounded-full bg-red-400 px-3 py-2 uppercase tracking-wide transition-all duration-300 ease-in-out hover:rounded-full hover:bg-red-200'
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
