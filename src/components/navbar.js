import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../style/navbar.scss';

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand id='home' href="#home">Home</Navbar.Brand>
    </Navbar>
  )
}

export default NavBar;
