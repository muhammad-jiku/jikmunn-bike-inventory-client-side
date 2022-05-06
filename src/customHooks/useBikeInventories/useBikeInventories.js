import { useEffect, useState } from 'react';

const useBikeInventories = () => {
  const [bikeInventory, setBikeInventory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/bikeinventories')
      .then((res) => res.json())
      .then((data) => setBikeInventory(data))
      .catch((err) => console.log(err));
  }, [bikeInventory]);

  return [bikeInventory, setBikeInventory];
};

export default useBikeInventories;
