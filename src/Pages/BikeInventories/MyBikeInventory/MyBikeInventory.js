import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Image, Row, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';
// import Loading from '../../Shared/Loading/Loading';
import BikeInventory from '../BikeInventory/BikeInventory';
import empty from '../../../Images/empty.gif';

const MyBikeInventory = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [myInventoryItems, setMyInventoryItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `https://cryptic-reef-07381.herokuapp.com/bikeinventory?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        // console.log(response);
        // const { data } = response;
        setMyInventoryItems(data);
        // setIsLoading(false);
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
  }, [navigate, user, myInventoryItems]);

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <div className="allInventories">
      <div>
        {!myInventoryItems?.length ? (
          <div className="emptyinventories">
            <div>
              <Image src={empty} alt="" fluid />
            </div>
            <div>
              <h4>No items added</h4>
            </div>
          </div>
        ) : (
          <div className="allInventories">
            <div className="inventoriesIntro">
              <h1>My Inventory</h1>
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
      </div>
    </div>
  );
};

export default MyBikeInventory;
