import axios from 'axios';
import { useEffect, useState } from 'react';

const useBikeInventoryDetails = (manageinventoryId) => {
  const [bikeInventoryDetails, setBikeInventoryDetails] = useState({});
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/bikeinventories/${manageinventoryId}`;
    axios
      .get(url)
      .then((data) => {
        // console.log(data);
        setBikeInventoryDetails(data?.data);
      })
      .catch((err) => {
        // console.log( err )
      });
  }, [manageinventoryId]);

  return [bikeInventoryDetails, setBikeInventoryDetails];
};

export default useBikeInventoryDetails;
