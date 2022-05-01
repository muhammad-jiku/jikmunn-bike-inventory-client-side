import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import BikeInventory from '../BikeInventory/BikeInventory';

const BikeInventories = () => {
  const [bikeInventory, setBikeInventory] = useState([]);

  useEffect(() => {
    fetch('bikeInventories.json')
      .then((res) => res.json())
      .then((data) => setBikeInventory(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {bikeInventory.map((bInventory) => (
          <div key={bInventory?._id}>
            <BikeInventory bInventory={bInventory} />
            <Button>Delivered</Button>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default BikeInventories;
