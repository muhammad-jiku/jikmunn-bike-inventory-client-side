import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBikeInventories from '../../customHooks/useBikeInventories';
import BikeInventory from './BikeInventory';
import styles from './styles/inventoryTable.module.css';

const BikeInventories = () => {
  const navigate = useNavigate('');
  const [bikeInventory] = useBikeInventories();

  return (
    <div>
      {!bikeInventory?.length ? (
        <>
          <div className={styles.emptyinventories}>
            <h4>No items added yet!!</h4>
          </div>
        </>
      ) : (
        <Container>
          <div className={styles.inventoriesIntro}>
            <h3>All Inventory</h3>
            <button
              onClick={() => navigate('/addinventory')}
              className={styles.goToInventoryFormButton}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Item
            </button>
          </div>
          <Table
            striped
            bordered
            hover
            responsive
            variant='dark'
            className={styles.inventoriesTable}
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
