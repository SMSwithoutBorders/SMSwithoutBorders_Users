import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => (
  <Container className="my-5">


      <Row>
      <h2 className="text-center mb-4">Features</h2>
        <Col lg={4} md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Feature 1</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Feature 2</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Feature 3</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col lg={6} className="mb-4">
          <img src="https://via.placeholder.com/500x300" alt="About Us" className="img-fluid rounded" />
        </Col>
        <Col lg={6} className="mb-4">
        <h2 className="text-center my-4">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus at. Vestibulum a augue placerat, tincidunt risus quis, ornare risus.</p>
        </Col>
      </Row>
  </Container>
);

export default Features;
