import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BikeInventoryDetails = () => {
  const { manageinventoryId } = useParams();
  const [bikeInventoryDetails, setBikeInventoryDetails] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/bikeinventory/${manageinventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBikeInventoryDetails(data))
      .catch((err) => console.log(err));
  }, [manageinventoryId, bikeInventoryDetails]);

  const handleDeliveredQuantity = () => {
    let quantity = bikeInventoryDetails?.quantity;
    quantity = parseInt(quantity) - 1;

    if (quantity < 0) {
      return alert('Quantity can not be less than zero');
    }

    const url = `http://localhost:5000/bikeinventory/${manageinventoryId}`;
    // console.log(url);
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setBikeInventoryDetails({
        //   ...data,
        //   quantity: quantity,
        // });
        alert('delivered successfully');
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateQuantity = (e) => {
    e.preventDefault();

    let quantity = bikeInventoryDetails?.quantity;
    const addQuantity = parseInt(e.target.quantity.value);

    if (addQuantity > 0) {
      quantity = parseInt(quantity) + addQuantity;
      const updatedInventory = { quantity };

      const url = `http://localhost:5000/bikeinventory/${manageinventoryId}`;

      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedInventory),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert('quantity updated successfully');
          e.target.reset();
        })
        .catch((err) => console.log(err));
    } else {
      alert('Please insert positive number of quantiy');
      e.target.reset();
      return;
    }
  };
  return (
    <div>
      <h1>This is bikes details of {manageinventoryId}</h1>
      <img src={bikeInventoryDetails?.image} alt={bikeInventoryDetails?.name} />
      <h3>Name: {bikeInventoryDetails?.name}</h3>
      <h4>Price: {bikeInventoryDetails?.price} </h4>
      <h4>quantity: {bikeInventoryDetails?.quantity} </h4>
      <h4>Supplier: {bikeInventoryDetails?.supplier} </h4>
      <h5>
        Owned by <i> {bikeInventoryDetails?.brand}</i>{' '}
      </h5>
      <Button onClick={handleDeliveredQuantity}>Delivered</Button>
      <form onSubmit={handleUpdateQuantity}>
        <input
          type="text"
          placeholder="Add quantity"
          name="quantity"
          id="quantity"
          required
        />
        <Button type="submit">Add Quantity</Button>
      </form>
    </div>
  );
};

export default BikeInventoryDetails;
