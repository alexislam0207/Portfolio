import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            A multicultural university graduate with 6 years of work experience in <b className="purple">Manchester, UK</b>.<br />
              <br />Raised in <b className="purple">Hong Kong</b> and received higher education in the <b className="purple">United States</b>.
              <br />
              <br />
              A passion for problem-solving led me to start a full-time software development course with <b className="purple">Northcoders</b> where I gained a solid understanding of programming fundamentals and applied my knowledge in creating projects.
              <br />
              <br />
              I am open to opportunities.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} id="my_pic" className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alexislam0207"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alexis-hoi-man-lam-b67184253/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
