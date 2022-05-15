import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Testimony from '../Testimony/Testimony';
import useTestimonials from '../../../customHooks/useTestimonials/useTestimonials';
import Loading from '../../Shared/Loading/Loading';
import '../Testimonials.css';

const Testimonials = () => {
  const [testimonials, isLoading] = useTestimonials();
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default Testimonials;
