import { Col, Container, Row } from 'react-bootstrap';
import useDescription from '../../customHooks/useDescription';
import styles from './styles/description.module.css';

const Description = () => {
  const [brands] = useDescription();

  return (
    <div>
      <div>
        <Container className={styles.descriptionBox}>
          <h3>
            WELCOME TO{' '}
            <span className={styles.descriptionBoxSpan}>BIKE DECOR</span>
          </h3>
          <p>
            Bike Decor is a Professional inventory Platform which is trusted by
            over 75,000 companies all over the world. Here we will provide you
            only interesting content, which you will like very much. We're
            dedicated to providing you the best of inventory, with a focus on
            dependability and stocking bike. We're working to turn our passion
            for inventory into a booming online website. We hope you enjoy our
            inventory as much as we enjoy offering them to you.
          </p>
          <p>
            Expand your business online with our multi-channel inventory
            management system. Set up and integrate your business with platform
            like Alibaba, Amazon, Daraz, eBay, Walmart, Etsy, WooCommerce or
            Shopify account, and start selling your merchandise.
          </p>
        </Container>
        <div className={styles.descriptionBox}>
          <h4>CONNECT TO ALL THE POPULAR PLATFORMS</h4>
          <Container>
            <Row sm={2} md={4}>
              {brands?.slice(0, 8)?.map((br) => (
                <Col key={br?._id} className={styles.brands}>
                  <img
                    src={br?.img}
                    alt={br?.name}
                    className={styles.brandImg}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Description;
