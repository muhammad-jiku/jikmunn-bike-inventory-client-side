import React from 'react';
import yamaha from '../../../Images/yamaha.png';
import bajaj from '../../../Images/bajaj.png';
import mahindra from '../../../Images/mahindra.jpg';
import hero from '../../../Images/hero.png';
import suzuki from '../../../Images/suzuki.png';
import tvs from '../../../Images/tvs.png';
import runner from '../../../Images/runner.jpg';
import kawaski from '../../../Images/kawaski.png';
import './Partners.css';
import { Container, Image } from 'react-bootstrap';

const Partners = () => {
  return (
    <div>
      <h1 className="text-center">
        Brand we have been partners with
        {/* We have partnered with the best shipping carriers around the world */}
      </h1>
      <Container className="partnersImage">
        <Image src={yamaha} alt="" />
        <Image src={bajaj} alt="" />
        <Image src={tvs} alt="" />
        <Image src={hero} alt="" />
        <Image src={kawaski} alt="" />
        <Image src={runner} alt="" />
        <Image src={suzuki} alt="" />
        <Image src={mahindra} alt="" />
      </Container>
    </div>
  );
};

export default Partners;
