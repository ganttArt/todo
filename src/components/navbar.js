import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../style/navbar.scss';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand id='home' href="#home">Home</Navbar.Brand>
    </Navbar>
  )
}

export default NavBar;
