import WorkinProgress from '@/public/logos/workinprogress.png';
import Image from 'next/image';

const HeulaulastudiosPage = () => {
  return (
    <section className='container mx-auto p-4'>
      <div className='flex items-center justify-center'>
        <Image src={WorkinProgress} alt='Work in Progress' sizes='100vw' />
      </div>
    </section>
  );
};

export default HeulaulastudiosPage;
