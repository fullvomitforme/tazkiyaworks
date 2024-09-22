import { Suspense } from 'react';
import { Skeleton } from '@/src/components/ui/skeleton';
import FooterDate from '@/src/components/footer/FooterDate';
export default function Footer() {
  return (
    <div className='mx-auto my-10 flex w-full max-w-sm flex-col items-center justify-center p-2 text-center font-dmSans text-sm font-medium text-foreground text-gray-700 md:max-w-full'>
      <h2>
        This site is also my learn-by-doing project, so it will always be a work
        in progress. Last updated:{' '}
        <Suspense fallback={<Skeleton className='h-4 w-24' />}>
          <FooterDate />
        </Suspense>
        .
      </h2>
      <p className='text-sm font-medium'>Tazkiya Works © 2024</p>
    </div>
  );
}
