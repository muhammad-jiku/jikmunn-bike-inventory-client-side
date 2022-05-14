import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import BikeInventory from '../BikeInventory/BikeInventory';

const MyBikeInventory = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [myInventoryItems, setMyInventoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `https://cryptic-reef-07381.herokuapp.com/bikeinventory?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        // console.log(response);
        // const { data } = response;
        setMyInventoryItems(data);
        setIsLoading(false);
        console.log(data);
      } catch (err) {
        console.log(err.message);
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          navigate('/login');
        }
      }
    };
    getMyItems();
  }, [navigate, user, myInventoryItems, isLoading]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          {!myInventoryItems?.length ? (
            <div className="emptyinventories">
              <h4>No items added yet!!</h4>
            </div>
          ) : (
            <div>
              <div className="inventoriesIntro">
                <h3>My Inventory</h3>
                <button
                  onClick={() => navigate('/manageinventories')}
                  className="goToInventoryFormButton"
                >
                  Manage Inventories
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
