import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('https://cryptic-reef-07381.herokuapp.com/testimonials')
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* {console.log(testimonials)} */}
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {testimonials?.map((testimonial) => (
            <Col key={testimonial?._id}>
              <div className="testimonialCard">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="testimonialIcon"
                />
                <p>{testimonial?.review}</p>
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="testimonialIcon"
                />
                <h3>{testimonial?.name}</h3>
                <img src={testimonial?.pic} alt={testimonial?.name} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
