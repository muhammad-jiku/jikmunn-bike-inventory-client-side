import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Testimony from '../Testimony/Testimony';
import '../Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('https://cryptic-reef-07381.herokuapp.com/testimonials')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="testimonial">
      <h3>All THE TESTIMONIALS</h3>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {testimonials?.map((testimonial) => (
            <Testimony key={testimonial?._id} testimonial={testimonial} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
