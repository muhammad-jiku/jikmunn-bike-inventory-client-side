import { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import useTestimonials from '../../customHooks/useTestimonials';
import Testimony from '../Testimonials/Testimony';
import styles from './styles/testimonialCard.module.css';

const TestimonialHome = () => {
  const [testimonials] = useTestimonials();


  // Responsive chunking: 3 per slide on desktop, 1 per slide on mobile
  const getChunks = () => {
    if (window.innerWidth <= 600) {
      // Mobile: 1 per slide
      return testimonials.map((t) => [t]);
    } else {
      // Desktop: 3 per slide
      const chunks = [];
      for (let i = 0; i < testimonials.length; i += 3) {
        chunks.push(testimonials.slice(i, i + 3));
      }
      return chunks;
    }
  };

  const [chunkedTestimonials, setChunkedTestimonials] = useState(getChunks());

  useEffect(() => {
    const handleResize = () => setChunkedTestimonials(getChunks());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line
  }, [testimonials]);

  return (
    <Container className={styles.testimonyCard}>
      <Carousel indicators={false} interval={4000} pause='hover'>
        {chunkedTestimonials.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className={styles.testimonyCard}>
              {group.map((testimonial) => (
                <div key={testimonial?._id} className={styles.testimonialCard}>
                  <Testimony testimonial={testimonial} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialHome;
