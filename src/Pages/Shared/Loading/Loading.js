import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
  return (
    <Container className="spinnerSection">
      <div>
        <h1>Loading.....</h1> <Spinner animation="border" />
      </div>
    </Container>
  );
};

export default Loading;
