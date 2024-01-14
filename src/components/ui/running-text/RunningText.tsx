import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import RunningTextTazkiya from '@/public/logos/running-text-tazkiya-works.png';
import TazkiyaWorks from '@/public/marquee/tazkiya_works.png';
import Earth from '@/public/marquee/earth.png';
import YangBenerAje from '@/public/marquee/yang_bener_aje.svg';
import RugiDong from '@/public/marquee/rugi_dong.svg';
import YangBenerAjeEmoji from '@/public/marquee/yang_bener_aja_emoji.png';
import RugiDongEmoji from '@/public/marquee/rugi_dong_emoji.png';

const RunningText = () => {
  return (
    <div className='border-y-2 border-new-blue'>
      <Marquee speed={40} autoFill>
        {/* <Image
          src={TazkiyaWorks}
          alt='Running Text Tazkiya Works Logo Image Marquee Animation Effect'
          className='m-5 flex cursor-pointer'
        />
        <Image
          src={Earth}
          alt='Running Text Tazkiya Works Logo Image Marquee Animation Effect'
          className='m-5 flex cursor-pointer'
        /> */}

        <Image
          src={YangBenerAjeEmoji}
          alt=''
          className='m-5 flex cursor-pointer'
        />
        <Image src={YangBenerAje} alt='' className='m-5 flex cursor-pointer' />
        <Image src={RugiDongEmoji} alt='' className='m-5 flex cursor-pointer' />
        <Image src={RugiDong} alt='' className='m-5 flex cursor-pointer' />
      </Marquee>
    </div>
  );
};

export default RunningText;
