import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/src/components/ui/badge';

export interface WorksCardProps {
  number: string;
  tag: 'reflection' | 'casestudy' | 'underconstruction';
  position: string;
  company: string;
  caseStudyLink: string;
  imageSrc: string;
  description: string;
}

const WorksCard: React.FC<WorksCardProps> = ({
  number,
  tag,
  position,
  company,
  caseStudyLink,
  imageSrc,
  description,
}) => {
  let badgeText: string;

  // Set badgeText based on the tag
  switch (tag) {
    case 'reflection':
      badgeText = '📓 REFLECTION';
      break;
    case 'casestudy':
      badgeText = '📝 CASE STUDY';
      break;
    case 'underconstruction':
      badgeText = '🚧 UNDER CONSTRUCTION';
      break;
    default:
      badgeText = ''; // Add a default value or handle it as per your needs
  }

  return (
    <Link href={caseStudyLink}>
      <section className='m-4 flex flex-col items-start space-y-2 rounded-lg border-2 border-highlight p-4'>
        <Badge variant={tag} className='mb-2'>
          {badgeText}
        </Badge>
        <Image
          src={imageSrc}
          alt={company}
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={500}
          height={300}
          className='my-5 rounded-lg'
        />
        <div className='mb-4 text-lg'>
          <span className='font-medium'>{position} @</span>
          <span className='font-editorialNew font-medium text-highlight'>
            {' '}
            {company}
          </span>
        </div>
        <div>{description}</div>
      </section>
    </Link>
  );
};

export default WorksCard;
