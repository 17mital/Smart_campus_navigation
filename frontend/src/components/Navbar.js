import React, { useState, useEffect } from 'react';
import Search from './Search';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';  // Import CSS for styling

const NavigationBar = () => {
  const [navbar, setNavbar] = useState(false);

  // Sticky Navbar Effect on Scroll
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <Navbar className={navbar ? 'navbar sticky' : 'navbar'} expand="lg">
      <Container>
        <Navbar.Brand style={{color :"white"}} href="/">Smart College Navigator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/map">Campus Map</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
