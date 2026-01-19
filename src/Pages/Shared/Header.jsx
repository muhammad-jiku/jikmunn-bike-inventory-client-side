import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import siteLogo from '../../Images/logo.png';
import auth from '../../firebase.init';
import styles from './styles/header.module.css';

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
        expand='lg'
        sticky='top'
        className={styles.navBarDesign}
      >
        <Container>
          <div onClick={() => navigate('/')}>
            <img
              src={siteLogo}
              alt='Bike Decor.png'
              className={styles.navBarDesignLogo}
            />
          </div>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className={`ms-auto ${styles.navBarDesignLink}`}>
              <Link to='/testimonials'>Testimonials</Link>
              <Link to='/blogs'>Blogs</Link>
              <Link to='/aboutbikedecor'>About</Link>
              {user ? (
                <>
                  <Link to='/manageinventories'>Inventories</Link>
                  <Link to='/addinventory'>Add Inventory</Link>
                  <Link to='/myinventories'>My Inventories</Link>
                  <button
                    onClick={signingOut}
                    className={styles.navBarDesignButton}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to='/login'>Sign In</Link>
                  <Link to='/register'>Sign Up</Link>
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
