import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import { Container, Row } from 'react-bootstrap';
import Loading from '../../../Shared/Loading/Loading';

const Features = () => {
  const [carFeatures, setCarFeatures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('carFeatures.json')
      .then((res) => res.json())
      .then((data) => {
        setCarFeatures(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container fluid>
      {isLoading ? (
        <Loading />
      ) : (
        <Row xs={1} md={2} lg={4} className="g-4">
          {carFeatures.map((carFeature) => (
            <Feature key={carFeature?._id} carFeature={carFeature} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Features;
