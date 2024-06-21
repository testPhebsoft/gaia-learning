import React from 'react';
import Header from '@/components/Header';
import GaiaLearn from '@/components/GaiaLearn';

const Page = () => {
  return (
    <div>
      <Header current="GAIA Learning" />
      <GaiaLearn />
    </div>
  );
};

export default Page;