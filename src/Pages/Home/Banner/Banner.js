import React from 'react';
import { Carousel } from 'react-bootstrap';
import carouselImage_1 from '../../../Images/carousel_1.jpg';
import carouselImage_2 from '../../../Images/carousel_2.jpg';
import carouselImage_3 from '../../../Images/carousel_3.jpg';
import carouselImage_4 from '../../../Images/carousel_4.jpg';

const Banner = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage_1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage_2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage_3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage_4}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
