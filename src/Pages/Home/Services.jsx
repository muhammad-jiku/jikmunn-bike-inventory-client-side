import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import useDescription from '../../customHooks/useDescription';
import useServices from '../../customHooks/useServices';
import styles from './styles/services.module.css';
const icons = require('@fortawesome/free-solid-svg-icons');

const Features = () => {
  const [brands] = useDescription();
  const [services] = useServices();

  // Responsive chunking for brands: 4 per slide desktop, 1 per slide mobile
  const getBrandChunks = () => {
    if (window.innerWidth <= 600) {
      return brands.map((b) => [b]);
    } else {
      const chunks = [];
      // console.log('getting chunks for desktop', brands);
      for (let i = 0; i < brands.length; i += 4) {
        chunks.push(brands.slice(i, i + 4));
      }
      // console.log('brand chunks:', chunks);
      return chunks;
    }
  };

  const [brandChunks, setBrandChunks] = useState(getBrandChunks());

  useEffect(() => {
    const handleResize = () => setBrandChunks(getBrandChunks());
    window.addEventListener('resize', handleResize);
    // console.log( 'brand chunks on resize:', brandChunks );
    // console.log('brands on resize:', brands);
    // console.log('added resize listener');
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line
  }, [brands]);

  return (
    <div className={styles.services}>
      <Container>
        <Row xs={1} md={2} lg={4} className='g-4'>
          {services?.map((service) => (
            <Col key={service?._id}>
              <div className={styles.service}>
                <FontAwesomeIcon
                  icon={icons[service?.icon]}
                  className={styles.serviceIcon}
                />
                <h5>{service?.name}</h5>
                <p>{service?.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className={styles.brandSection}>
          <h4>We have been partners with these brands</h4>
          <Carousel indicators={false} interval={3500} pause='hover'>
            {brandChunks.map((group, idx) => (
              <Carousel.Item key={idx}>
                <Row sm={2} md={4} className='justify-content-center'>
                  {/* {console.log('rendering brand group:', group)} */}
                  {group.map((br) => (
                    <Col key={br?._id} className={styles.brand}>
                      {/* {console.log( 'rendering brand:', br ) } */}
                      <img
                        src={br?.img}
                        alt={br?.name || ''}
                        className={styles.brandImg}
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Features;
