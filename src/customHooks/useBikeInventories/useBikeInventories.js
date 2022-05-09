import axios from 'axios';
import { useEffect, useState } from 'react';

const useBikeInventories = () => {
  const [bikeInventory, setBikeInventory] = useState([]);

  useEffect(() => {
    fetch('https://cryptic-reef-07381.herokuapp.com/bikeinventories')
      // axios
      //   .get('https://cryptic-reef-07381.herokuapp.com/bikeinventories')
      .then((res) => res.json())
      .then((data) => {
        setBikeInventory(data);
      })
      .catch((err) => console.log(err));
  }, [bikeInventory]);

  return [bikeInventory, setBikeInventory];
};

export default useBikeInventories;
