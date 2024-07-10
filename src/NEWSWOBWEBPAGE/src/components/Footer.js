import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const Footer = () => {
  return (
    <footer className="section bg-footer">
      <Container>
        <Row>
          <Col lg={3} sm={6}>
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">Information</h6>
              <ul className="list-unstyled footer-link mt-4">
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">Resources</h6>
              <ul className="list-unstyled footer-link mt-4">
                <li><a href="#">Telematary</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Term & Service</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={2} sm={6}>
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">Help</h6>
              <ul className="list-unstyled footer-link mt-4">
                <li><a href="#">Terms of Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
              <p className="contact-info mt-4">infor@smswithouborders.com</p>
              <p className="contact-info">+237 677777766</p>
              <div className="mt-5">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} className="footer-social-icon" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><FontAwesomeIcon icon={faTwitter} className="footer-social-icon" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><FontAwesomeIcon icon={faGithub} className="footer-social-icon" /></a>
                  </li>
                  {/* <li className="list-inline-item">
                    <a href="#"><FontAwesomeIcon icon={fa} className="footer-social-icon" /></a>
                  </li> */}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-5">
        <p className="footer-alt mb-0 f-14">© Smswithoutborders.com</p>
      </div>
    </footer>
  );
};

export default Footer;
