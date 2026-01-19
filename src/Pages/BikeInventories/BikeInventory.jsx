import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import useBikeInventories from '../../customHooks/useBikeInventories';
import styles from './styles/inventoryTable.module.css';

const BikeInventory = ({ bInventory }) => {
  const [bikeInventory, setBikeInventory] = useBikeInventories();

  const navigate = useNavigate();
  const { _id, brand, name, image, supplier, price, quantity } = bInventory;

  const handleUpdateInventory = (id) => {
    navigate(`/manageinventory/${id}`);
  };

  const handleDeleteInventory = (id) => {
    const proceed = window.confirm('Are you sure want to delete this?');
    if (proceed) {
      // console.log(id);
      const url = `${process.env.REACT_APP_API_BASE_URL}/api/bikeinventories/${id}`;

      axiosPrivate
        .delete(url)
        .then((data) => {
          // console.log(data);
          const remainingInventory = bikeInventory?.filter(
            (bInventory) => bInventory?._id !== id,
          );
          setBikeInventory(remainingInventory);
        })
        .catch((err) => {
          // console.log(err);
          toast.error('Failed to delete inventory item');
        });
    }
  };

  return (
    <tr>
      <td data-label='Image'>
        <Image src={image} alt={name} fluid className={styles.inventoryImage} />
      </td>
      <td data-label='Brand'>{brand}</td>
      <td data-label='Model'>{name}</td>
      <td data-label='Price'>{price} </td>
      <td data-label='Quantity'>{quantity}</td>
      <td data-label='Supplier'> {supplier} </td>
      <td data-label='Actions'>
        <button
          onClick={() => handleUpdateInventory(_id)}
          className={styles.updateButton}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          onClick={() => handleDeleteInventory(_id)}
          className={styles.deleteButton}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default BikeInventory;
