import React from 'react';
import Banner from '../Banner/Banner';
import BikeInventoryForHomePage from '../BikeInventoryForHomePage/BikeInventoryForHomePage/BikeInventoryForHomePage';
import Description from '../Description/Description';
import Location from '../Location/Location';
import Services from '../Services/Services';
import TestimonyAndLocation from '../TestimonyAndLocation/TestimonyAndLocation';
// import Testimonials from '../../Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Banner />
      <Description />
      <BikeInventoryForHomePage />
      <Location />
      <TestimonyAndLocation />
      <Services />
      {/* <Testimonials /> */}
      {/* <Location /> */}
    </>
  );
};

export default Home;
