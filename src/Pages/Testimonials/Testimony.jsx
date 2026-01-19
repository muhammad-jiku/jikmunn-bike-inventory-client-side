import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faQuoteLeft, faQuoteRight, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';
import styles from './styles/testimonials.module.css';


const Testimony = ({ testimonial }) => {
  const { _id, pic, message, name, rating = 0 } = testimonial;

  return (
    <Col key={_id}>
      <div className={styles.testimonialCard}>
        <FontAwesomeIcon icon={faQuoteLeft} className={styles.testimonialIcon} />
        <p>{message}</p>
        <FontAwesomeIcon icon={faQuoteRight} className={styles.testimonialIcon} />
        <div style={{ margin: '10px 0' }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesomeIcon
              key={star}
              icon={star <= rating ? faStarSolid : faStarRegular}
              style={{ color: star <= rating ? '#F3A320' : '#ccc', fontSize: '22px', marginRight: 2 }}
              className={styles.testimonialStar}
            />
          ))}
        </div>
        <h3>{name}</h3>
        <img src={pic} alt={name}  />
      </div>
    </Col>
  );
};

export default Testimony;
