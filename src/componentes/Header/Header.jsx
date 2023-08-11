import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Menu } from '../Menu/Menu';
import { CartWidget } from '../CartWidget/CartWidget'

export const Header = () => {

  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Nav.Link href="/">
                <h1>REAL MADRID TIENDA</h1>
            </Nav.Link>
            { <Menu /> }
            { <CartWidget /> }
        </Container>
    </Navbar>
  );
};