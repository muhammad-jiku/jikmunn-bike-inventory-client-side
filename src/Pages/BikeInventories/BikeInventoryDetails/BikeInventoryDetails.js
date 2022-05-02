import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BikeInventoryDetails = () => {
  const { manageinventoryId } = useParams();
  const [bikeInventoryDetails, setBikeInventoryDetails] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/bikeinventory/${manageinventoryId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBikeInventoryDetails(data))
      .catch((err) => console.log(err));
  }, [manageinventoryId]);
  return (
    <div>
      {console.log(bikeInventoryDetails)}
      <h1>This is bikes details of {manageinventoryId}</h1>
      <h3>Name: {bikeInventoryDetails?.name}</h3>
    </div>
  );
};

export default BikeInventoryDetails;
