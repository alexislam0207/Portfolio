import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-copywright">
          <a
            href="https://github.com/soumyajit4419"
            style={{ color: "white" }}
          >
            Copyright © {year} Soumyajit Behera
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
