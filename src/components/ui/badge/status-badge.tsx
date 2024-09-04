import React from 'react';
import AnimationAvailable from '@/src/components/ui/available-animations';

export default function StatusBadge() {
  return (
    <div className='flex flex-row items-center justify-between space-x-1 rounded-full bg-zinc-600/50 px-5 py-1 font-dmSans text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-zinc-600/60'>
      <div className='flex items-center'>
        <AnimationAvailable />
      </div>
      <h1>Available for work</h1>
    </div>
  );
}
