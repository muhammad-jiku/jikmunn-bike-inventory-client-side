import { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import useBikeInventoryDetails from '../../customHooks/useBikeInventoryDetails';
import styles from './styles/bikeInventoryDetails.module.css';

const BikeInventoryDetails = () => {
  const navigate = useNavigate();
  const { manageinventoryId } = useParams();

  const [bikeInventoryDetails] = useBikeInventoryDetails(manageinventoryId);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (bikeInventoryDetails && bikeInventoryDetails.quantity !== undefined) {
      setQuantity(bikeInventoryDetails.quantity);
    }
  }, [bikeInventoryDetails]);

  const handleDeliveredQuantity = () => {
    let newQuantity = quantity;
    newQuantity = parseInt(newQuantity) - 1;
    if (newQuantity < 0) {
      return toast.error(
        'Delivery is not possible! in order to deliver you need to restock',
      );
    }

    const url = `${process.env.REACT_APP_API_BASE_URL}/api/bikeinventories/${manageinventoryId}`;

    axiosPrivate
      .put(url, { quantity: newQuantity })
      .then((data) => {
        setQuantity(newQuantity);
        toast.success('delivered successfully');
      })
      .catch((err) => {
        // console.log(err);
        toast.error('Failed to update quantity');
      });
  };

  const handleUpdateQuantity = (e) => {
    e.preventDefault();

    const addQuantity = parseInt(e.target.quantity.value);
    if (addQuantity > 0) {
      const newQuantity = parseInt(quantity) + addQuantity;
      const updatedInventory = { quantity: newQuantity };
      const url = `${process.env.REACT_APP_API_BASE_URL}/api/bikeinventories/${manageinventoryId}`;

      axiosPrivate
        .put(url, updatedInventory)
        .then((data) => {
          setQuantity(newQuantity);
          toast.success('quantity updated successfully');
          e.target.reset();
        })
        .catch((err) => {
          // console.log(err);
          toast.error('Failed to update quantity');
        });
    } else {
      toast.error('Please insert positive number of quantiy');
      e.target.reset();
      return;
    }
  };
  return (
    <div className={styles.inventoryDetails}>
      <div className={styles.inventoriesIntro}>
        <h3>{bikeInventoryDetails?.name}</h3>
        <button
          onClick={() => navigate('/manageinventories')}
          className={styles.goToInventoryFormButton}
        >
          Manage Inventories
        </button>
      </div>
      <Container className={styles.customDetails}>
        <div className={styles.customDetailsImage}>
          <Image
            src={bikeInventoryDetails?.image}
            alt={bikeInventoryDetails?.name}
            fluid
          />
        </div>
        <div className={styles.customDetailsInfo}>
          <h3>Name: {bikeInventoryDetails?.name}</h3>
          <h4>Price: {bikeInventoryDetails?.price} </h4>
          <div>
            <h4>quantity: {quantity} </h4>{' '}
            <button
              onClick={handleDeliveredQuantity}
              className={styles.customDetailsInfoButton}
            >
              Delivered
            </button>
          </div>

          <h4>Supplier: {bikeInventoryDetails?.supplier} </h4>
          <h5>
            Owned by{' '}
            <span className={styles.detailsSpan}>
              {bikeInventoryDetails?.brand}
            </span>{' '}
          </h5>
          <p>{bikeInventoryDetails?.description} </p>

          <form onSubmit={handleUpdateQuantity}>
            <input
              type='text'
              placeholder='Restock Quantity'
              name='quantity'
              id='quantity'
              required
              className={styles.customDetailsInfoInput}
            />
            <button type='submit' className={styles.customDetailsInfoButton}>
              Restock
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default BikeInventoryDetails;
