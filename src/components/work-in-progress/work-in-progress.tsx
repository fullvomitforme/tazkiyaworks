import React from 'react';
import Image from 'next/image';

export default function WorkInProgress() {
  const workInProgressImage =
    'https://storage.onindonesia.id/tazkiyaworks/public/work-in-progress/not-finish.png';
  return (
    <div className='flex flex-col justify-center items-center mx-auto'>
      <Image
        src={workInProgressImage}
        alt='BOHOO'
        width={500}
        height={0}
        style={{ height: 'auto' }}
        className='mt-32 px-10'
      />
    </div>
  );
}
