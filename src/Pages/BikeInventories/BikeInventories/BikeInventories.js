import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBikeInventories from '../../../customHooks/useBikeInventories/useBikeInventories';
import BikeInventory from '../BikeInventory/BikeInventory';
import '../Inventory.css';

const BikeInventories = () => {
  const navigate = useNavigate('');
  const [bikeInventory] = useBikeInventories();

  // const handleUpdateInventory = (id) => {
  //   navigate(`/manageinventory/${id}`);
  // };

  // const handleDeleteInventory = (id) => {
  //   const proceed = window.confirm('Are you sure want to delete this?');
  //   if (proceed) {
  //     console.log(id);
  //     const url = `https://cryptic-reef-07381.herokuapp.com/bikeinventory/${id}`;
  //     // fetch(url, {
  //     //   method: 'DELETE',
  //     // })
  //     axios
  //       .delete(url)
  //       // .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         const remainingInventory = bikeInventory?.filter(
  //           (bInventory) => bInventory?._id !== id
  //         );
  //         setBikeInventory(remainingInventory);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  return (
    <Container>
      <Button onClick={() => navigate('/addinventory')}>Add new Item</Button>
      <Table striped bordered hover responsive variant="dark" className="table">
        <thead>
          <tr>
            <th className="tableHeaderSpecial">Image</th>
            <th className="tableHeaderSpecial">Brand</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th className="tableHeaderSpecial">Description</th>
            <th className="tableHeaderSpecial">Supplier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bikeInventory.map((bInventory) => (
            <BikeInventory key={bInventory?._id} bInventory={bInventory} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BikeInventories;
