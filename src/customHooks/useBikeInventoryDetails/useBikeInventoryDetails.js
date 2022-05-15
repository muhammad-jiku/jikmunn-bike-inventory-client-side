import axios from 'axios';
import { useEffect, useState } from 'react';

const useBikeInventoryDetails = (manageinventoryId) => {
  const [bikeInventoryDetails, setBikeInventoryDetails] = useState({});
  useEffect(() => {
    const url = `https://cryptic-reef-07381.herokuapp.com/bikeinventory/${manageinventoryId}`;
    axios
      .get(url)
      .then((data) => {
        // console.log(data);
        setBikeInventoryDetails(data?.data);
      })
      .catch((err) => console.log(err));
  }, [manageinventoryId, bikeInventoryDetails]);

  return [bikeInventoryDetails, setBikeInventoryDetails];
};

export default useBikeInventoryDetails;
