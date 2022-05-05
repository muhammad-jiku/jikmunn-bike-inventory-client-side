import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBikeInventories from '../../../customHooks/useBikeInventories/useBikeInventories';
import BikeInventory from '../../BikeInventories/BikeInventory/BikeInventory';

const BikeInventoryForHomePage = () => {
  const navigate = useNavigate();
  const [bikeInventory] = useBikeInventories();

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {bikeInventory?.slice(1, 7).map((bInventory) => (
          <BikeInventory key={bInventory?._id} bInventory={bInventory} />
        ))}
      </Row>
      <Button onClick={() => navigate('/manageinventories')}>
        Manage Inventories
      </Button>
    </Container>
  );
};

export default BikeInventoryForHomePage;
