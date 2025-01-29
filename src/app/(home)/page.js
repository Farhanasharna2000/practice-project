import React from 'react';
import BannerPage from './banner/page';
import CardPage from './card/page';

const HomePage = () => {
  return (
    <div>
      <BannerPage />
      <CardPage></CardPage>
    </div>
  );
};

export default HomePage;