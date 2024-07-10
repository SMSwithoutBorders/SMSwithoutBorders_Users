import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <Container fluid >
        <Row className="clearfix">
          {/* Content Column */}
          <Col md={6} sm={12} className="content-column">
            <div className="inner-column">
              <div className="sec-title">
                <div className="title">About Us</div>
                <h2>
                what is it all about</h2>
              </div>
              <div className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
              </div>
              <Button href="about.js" className="theme-btn btn-style-three">Read More</Button>
            </div>
          </Col>

          {/* Image Column */}
          <Col md={6} sm={12} className="image-column">
            <div className="inner-column">
              <div className="image">
                <img src="/logo.png" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
