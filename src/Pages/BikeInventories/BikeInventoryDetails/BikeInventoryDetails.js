import axios from 'axios';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useBikeInventoryDetails from '../../../customHooks/useBikeInventoryDetails/useBikeInventoryDetails';

const BikeInventoryDetails = () => {
  const { manageinventoryId } = useParams();
  const [bikeInventoryDetails] = useBikeInventoryDetails(manageinventoryId);

  const handleDeliveredQuantity = () => {
    let quantity = bikeInventoryDetails?.quantity;
    quantity = parseInt(quantity) - 1;

    if (quantity < 0) {
      return alert('Quantity can not be less than zero');
    }

    const url = `http://localhost:5000/bikeinventory/${manageinventoryId}`;
    // fetch(url, {
    //   method: 'PUT',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify({ quantity }),
    // })
    axios
      .put(url, { quantity })
      // .then((res) => res.json())
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

      // fetch(url, {
      //   method: 'PUT',
      //   headers: {
      //     'content-type': 'application/json',
      //   },
      //   body: JSON.stringify(updatedInventory),
      // })
      axios
        .put(url, updatedInventory)
        // .then((res) => res.json())
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
    <Container className="customDetails">
      <div>
        <img
          src={bikeInventoryDetails?.image}
          alt={bikeInventoryDetails?.name}
        />
      </div>
      <div>
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
    </Container>
  );
};

export default BikeInventoryDetails;
