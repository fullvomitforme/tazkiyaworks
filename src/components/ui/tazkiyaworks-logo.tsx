import Image from 'next/image';

import React from 'react';

const TazkiyaWorksLogo = () => {
  return (
    <>
      <Image
        src={'/logos/tazkiya-works-logo.svg'}
        alt='Tazkiya Works Logo'
        width={121}
        height={63}
      />
    </>
  );
};

export default TazkiyaWorksLogo;
