import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  faPenToSquare,
  faListOl,
  faTag,
  faUser,
  faCartFlatbedSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../BikeInventoryCard.css';

const BikeInventory = ({ bInventory }) => {
  const navigate = useNavigate();
  const { _id, name, image, description, supplier, price, quantity, email } =
    bInventory;

  const handleUpdateInventory = (id) => {
    navigate(`/manageinventory/${id}`);
  };
  return (
    <Col>
      <div className="inventoryCard">
        <div className="inventoryCardImage">
          <img src={image} alt={name} />
        </div>
        <div className="inventoryCardInfo">
          <h4>{name} </h4>
          <p>
            {description?.length > 80
              ? description?.slice(0, 80) + '...'
              : description}
          </p>
          {/* <p>
            <FontAwesomeIcon icon={faUser} /> {email}
          </p> */}
          <p>
            <FontAwesomeIcon icon={faListOl} />{' '}
            {quantity > 1 ? quantity + 'pcs are' : 'pc is'} available now
          </p>
          <p>
            <FontAwesomeIcon icon={faTag} /> BDT {price} tk only
          </p>
          <p>
            <FontAwesomeIcon icon={faCartFlatbedSuitcase} /> {supplier}
          </p>
        </div>
        <button
          onClick={() => handleUpdateInventory(_id)}
          className="inventoryCardButton"
        >
          Update <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    </Col>
  );
};

export default BikeInventory;
