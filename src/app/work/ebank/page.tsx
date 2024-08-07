import WorkinProgress from '@/public/logos/workinprogress.png';
import Image from 'next/image';
import { badgeVariants, Badge } from '@/src/components/ui/badge';
import { Works } from '@/src/lib/data';
import ProjectGallery from '@/src/components/project/ProjectGallery';

const EbankPage = () => {
  const EbankWork = Works[1];

  let badgeText: string;

  // Set badgeText based on the tag
  switch (EbankWork.tag) {
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
    <section className='mx-auto p-4'>
      <div className='flex flex-col items-start justify-center space-y-5'>
        <h2 className='font-editorialNew text-lg font-bold text-highlight'>
          Heulaula Studios
        </h2>
        <Badge variant={EbankWork.tag} className='mb-2'>
          {badgeText}
        </Badge>
        <div className='rounded-lg border border-highlight p-4 text-highlight'>
          <p>{EbankWork.description}</p>
        </div>
        <Image
          src={EbankWork.imageSrc}
          width={500}
          height={500}
          alt=''
          className='rounded-lg'
        />
        <div className='flex w-full flex-col items-start justify-center space-y-5 border-y border-highlight p-4 text-highlight'>
          <div>
            <h2 className='text-lg font-medium tracking-widest'>ROLE</h2>
            <p>{EbankWork.position}</p>
          </div>
          <div>
            <h2 className='text-lg font-medium tracking-widest'>TEAM</h2>
            <p>Ebank Team</p>
          </div>
          <div>
            <h2 className='text-lg font-medium tracking-widest'>TIMELINE</h2>
            <p>Until Now</p>
          </div>
          <div>
            <h2 className='text-lg font-medium tracking-widest'>SKILLS</h2>
            <p>Visual Design</p>
          </div>
          <div>
            <h2 className='text-lg font-medium tracking-widest'>STATUS</h2>
            <p>Shipped with improvements</p>
          </div>
        </div>
      </div>
      <div className='rounded-lg py-5'>
        <ProjectGallery />
      </div>
    </section>
  );
};

export default EbankPage;
