import axios from 'axios';
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBikeInventories from '../../../customHooks/useBikeInventories/useBikeInventories';

const BikeInventory = ({ bInventory }) => {
  const [bikeInventory, setBikeInventory] = useBikeInventories();
  const navigate = useNavigate();
  const { _id, brand, name, image, description, supplier, price, quantity } =
    bInventory;

  const handleUpdateInventory = (id) => {
    navigate(`/manageinventory/${id}`);
  };

  const handleDeleteInventory = (id) => {
    const proceed = window.confirm('Are you sure want to delete this?');
    if (proceed) {
      console.log(id);
      const url = `https://cryptic-reef-07381.herokuapp.com/bikeinventory/${id}`;
      // fetch(url, {
      //   method: 'DELETE',
      // })
      axios
        .delete(url)
        // .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingInventory = bikeInventory?.filter(
            (bInventory) => bInventory?._id !== id
          );
          setBikeInventory(remainingInventory);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <tr>
      <td className="tableHeaderSpecial">
        <Image src={image} alt={name} fluid />
      </td>
      <td className="tableHeaderSpecial">{brand}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td className="tableHeaderSpecial">
        {description?.length > 130
          ? description?.slice(0, 130) + '...'
          : description}
      </td>
      <td className="tableHeaderSpecial">{supplier}</td>
      <td>
        <div className="d-flex mx-3">
          <Button onClick={() => handleUpdateInventory(_id)}>Update</Button>
          <Button onClick={() => handleDeleteInventory(_id)}>Delete</Button>
        </div>
      </td>
    </tr>
  );
};

export default BikeInventory;
