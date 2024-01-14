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
  return <section className='min-h-[423px] bg-red-50'></section>;
};

export default WorksCard;
