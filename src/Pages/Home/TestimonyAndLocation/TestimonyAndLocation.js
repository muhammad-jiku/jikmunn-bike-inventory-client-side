import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Testimony.css';

const TestimonyAndLocation = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('https://cryptic-reef-07381.herokuapp.com/testimonials')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="testimonyCard">
      <Container className="testimonyCard">
        {testimonials?.slice(0, 1)?.map((testimonial) => (
          <div key={testimonial?._id} className="testimonialCard">
            <FontAwesomeIcon icon={faQuoteLeft} className="testimonialIcon" />
            <p>{testimonial?.review}</p>
            <FontAwesomeIcon icon={faQuoteRight} className="testimonialIcon" />
            <h3>{testimonial?.name}</h3>
            <img src={testimonial?.pic} alt={testimonial?.name} />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default TestimonyAndLocation;
