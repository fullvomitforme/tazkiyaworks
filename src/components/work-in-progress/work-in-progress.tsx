import React from 'react';
import Image from 'next/image';

export default function WorkInProgress() {
  const workInProgressImage =
    'https://storage.onindonesia.id/tazkiyaworks/public/work-in-progress/not-finish.png';
  return (
    <div className='mx-auto flex flex-col items-center justify-center'>
      <Image
        src={workInProgressImage}
        alt='BOHOO'
        width={500}
        height={0}
        style={{ height: 'auto' }}
      />
    </div>
  );
}
