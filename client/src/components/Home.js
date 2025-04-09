import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid className="min-vh-100 d-flex justify-content-center align-items-center">
      <Row className="justify-content-center text-center">
        <Col xs={12} md={6}>
          <h1>Welcome to My App!</h1>
          <p>Start exploring today</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;