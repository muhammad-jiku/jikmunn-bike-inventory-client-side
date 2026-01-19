import axios from 'axios';
import { useEffect, useState } from 'react';

const useBikeInventories = () => {
  const [bikeInventory, setBikeInventory] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/bikeinventories`;
    axios
      .get(url)
      .then((data) => {
        // console.log(data);
        setBikeInventory(data?.data);
      })
      .catch((err) => {
        // console.log( err )
      });
  }, [bikeInventory]);

  return [bikeInventory, setBikeInventory];
};

export default useBikeInventories;
