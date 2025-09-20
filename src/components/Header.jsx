import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo2.png';
import styles from './Header.module.css';

const Header = () => {
  // Get the current location
  const location = useLocation();

  // Check if the current page is the home page
  const isHomePage = location.pathname === '/';

  return (
    <Navbar expand="lg" className={`${styles.navbar} ${!isHomePage ? styles.solidNavbar : ''}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.brand}>
          <img
            src={logo}
            width="120"
            height="120"
            className="d-inline-block align-top"
            alt="Beatzwave Logo"
          />
          <span className={styles.brandText}>BEATZWAVE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link as={Link} to="/products" className={styles.navLink}>Products</Nav.Link>
            <Nav.Link as={Link} to="/services" className={styles.navLink}>Services</Nav.Link>
            <Nav.Link as={Link} to="/about" className={styles.navLink}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={styles.navLink}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;