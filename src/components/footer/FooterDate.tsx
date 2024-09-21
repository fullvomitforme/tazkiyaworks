'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Skeleton } from '@/src/components/ui/skeleton';

const FooterDate = () => {
  const [lastCommitDate, setLastCommitDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/footerdate');
        const data = await res.json();
        setLastCommitDate(data.lastCommitDateZ);
      } catch (error) {
        console.error('Error fetching footer date:', error);
        setLastCommitDate('2023/11/07'); // Fallback date
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Skeleton className='w-24 h-4' />;
  }

  return (
    <span className='bg-red-300/20 hover:bg-red-500 hover:text-white underline underline-offset-4 hover:underline decoration-2 decoration-red-500'>
      <Link href='https://github.com/fullvomitforme/tazkiyaworks'>
        {lastCommitDate}
      </Link>
    </span>
  );
};

export default FooterDate;
