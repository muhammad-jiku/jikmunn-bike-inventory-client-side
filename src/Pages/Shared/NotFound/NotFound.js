import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="notFound">
      <div>
        <h1>404</h1>
        <h2>Ooops! Sorry page not found</h2>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    </Container>
  );
};

export default NotFound;
