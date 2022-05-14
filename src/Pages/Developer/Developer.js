import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Developer.css';
import pic from '../../Images/developer.jpg';
import useDeveloper from '../../customHooks/useDeveloper/useDeveloper';
import Loading from '../Shared/Loading/Loading';

const Developer = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [collection, isLoading] = useDeveloper();

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <div className="aboutSection">
            <div className="aboutSectionLeft">
              <img src={pic} alt="" />
            </div>
            <div className="aboutSectionRight">
              <p>
                Hi! My name is{' '}
                <span className="aboutSectionRightName">
                  Muhammad Azizul Hoque Jiku
                </span>
                . Welcome to Bike Decor inventory site that I've designed and
                developed. I'd love to show some websites that i've designed and
                developed
              </p>
              <button
                onClick={() => setSeeMore(!seeMore)}
                className="readMoreButton"
              >
                See {seeMore ? 'Less' : 'More'}
              </button>
            </div>
          </div>
          {seeMore ? (
            <div className="projectsSection">
              <div className="projectsSectionHeader">
                <h4>Projects I've designed and developed</h4>
              </div>
              <Row xs={1} md={2} lg={3} className="g-4">
                {collection?.map((collect) => (
                  <Col key={collect?._id}>
                    <div className="projectsCard">
                      <a href={collect?.link} target="_blank" rel="noreferrer">
                        <Image src={collect?.image} alt="" fluid />
                        <div className="projectsCardHeader">
                          <p>{collect?.project}</p>
                        </div>
                      </a>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ) : (
            ''
          )}
        </Container>
      )}
    </div>
  );
};

export default Developer;
