import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import carouselImage_1 from '../../../Images/carousel_1.jpg';
import carouselImage_2 from '../../../Images/carousel_2.jpg';
import carouselImage_3 from '../../../Images/carousel_3.jpg';
import carouselImage_4 from '../../../Images/carousel_4.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <Carousel variant="dark" interval={null}>
        <Carousel.Item className="carouselItem">
          <Image
            className="d-block w-100"
            src={carouselImage_1}
            alt="First slide"
            fluid
          />
          <Carousel.Caption className="carouselCaption">
            <h1>
              <span className="spanText">UNLOCK</span> THE POTENTIAL
            </h1>
            <h3>business from your website</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <Image
            className="d-block w-100"
            src={carouselImage_2}
            alt="Second slide"
            fluid
          />

          <Carousel.Caption className="carouselCaption">
            <h1>
              <span className="spanText">REALITY</span> IS JUST
            </h1>
            <h3>your perception</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <Image
            className="d-block w-100"
            src={carouselImage_3}
            alt="Third slide"
            fluid
          />

          <Carousel.Caption className="carouselCaption">
            <h1>
              <span className="spanText">DOMINATE</span> THE INTERNET
            </h1>
            <h3>Attract, Engage & Convert more qualified bike shoppers</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <Image
            className="d-block w-100"
            src={carouselImage_4}
            alt="Fourth slide"
            fluid
          />

          <Carousel.Caption className="carouselCaption">
            <h1>
              TIME TO <span className="spanText">INVEST</span>
            </h1>
            <h3>in a website built to move your INVENTORY FASTER</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
