import { Container, Row } from 'react-bootstrap';
import useTestimonials from '../../customHooks/useTestimonials';
import Loading from '../Shared/Loading';
import styles from './styles/testimonials.module.css';
import Testimony from './Testimony';

const Testimonials = () => {
  const [testimonials, isLoading] = useTestimonials();

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.testimonial}>
          <h3>All THE TESTIMONIALS</h3>
          <Container>
            <Row xs={1} md={2} lg={3} className='g-4'>
              {testimonials?.map((testimonial) => (
                <Testimony key={testimonial?._id} testimonial={testimonial} />
              ))}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
