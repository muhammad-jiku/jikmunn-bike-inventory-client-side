import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
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
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        // className="navBarStyle"
      >
        <Container>
          <div onClick={() => navigate('/')}>
            <img
              src={siteLogo}
              alt="Bike Decor.png"
              className="navBarStyleLogo"
            />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/manageinventories">
                    Inventories
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addinventory">
                    Add Inventory
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myinventories">
                    My Inventories
                  </Nav.Link>
                  <Button onClick={signingOut}>Log Out</Button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Log In
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
