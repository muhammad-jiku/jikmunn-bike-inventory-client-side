import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBikeInventories from '../../../customHooks/useBikeInventories/useBikeInventories';
import BikeInventory from '../BikeInventory/BikeInventory';
import Loading from '../../Shared/Loading/Loading';
import '../InventoryTable.css';

const BikeInventories = () => {
  const navigate = useNavigate('');
  const [bikeInventory] = useBikeInventories();

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
