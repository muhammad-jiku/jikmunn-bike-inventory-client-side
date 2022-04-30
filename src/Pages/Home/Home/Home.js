import React from 'react';
import Banner from '../Banner/Banner';
import BikeInventoryForHomePage from '../BikeInventoryForHomePage/BikeInventoryForHomePage';
import Description from '../Description/Description';
import Features from '../Features/Features/Features';

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <BikeInventoryForHomePage />
      <Description />
    </>
  );
};

export default Home;
