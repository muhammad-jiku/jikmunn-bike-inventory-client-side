import React from 'react';
import Banner from '../Banner/Banner';
import BikeInventoryForHomePage from '../BikeInventoryForHomePage/BikeInventoryForHomePage/BikeInventoryForHomePage';
import Welcome from '../Welcome/Welcome';
import Location from '../Location/Location';
import Features from '../Features/Features/Features';
import Partners from '../Partners/Partners';
// import Features from '../Features/Features/Features';

const Home = () => {
  return (
    <>
      <Banner />
      <Welcome />
      <Features />
      <BikeInventoryForHomePage />
      <Partners />
      <Location />
    </>
  );
};

export default Home;
