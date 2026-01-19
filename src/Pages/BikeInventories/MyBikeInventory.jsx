import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import BikeInventory from './BikeInventory';
import styles from './styles/inventoryTable.module.css';

const MyBikeInventory = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [myInventoryItems, setMyInventoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `${process.env.REACT_APP_API_BASE_URL}/api/bikeinventories?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setMyInventoryItems(data);
        setIsLoading(false);
        // console.log(data);
      } catch (err) {
        // console.log(err.message);
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          navigate('/login');
        }
      }
    };
    getMyItems();
  }, [navigate, user]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          {!myInventoryItems?.length ? (
            <div className={styles.emptyinventories}>
              <h4>No items added yet!!</h4>
            </div>
          ) : (
            <div>
              <div className={styles.inventoriesIntro}>
                <h3>My Inventory</h3>
                <button
                  onClick={() => navigate('/manageinventories')}
                  className={styles.goToInventoryFormButton}
                >
                  Manage Inventories
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
                  {myInventoryItems?.map((bInventory) => (
                    <BikeInventory
                      key={bInventory?._id}
                      bInventory={bInventory}
                    />
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Container>
      )}
    </div>
  );
};

export default MyBikeInventory;
