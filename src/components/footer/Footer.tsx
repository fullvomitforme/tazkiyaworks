import Link from 'next/link';
import Image from 'next/image';
import Sprinkle from '@/public/acc/sprinkle.png';

const Footer = () => {
  const works = [
    {
      label: 'behance',
      link: 'https://www.behance.net/andrewkdesigns',
    },
    {
      label: 'github',
      link: 'https://github.com/fullvomitforme',
    },
    {
      label: 'resume',
      link: 'https://tazkiya.mujahid.notion.site',
    },
  ];

  const talks = [
    {
      label: 'linkedin',
      link: 'https://www.linkedin.com/in/tazkiya-mujahid/',
    },
    {
      label: 'email',
      link: 'mailto:tazkiyadigitalarchive@gmail.com',
    },
  ];
  return (
    <footer className='relative m-4 rounded-lg bg-highlight p-4 text-white-smoke'>
      <div className='flex flex-col space-y-5'>
        <div className='flex flex-row space-x-10'>
          <div className='forwork'>
            <h1 className='text-xl font-bold'>for work</h1>
            {works.map((work) => (
              <Link
                key={work.label}
                href={work.link}
                className='flex flex-col text-sm'
              >
                {work.label}
              </Link>
            ))}
          </div>
          <div className='fortalk'>
            <h1 className='text-xl font-bold'>for talk</h1>
            {talks.map((talk) => (
              <Link
                key={talk.label}
                href={talk.link}
                className='flex flex-col text-sm'
              >
                {talk.label}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-col space-y-5'>
          <h2 className='text-[11px] font-bold'>
            © 2024 Tazkiya Mujahid. All Rights Reserved.
          </h2>
          <p className='text-[11px]'>
            The content and works presented on this portfolio are the property
            of Tazkiya Mujahid, unless otherwise noted. Designed and developed
            with passion in Jakarta, Indonesia. Powered by creativity,
            technology, and the pursuit of excellence. For inquiries,
            collaborations, or just a friendly hello, feel free to reach out at{' '}
            <Link
              href={'mailto:tazkiyadigitalarchive@gmail.com'}
              className='inline-block font-bold'
            >
              tazkiyadigitalarchive[at]gmail.com
            </Link>{' '}
            <br />
            Thank you for your stay!
          </p>
        </div>
      </div>
      <div className='absolute left-[250px] top-[23%] translate-y-[-23%] transform'>
        <Image src={Sprinkle} alt='sprinkle!' />
      </div>
    </footer>
  );
};

export default Footer;
