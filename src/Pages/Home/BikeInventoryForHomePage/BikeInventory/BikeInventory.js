import React, { useState } from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../BikeInventoryCard.css';
import {
  faPenToSquare,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BikeInventory = ({ bInventory }) => {
  const [seeMore, setSeeMore] = useState(false);
  const navigate = useNavigate();
  const { _id, name, image, description, supplier, price, quantity } =
    bInventory;

  const handleUpdateInventory = (id) => {
    navigate(`/manageinventory/${id}`);
  };
  return (
    <Col>
      <div className="inventoryCard">
        <Image src={image} alt={name} fluid />
        <div className="inventoryCardInfo">
          <h4>{name} </h4>
          <h5>Price: BDT {price}/= </h5>
        </div>
        <div className="buttonsSection">
          <div>
            <button
              onClick={() => setSeeMore(!seeMore)}
              className="viewMoreButton"
            >
              Read more{' '}
              {seeMore ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </button>
          </div>
          <div>
            <button
              onClick={() => handleUpdateInventory(_id)}
              className="updateButton"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
        </div>
        <div>
          {seeMore ? (
            <div>
              <h4>Quantity: {quantity} </h4>
              <h4>Supplier: {supplier} </h4>
              <p>{description}</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Col>
  );
};

export default BikeInventory;
