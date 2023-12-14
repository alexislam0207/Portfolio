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
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Copyright © {year} Soumyajit Behera</h3>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
