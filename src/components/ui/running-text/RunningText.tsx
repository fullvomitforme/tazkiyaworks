import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const RunningText = () => {
  return (
    <Marquee speed={30}>
      <Image
        src={'/logos/running-text-tazkiya-works.png'}
        alt='Alt Text for Running Text Tazkiya Works Logo Image Marquee Animation Effect'
        width={2672}
        height={150}
        className='p-2'
      />
    </Marquee>
  );
};

export default RunningText;
