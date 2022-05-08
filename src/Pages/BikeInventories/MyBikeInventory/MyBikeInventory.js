import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';
import BikeInventory from '../BikeInventory/BikeInventory';

const MyBikeInventory = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [myInventoryItems, setMyInventoryItems] = useState([]);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `https://cryptic-reef-07381.herokuapp.com/bikeinventory?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        // console.log(response);
        // const { data } = response;
        setMyInventoryItems(data);
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

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <Container>
      <h4>
        {myInventoryItems?.length > 0
          ? 'This ' + myInventoryItems?.length + ' items '
          : 'No items '}
        added by <i> {user?.email}</i>
      </h4>
      {!myInventoryItems?.length ? (
        ''
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          variant="dark"
          className="table"
        >
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
            {myInventoryItems?.map((myInventory) => (
              <BikeInventory key={myInventory?._id} bInventory={myInventory} />
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default MyBikeInventory;
