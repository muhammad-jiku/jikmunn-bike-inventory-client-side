import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import siteLogo from '../../../Images/logo.png';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
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
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/bikeInventories">
                Inventories
              </Nav.Link> */}
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/manageinventories">
                Manage Items
              </Nav.Link>
              <Nav.Link as={Link} to="/additem">
                Add Item
              </Nav.Link>
              <Nav.Link as={Link} to="/myitems">
                My Items
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              <Button>Log Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
