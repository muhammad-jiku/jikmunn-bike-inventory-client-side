import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../BikeInventoryCard.css';

const BikeInventory = ({ bInventory }) => {
  const navigate = useNavigate();
  const { _id, name, image, description, supplier, price, quantity } =
    bInventory;

  const handleUpdateInventory = (id) => {
    navigate(`/manageinventory/${id}`);
  };
  return (
    <Col>
      <div className="bikeInventoryCard">
        <Image src={image} alt={name} fluid />
        <div className="bikeInventoryCardInfo">
          <h3> {name} </h3>
          <h4>Price: BDT{price} </h4>
          <h4>Quantity: {quantity} </h4>
          <h4>Supplier: {supplier} </h4>
          <p>{description}</p>
        </div>

        <Button onClick={() => handleUpdateInventory(_id)}>
          Update Inventory
        </Button>
      </div>
    </Col>
  );
};

export default BikeInventory;
