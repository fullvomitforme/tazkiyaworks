'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Skeleton } from '@/src/components/ui/skeleton';

const FooterDate = () => {
  const [lastCommitDate, setLastCommitDate] = useState<string | null>(null);

  useEffect(() => {
    const fetchLastCommitDate = async () => {
      const response = await fetch(
        'https://api.github.com/repos/fullvomitforme/tazkiyaworks/commits',
        {
          method: 'GET',
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );
      const data = await response.json();

      // Handle rate limit or error response
      const lastCommit = !data.message
        ? data.map((commit: any) => commit.commit.committer.date)[0]
        : '';

      const formattedDate = lastCommit
        ? new Date(lastCommit).toLocaleDateString()
        : '2023/11/07';

      setLastCommitDate(formattedDate);
    };

    fetchLastCommitDate();
  }, []);

  return lastCommitDate ? (
    <span className='bg-red-300/20 underline decoration-red-500 decoration-2 underline-offset-4 hover:bg-red-500 hover:text-white hover:underline'>
      <Link href='https://github.com/fullvomitforme/tazkiyaworks'>
        {lastCommitDate}
      </Link>
    </span>
  ) : (
    <Skeleton className='h-4 w-24' />
  );
};

export default FooterDate;
