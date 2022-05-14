import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Error from '../../../Images/404.gif';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="notFound">
      <h1>404</h1>
      <h2>Ooops! Sorry page not found</h2>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </Container>
  );
};

export default NotFound;
