import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Error from '../../../Images/404.gif';

const NotFound = () => {
  return (
    <Container className="d-flex">
      <div>
        <Image
          src={Error}
          alt="Page not found"
          style={{ border: '1px solid black' }}
          fluid
        />
      </div>

      <div>
        <h3>Hello there! Sorry for being lost</h3>
        <h3>Go to </h3> <Link to="/">Home</Link>
      </div>
    </Container>
  );
};

export default NotFound;
