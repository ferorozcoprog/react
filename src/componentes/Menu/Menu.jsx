import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/productos/1erEquipo">1era. equipación</Nav.Link>
          <Nav.Link href="/productos/2doEquipo">2da. equipación</Nav.Link>
          <Nav.Link href="/productos/3erEquipo">3era. equipación</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};