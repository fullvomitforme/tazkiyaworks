import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import hguWorker from '@/public/running-design/hgu-worker.jpg';
import mitskiFanart from '@/public/running-design/mitski-fanart.jpg';
import novaNugas from '@/public/running-design/nova-nugas.jpg';
import novaUas from '@/public/running-design/nova-uas.jpg';
import playlist from '@/public/running-design/playlist.jpg';
import tbcDonation from '@/public/running-design/tbc-donation.jpg';

const RunningDesign = () => {
  return (
    <Marquee speed={100} autoFill>
      <div className='flex flex-row items-center'>
        <Image
          src={hguWorker}
          sizes='100vw'
          style={{ width: '250px', height: 'auto' }}
          alt='hgu-worker'
          className=' m-5 flex cursor-pointer rounded-lg'
          placeholder='blur'
          priority
        />
        <Image
          src={mitskiFanart}
          alt='mitski-fanart'
          sizes='100vw'
          style={{ width: '250px', height: 'auto' }}
          className='m-5 flex cursor-pointer rounded-lg'
          placeholder='blur'
          priority
        />
        <Image
          src={novaNugas}
          alt='nova-nugas'
          sizes='100vw'
          style={{ width: '250px', height: 'auto' }}
          className='m-5 flex cursor-pointer rounded-lg'
          placeholder='blur'
          priority
        />
        <Image
          src={novaUas}
          alt='nova-uas'
          sizes='100vw'
          style={{ width: '250px', height: 'auto' }}
          className='m-5 flex cursor-pointer rounded-lg'
          placeholder='blur'
          priority
        />
        <Image
          src={playlist}
          alt='playlist'
          sizes='100vw'
          style={{ width: '250px', height: 'auto' }}
          className='m-5 flex cursor-pointer rounded-lg'
          placeholder='blur'
          priority
        />
        <Image
          src={tbcDonation}
          alt='tbc-donation'
          sizes='100vw'
          style={{ width: '250px', height: 'auto' }}
          className='m-5 flex cursor-pointer rounded-lg'
          placeholder='blur'
          priority
        />
      </div>
    </Marquee>
  );
};

export default RunningDesign;
