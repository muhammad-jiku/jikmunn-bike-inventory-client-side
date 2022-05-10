import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBikeInventories from '../../../../customHooks/useBikeInventories/useBikeInventories';
import BikeInventory from '../BikeInventory/BikeInventory';

const BikeInventoryForHomePage = () => {
  const navigate = useNavigate();
  const [bikeInventory] = useBikeInventories();

  return (
    <div className="allInventories">
      <Container className="allInventories">
        <Row xs={1} md={2} lg={3} className="g-4">
          {bikeInventory?.slice(0, 6).map((bInventory) => (
            <BikeInventory key={bInventory?._id} bInventory={bInventory} />
          ))}
        </Row>
        <div className="seeAllInventoriesButton">
          <button onClick={() => navigate('/manageinventories')}>
            Manage Inventories
          </button>
        </div>
      </Container>
    </div>
  );
};

export default BikeInventoryForHomePage;
