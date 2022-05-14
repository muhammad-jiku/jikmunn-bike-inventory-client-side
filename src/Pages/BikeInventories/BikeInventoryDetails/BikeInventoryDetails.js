import axios from 'axios';
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useBikeInventoryDetails from '../../../customHooks/useBikeInventoryDetails/useBikeInventoryDetails';
// import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import './BikeInventoryDetails.css';

const BikeInventoryDetails = () => {
  const { manageinventoryId } = useParams();
  const [bikeInventoryDetails] = useBikeInventoryDetails(manageinventoryId);

  const handleDeliveredQuantity = () => {
    let quantity = bikeInventoryDetails?.quantity;
    console.log(quantity);
    quantity = parseInt(quantity) - 1;
    console.log(quantity);
    if (quantity < 0) {
      return toast.error('Quantity can not be less than zero');
    }

    const url = `https://cryptic-reef-07381.herokuapp.com/bikeinventory/${manageinventoryId}`;

    // axios
    //   .put(url, { quantity: quantity })
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
        toast.success('delivered successfully');
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateQuantity = (e) => {
    e.preventDefault();

    let quantity = bikeInventoryDetails?.quantity;
    const addQuantity = parseInt(e.target.quantity.value);
    console.log(quantity, addQuantity);

    if (addQuantity > 0) {
      quantity = parseInt(quantity) + addQuantity;
      console.log(quantity);
      const updatedInventory = { quantity: quantity };
      console.log(updatedInventory);

      const url = `https://cryptic-reef-07381.herokuapp.com/bikeinventory/${manageinventoryId}`;

      // axios.put(url, updatedInventory);
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
          toast.success('quantity updated successfully');
          e.target.reset();
        })
        .catch((err) => console.log(err));
    } else {
      toast.error('Please insert positive number of quantiy');
      e.target.reset();
      return;
    }
  };
  return (
    <div className="inventoryDetails">
      <Container className="customDetails">
        <div className="customDetailsImage">
          {/* {console.log(bikeInventoryDetails)} */}
          <Image
            src={bikeInventoryDetails?.image}
            alt={bikeInventoryDetails?.name}
            fluid
          />
        </div>
        <div className="customDetailsInfo">
          <h3>Name: {bikeInventoryDetails?.name}</h3>
          <h4>Price: {bikeInventoryDetails?.price} </h4>
          <div>
            <h4>quantity: {bikeInventoryDetails?.quantity} </h4>{' '}
            <button
              onClick={handleDeliveredQuantity}
              className="customDetailsInfoButton"
            >
              Delivered
            </button>
          </div>

          <h4>Supplier: {bikeInventoryDetails?.supplier} </h4>
          <h5>
            Owned by{' '}
            <span className="detailsSpan">{bikeInventoryDetails?.brand}</span>{' '}
          </h5>
          <p>{bikeInventoryDetails?.description} </p>

          <form onSubmit={handleUpdateQuantity}>
            <input
              type="text"
              placeholder="Restock Quantity"
              name="quantity"
              id="quantity"
              required
              className="customDetailsInfoInput"
            />
            <button type="submit" className="customDetailsInfoButton">
              Restock
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default BikeInventoryDetails;
