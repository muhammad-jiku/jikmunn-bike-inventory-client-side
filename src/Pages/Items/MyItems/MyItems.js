import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myInventoryItems, setMyInventoryItems] = useState([]);

  useEffect(() => {
    const getMyItems = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/bikeinventory?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
        },
      });
      // console.log(response);
      // const { data } = response;
      setMyInventoryItems(data);
      console.log(data);
    };
    getMyItems();
  }, [user]);

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
    <div>
      <h1>This is my collection: {myInventoryItems?.length} </h1>
      {myInventoryItems?.map((myInventory) => (
        <div key={myInventory?._id}>
          <img src={myInventory?.image} alt={myInventory?.name} />
          <h3>{myInventory?.name}</h3>
          <p>This bike is owned by {myInventory?.brand} </p>
          <p>
            <i>added by {myInventory?.email} </i>
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
