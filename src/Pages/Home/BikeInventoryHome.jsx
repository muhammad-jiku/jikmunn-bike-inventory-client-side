import
  {
    faCartFlatbedSuitcase,
    faListOl,
    faTag,
  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './styles/bikeInventoryCard.module.css';

const BikeInventoryHome = ({ bInventory }) => {
  const navigate = useNavigate();
  const { _id, name, image, description, supplier, price, quantity } =
    bInventory;

  const handleUpdateInventory = (id) => {
    navigate(`/manageinventory/${id}`);
  };

  return (
    <Col>
      <div className={styles.inventoryCard}>
        <div className={styles.inventoryCardImage}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.inventoryCardInfo}>
          <h4>{name?.length > 15
              ? name?.slice(0, 15) + '...'
              : name} </h4>
          <p>
            {description?.length > 50
              ? description?.slice(0, 50) + '...'
              : description}
          </p>
          <p>
            <FontAwesomeIcon
              icon={faListOl}
              className={styles.inventoryCardIcon}
            />{' '}
            {quantity > 1 ? quantity + ' pcs are' : 'pc is'} available now
          </p>
          <p>
            <FontAwesomeIcon
              icon={faTag}
              className={styles.inventoryCardIcon}
            />{' '}
            BDT {price} tk only
          </p>
          <p>
            <FontAwesomeIcon
              icon={faCartFlatbedSuitcase}
              className={styles.inventoryCardIcon}
            />{' '}
            {supplier}
          </p>
        </div>
        <button
          onClick={() => handleUpdateInventory(_id)}
          className={styles.inventoryCardButton}
        >
          Update
        </button>
      </div>
    </Col>
  );
};

export default BikeInventoryHome;
