import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/directory'>Directory</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </Col>
          <Col xs="6" sm="3" className="text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/amiradanceproductions"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/amiradanceproductions"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
          </Col>
          <Col sm="4" className="text-center">
            <a role="button" className="btn btn-link" href="tel:+13162210648">
              <i className="fa fa-phone" /> 1-316-221-0648
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:events@amiradanceproductions.com"
            >
              <i className="fa fa-envelope-o" /> Email Us
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
