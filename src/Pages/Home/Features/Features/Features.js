import React from 'react';
import {
  faChartLine,
  faLocationPin,
  faMotorcycle,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <div>
            {/* <FontAwesomeIcon icon="fa-solid fa-chart-line-up" /> */}
            <FontAwesomeIcon icon={faChartLine} />
            <h4>Stock Replenishment</h4>
            <p>
              Create and send purchase orders to your suppliers to replenish
              inventory.
            </p>
          </div>
        </Col>
        <Col>
          <div>
            {/* <FontAwesomeIcon icon="fa-solid fa-chart-line-up" /> */}
            <FontAwesomeIcon icon={faMotorcycle} />
            <h4>Product Offerings</h4>
            <p>
              Manage variations, bundles, and digital products from one
              easy-to-use platform.
            </p>
          </div>
        </Col>{' '}
        <Col>
          <div>
            {/* <FontAwesomeIcon icon="fa-solid fa-chart-line-up" /> */}
            <FontAwesomeIcon icon={faLocationPin} />
            <h4>End-to-end tracking</h4>
            <p>
              Track product quantities and sales across unlimited integrations!
            </p>
          </div>
        </Col>
        <Col>
          <div>
            {/* <FontAwesomeIcon icon="fa-solid fa-chart-line-up" /> */}
            <FontAwesomeIcon icon={faTruck} />
            <h4>Multiple shipping integrations</h4>
            <p>
              Get real-time shipping rates and in-transit details of major
              shipping carriers and choose a shipping partner for your business,
              wisely. A much-needed feature for a complete inventory management
              system.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
