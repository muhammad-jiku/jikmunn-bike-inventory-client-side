import { Container, Row } from 'react-bootstrap';
import useBikeInventories from '../../customHooks/useBikeInventories';
import Banner from './Banner';
import BikeInventoryHome from './BikeInventoryHome';
import Description from './Description';
import Location from './Location';
import Services from './Services';
import TestimonialHome from './TestimonialHome';

const Home = () => {
  const [bikeInventory] = useBikeInventories();

  return (
    <div>
      <Banner />
      <Description />
      <Container>
        <Row xs={1} md={3} className='g-4'>
          {bikeInventory?.slice(0, 3)?.map((bInventory) => (
            <BikeInventoryHome key={bInventory?._id} bInventory={bInventory} />
          ))}
        </Row>
      </Container>
      <Location />
      <TestimonialHome />
      <Services />
    </div>
  );
};

export default Home;
