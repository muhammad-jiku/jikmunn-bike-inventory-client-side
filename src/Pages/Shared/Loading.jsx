import { Container, Spinner } from 'react-bootstrap';
import styles from './styles/loading.module.css';

const Loading = () => {
  return (
    <Container className={styles.spinnerSection}>
      <div>
        <h1>Loading.....</h1> <Spinner animation='border' />
      </div>
    </Container>
  );
};

export default Loading;
