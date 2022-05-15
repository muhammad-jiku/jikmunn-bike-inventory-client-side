import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import siteLogo from '../../../Images/logo.png';
import './Footer.css';

const Footer = () => {
  const date = new Date();
  const navigate = useNavigate();
  return (
    <div className="footerSection">
      <div className="footersectionDetails">
        <div className="footersectionDetailsBox">
          <img
            src={siteLogo}
            alt="Bike Decor.png"
            className="footerStyleLogo"
            onClick={() => navigate('/')}
          />
          <p>
            This site is developed by{' '}
            <span className="authorName">
              <Link to="/aboutdeveloper">JIKMUNN</Link>
            </span>
          </p>
        </div>
        <div className="footersectionDetailsBox">
          <ul>
            <li>
              <h3>Explore</h3>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/aboutbikedecor">About</Link>
            </li>
            <li>
              <Link to="/manageinventories">Inventories</Link>
            </li>
          </ul>
        </div>
        <div className="footersectionDetailsBox">
          <ul>
            <li>
              <h3>Legal</h3>
            </li>
            <li>
              <Link to="/terms">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="footersectionDetailsBox">
          <ul>
            <li>
              <h3>Contact Us</h3>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} /> &nbsp;{' '}
              <span>Address</span>: Grand Trunk Rd, FENI
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> &nbsp;
              <span>Phone</span>: 01840534898
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
              <span>Email</span>: bikedecor123@gmail.com
            </li>
          </ul>
        </div>
        <div className="footersectionDetailsBox">
          <ul>
            <li>
              <h3>Follow</h3>
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} /> &nbsp; Facebook
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} /> &nbsp; WhatsApp
            </li>
          </ul>
        </div>
      </div>
      <div className="footerSectionCopyright">
        <p>
          &copy;copyright {date.getFullYear()} All copyright rights reserved to
          <span className="authorName"> bike decor</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
