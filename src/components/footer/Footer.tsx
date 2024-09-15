import { Suspense } from 'react';
import { Skeleton } from '@/src/components/ui/skeleton';
import Link from 'next/link';

export default async function Footer() {
  return (
    <div className='flex flex-col justify-center items-center mx-auto my-10 mt-0 md:mt-0 font-dmSans font-medium text-center text-foreground text-gray-700 text-sm'>
      <h2>
        This site is also my learn-by-doing project, so it will always be a work
        in progress. Last updated:{' '}
        <Suspense fallback={<Skeleton className='w-24 h-4' />}>
          <FooterDate />
        </Suspense>
        .
      </h2>
      <p className='font-medium text-sm'>Tazkiya Works © 2024</p>
    </div>
  );
}

const FooterDate = async () => {
  const data = await fetch(
    'https://api.github.com/repos/fullvomitforme/tazkiyaworks/commits',
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
  ).then((res) => res.json());

  // hack lazy way to bypass rate limit without going through auth
  // to add proper stuff later!
  const lastCommit = !data.message
    ? data.map((commit: any) => commit.commit.committer.date)[0]
    : '';

  console.log(lastCommit);
  const formatDate = lastCommit
    ? new Date(lastCommit).toLocaleDateString()
    : '2023/11/07';
  return (
    <span className='bg-red-300/20 hover:bg-red-500 hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
      <Link href='https://github.com/fullvomitforme/tazkiyaworks'>
        {formatDate}
      </Link>
    </span>
  );
};
