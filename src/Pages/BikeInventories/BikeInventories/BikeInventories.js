import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBikeInventories from '../../../customHooks/useBikeInventories/useBikeInventories';
import BikeInventory from '../BikeInventory/BikeInventory';
import '../InventoryTable.css';
import Loading from '../../Shared/Loading/Loading';

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
    <div>
      {!bikeInventory?.length ? (
        <Loading />
      ) : (
        <Container>
          <div className="inventoriesIntro">
            <h3>All Inventory</h3>
            <button
              onClick={() => navigate('/addinventory')}
              className="goToInventoryFormButton"
            >
              <FontAwesomeIcon icon={faPlus} /> Add Item
            </button>
          </div>
          <Table
            striped
            bordered
            hover
            responsive
            variant="dark"
            className="inventoriesTable"
          >
            <thead>
              <tr>
                <th>Image</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
                <th>Quantity</th>
                {/* <th >Description</th> */}
                <th>Supplier</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bikeInventory?.map((bInventory) => (
                <BikeInventory key={bInventory?._id} bInventory={bInventory} />
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </div>
  );
};

export default BikeInventories;
