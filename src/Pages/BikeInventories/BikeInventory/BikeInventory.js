import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';

const BikeInventory = ({ bInventory }) => {
  // console.log(bInventory);
  const {
    // brand,
    name,
    image,
    description,
    supplier,
    price,
    quantity,
  } = bInventory;
  return (
    <Col>
      <div>
        <Image src={image} alt={name} fluid />
        <h3> {name} </h3>
        <h4>Price: BDT{price} </h4>
        <h4>Quantity: {quantity} </h4>
        <h4>Supplier: {supplier} </h4>
        <p>{description}</p>
      </div>
      <Button>Update Inventory</Button>
    </Col>
  );
};

export default BikeInventory;
