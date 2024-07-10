import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "../pages/About";
import Features from "../pages/Features";
import Blog from "../pages/Blog";
import Partners from "../pages/Partners";
import Projects from "../pages/Projects";
import LandingSection from "../pages/LandingSection";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Landing() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <LandingSection />
        </Col>
      </Row>
      <Row>
        <Col>
          <About />
        </Col>
      </Row>
      <Row>
        <Col>
          <Features />
        </Col>
      </Row>
      <Row>
        <Col>
          <Blog />
        </Col>
      </Row>
      <Row>
        <Col>
          <Partners />
        </Col>
      </Row>
      <Row>
        <Col>
          <Projects />
        </Col>
      </Row>
    </Container>
  );
}
