import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BikeInventoryDetails = () => {
  const { manageinventoryId } = useParams();
  const [bikeInventoryDetails, setBikeInventoryDetails] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/bikeinventory/${manageinventoryId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBikeInventoryDetails(data))
      .catch((err) => console.log(err));
  }, [manageinventoryId]);
  return (
    <div>
      {console.log(bikeInventoryDetails)}
      <h1>This is bikes details of {manageinventoryId}</h1>
      <img src={bikeInventoryDetails?.image} alt={bikeInventoryDetails?.name} />
      <h3>Name: {bikeInventoryDetails?.name}</h3>
      <h4>Price: {bikeInventoryDetails?.price} </h4>
      <h4>Quantity: {bikeInventoryDetails?.quantity} </h4>
      <h4>Supplier: {bikeInventoryDetails?.supplier} </h4>
      <h5>
        Owned by <i> {bikeInventoryDetails?.brand}</i>{' '}
      </h5>
      <Button>Delivered</Button>
      <input type="text" placeholder="Add quantity" />
      <Button>Add Quantity</Button>
    </div>
  );
};

export default BikeInventoryDetails;
