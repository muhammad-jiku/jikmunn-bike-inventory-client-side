import React from 'react';
import { Container } from 'react-bootstrap';
import useTestimonials from '../../../customHooks/useTestimonials/useTestimonials';
import Testimony from '../../Testimonials/Testimony/Testimony';
import './TestimonialForHomePage.css';

const TestimonyAndLocation = () => {
  const [testimonials] = useTestimonials();
  return (
    <Container className="testimonyCard">
      {testimonials?.slice(1, 2)?.map((testimonial) => (
        <div key={testimonial?._id} className="testimonialCard">
          <Testimony testimonial={testimonial} />
        </div>
      ))}
    </Container>
  );
};

export default TestimonyAndLocation;
