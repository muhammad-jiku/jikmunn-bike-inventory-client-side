import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import BikeInventory from '../../BikeInventories/BikeInventory/BikeInventory';

const BikeInventoryForHomePage = () => {
  const [bikeInventory, setBikeInventory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/bikeinventories')
      .then((res) => res.json())
      .then((data) => setBikeInventory(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {bikeInventory?.slice(1, 7).map((bInventory) => (
          <BikeInventory key={bInventory?._id} bInventory={bInventory} />
        ))}
      </Row>
      <Button className="ms-auto">Manage Inventories</Button>
    </Container>
  );
};

export default BikeInventoryForHomePage;
