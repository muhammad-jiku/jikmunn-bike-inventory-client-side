import axios from 'axios';
import { useEffect, useState } from 'react';

const useBikeInventories = () => {
  const [bikeInventory, setBikeInventory] = useState([]);

  useEffect(() => {
    const url = 'https://cryptic-reef-07381.herokuapp.com/bikeinventories';
    axios
      .get(url)
      .then((data) => {
        // console.log(data);
        setBikeInventory(data?.data);
      })
      .catch((err) => console.log(err));
  }, [bikeInventory]);

  return [bikeInventory, setBikeInventory];
};

export default useBikeInventories;
