import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import useBikeInventories from '../../../customHooks/useBikeInventories/useBikeInventories';
import BikeInventory from '../BikeInventory/BikeInventory';

const BikeInventories = () => {
  const [bikeInventory] = useBikeInventories();

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {bikeInventory.map((bInventory) => (
          <div key={bInventory?._id}>
            <BikeInventory bInventory={bInventory} />
            <Button>Delete</Button>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default BikeInventories;
