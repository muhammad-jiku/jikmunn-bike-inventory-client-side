import axios from 'axios';
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import useBikeInventories from '../../../customHooks/useBikeInventories/useBikeInventories';
import BikeInventory from '../BikeInventory/BikeInventory';

const BikeInventories = () => {
  const [bikeInventory, setBikeInventory] = useBikeInventories();

  const handleDeleteInventory = (id) => {
    const proceed = window.confirm('Are you sure want to delete this?');
    if (proceed) {
      console.log(id);
      const url = `http://localhost:5000/bikeinventory/${id}`;
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
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {bikeInventory.map((bInventory) => (
          <div key={bInventory?._id}>
            <BikeInventory bInventory={bInventory} />
            <Button onClick={() => handleDeleteInventory(bInventory?._id)}>
              Delete
            </Button>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default BikeInventories;
