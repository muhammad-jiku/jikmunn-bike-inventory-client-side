import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Testimony = ({ testimonial }) => {
  const { _id, pic, review, name } = testimonial;

  return (
    <Col key={_id}>
      <div className="testimonialCard">
        <FontAwesomeIcon icon={faQuoteLeft} className="testimonialIcon" />
        <p>{review}</p>
        <FontAwesomeIcon icon={faQuoteRight} className="testimonialIcon" />
        <h3>{name}</h3>
        <img src={pic} alt={name} />
      </div>
    </Col>
  );
};

export default Testimony;
