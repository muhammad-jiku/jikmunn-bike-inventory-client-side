import {
  faPenToSquare,
  faTrash,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBikeInventories from '../../../customHooks/useBikeInventories/useBikeInventories';

const BikeInventory = ({ bInventory }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [bikeInventory, setBikeInventory] = useBikeInventories();

  const navigate = useNavigate();
  const { _id, brand, name, image, description, supplier, price, quantity } =
    bInventory;

  const handleUpdateInventory = (id) => {
    navigate(`/manageinventory/${id}`);
  };

  const handleDeleteInventory = (id) => {
    const proceed = window.confirm('Are you sure want to delete this?');
    if (proceed) {
      console.log(id);
      const url = `https://cryptic-reef-07381.herokuapp.com/bikeinventory/${id}`;
      // fetch(url, {
      //   method: 'DELETE',
      // })
      axios
        .delete(url)
        // .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingInventory = bikeInventory?.filter(
            (bInventory) => bInventory?._id !== id
          );
          setBikeInventory(remainingInventory);
        })
        .catch((err) => console.log(err));
    }
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
            <button
              onClick={() => handleDeleteInventory(_id)}
              className="deleteButton"
            >
              <FontAwesomeIcon icon={faTrash} />
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
