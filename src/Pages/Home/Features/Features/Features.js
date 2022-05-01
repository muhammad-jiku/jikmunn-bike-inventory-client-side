import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import { Container, Row } from 'react-bootstrap';

const Features = () => {
  const [carFeatures, setCarFeatures] = useState([]);
  useEffect(() => {
    fetch('carFeatures.json')
      .then((res) => res.json())
      .then((data) => setCarFeatures(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container fluid>
      <Row xs={1} md={2} lg={4} className="g-4">
        {carFeatures.map((carFeature) => (
          <Feature key={carFeature?._id} carFeature={carFeature} />
        ))}
      </Row>
    </Container>
  );
};

export default Features;
