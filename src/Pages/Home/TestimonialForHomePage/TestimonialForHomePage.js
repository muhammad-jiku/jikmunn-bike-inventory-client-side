import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Testimony from '../../Testimonials/Testimony/Testimony';
import './TestimonialForHomePage.css';

const TestimonyAndLocation = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('https://cryptic-reef-07381.herokuapp.com/testimonials')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="testimonyCard">
      {testimonials?.slice(0, 1)?.map((testimonial) => (
        <div key={testimonial?._id} className="testimonialCard">
          <Testimony testimonial={testimonial} />
        </div>
      ))}
    </Container>
  );
};

export default TestimonyAndLocation;
