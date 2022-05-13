import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Services.css';
const icons = require('@fortawesome/free-solid-svg-icons');

const Features = () => {
  const [services, setServices] = useState([]);
  const [pics, setPics] = useState([]);

  useEffect(() => {
    fetch('https://cryptic-reef-07381.herokuapp.com/servicess')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    fetch('https://cryptic-reef-07381.herokuapp.com/images')
      .then((res) => res.json())
      .then((data) => setPics(data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="services">
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          {services?.map((service) => (
            <Col key={service?._id}>
              <div className="service">
                <FontAwesomeIcon
                  icon={icons[service?.icon]}
                  className="serviceIcon"
                />
                <h4>{service?.title}</h4>
                <p>{service?.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="brandSection">
          <h1 className="text-center">
            We have been partners with these brands
          </h1>
          <Row sm={2} md={4}>
            {/* {console.log(pics)} */}
            {pics?.slice(8, 16)?.map((pic) => (
              <Col
                key={pic?._id}
                // style={{ padding: '20px', margin: '10px auto' }}
                className="m-auto p-5"
              >
                <img src={pic?.img} alt="" />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Features;
