import React from 'react';
import Banner from '../Banner/Banner';
import Description from '../Description/Description';
import BikeInventoryForHomePage from '../BikeInventoryForHomePage/BikeInventoryForHomePage/BikeInventoryForHomePage';
import Location from '../Location/Location';
import TestimonialForHomePage from '../TestimonialForHomePage/TestimonialForHomePage';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <Description />
      <BikeInventoryForHomePage />
      <Location />
      <TestimonialForHomePage />
      <Services />
    </div>
  );
};

export default Home;
