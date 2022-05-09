import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Developer.css';
import pic from '../../Images/developer.jpg';
import sust from '../../Images/sust.png';
import servey from '../../Images/survey.png';
import trbiute1 from '../../Images/tribute-1.png';
import tribute2 from '../../Images/tribute-2.png';
import tech from '../../Images/tech.png';
import influencer from '../../Images/influencer.png';
import review from '../../Images/review.png';
import restaurant from '../../Images/restaurant.png';
import doc from '../../Images/doc.png';
import convention from '../../Images/convention.png';

const Developer = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="developerSection">
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
              See More
            </button>
          </div>
        </div>
        {seeMore ? (
          <div className="projects-section">
            <div class="projects-section-header">
              <h2>Projects I've designed</h2>
            </div>
            <div className="projects">
              <div className="projects-card">
                <a
                  href="https://muhammad-jiku.github.io/practice-1-sust-html-css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={sust} alt="" />
                  <div className="projects-card-header">
                    <h4>Sust</h4>
                  </div>
                </a>
              </div>

              <div className="projects-card">
                <a
                  href="https://muhammad-jiku.github.io/survey-form-2-html-css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={servey} alt="" />
                  <div className="projects-card-header">
                    <h4>A Survey form</h4>
                  </div>
                </a>
              </div>

              <div className="projects-card">
                <a
                  href="https://muhammad-jiku.github.io/tribute-1-html-and-css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={trbiute1} alt="" />
                  <div className="projects-card-header">
                    <h4>A tribute page to Aristotle Onassis</h4>
                  </div>
                </a>
              </div>

              <div className="projects-card">
                <a
                  href="https://muhammad-jiku.github.io/tribute-2-html-css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tribute2} alt="" />
                  <div className="projects-card-header">
                    <h4>A tribute page to Steve Jobs</h4>
                  </div>
                </a>
              </div>

              <div className="projects-card">
                <a
                  href="https://jikmunn-smart-tech-shop.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tech} alt="" />
                  <div className="projects-card-header">
                    <h4>A Tech for search tech products </h4>
                  </div>
                </a>
              </div>
              <div className="projects-card">
                <a
                  href="https://muhammad-jiku.github.io/second-assignment/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={influencer} alt="" />
                  <div className="projects-card-header">
                    <h4>An Influencer site</h4>
                  </div>
                </a>
              </div>

              <div className="projects-card">
                <a
                  href="https://jikmunn-airpod-analysis.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={review} alt="" />
                  <div className="projects-card-header">
                    <h4>Airpod review site</h4>
                  </div>
                </a>
              </div>

              <div className="projects-card">
                <a
                  href="https://muhammad-jiku.github.io/practice-2-restaurant-html-css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={restaurant} alt="" />
                  <div className="projects-card-header">
                    <h4>A restaurant site</h4>
                  </div>
                </a>
              </div>

              <div className="projects-card">
                <a
                  href="https://jikmunn-doctor-kader-time.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={doc} alt="" />
                  <div className="projects-card-header">
                    <h4>DR. Abdul kader website</h4>
                  </div>
                </a>
              </div>

              <div className="projects-card">
                <a
                  href="https://jikmunn-convention-projects-muhammad-jiku.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={convention} alt="" />
                  <div className="projects-card-header">
                    <h4>A Convention center site</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </Container>
    </div>
  );
};

export default Developer;
