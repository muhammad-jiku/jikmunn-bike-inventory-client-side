import React from 'react';
import Banner from '../Banner/Banner';
import BikeInventoryForHomePage from '../BikeInventoryForHomePage/BikeInventoryForHomePage/BikeInventoryForHomePage';
import Description from '../Description/Description';
import Location from '../Location/Location';
// import Features from '../Features/Features/Features';

const Home = () => {
  return (
    <>
      <Banner />
      {/* <Features /> */}
      <BikeInventoryForHomePage />
      <Description />
      <Location />
    </>
  );
};

export default Home;
