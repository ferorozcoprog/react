import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
  return (
    <footer className="mt-auto">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} RM TIENDA. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};