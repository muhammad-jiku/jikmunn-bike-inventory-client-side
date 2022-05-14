import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import siteLogo from '../../../Images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Header.css';
import { signOut } from 'firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const signingOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="navBarDesign"
      >
        <Container>
          <div onClick={() => navigate('/')}>
            <img
              src={siteLogo}
              alt="Bike Decor.png"
              className="navBarDesignLogo"
            />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navBarDesignLink">
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/aboutbikedecor">About</Link>
              {user ? (
                <>
                  <Link to="/manageinventories">Inventories</Link>
                  <Link to="/addinventory">Add Inventory</Link>
                  <Link to="/myinventories">My Inventories</Link>
                  <button onClick={signingOut}>Sign Out</button>
                </>
              ) : (
                <>
                  <Link to="/login">Sign In</Link>
                  <Link to="/register">Sign Up</Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
