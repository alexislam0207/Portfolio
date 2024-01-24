import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import newServer from "../../Assets/Projects/new-server.png";
import comingSoon from "../../Assets/Projects/northcoders-news.png";
import TRIPPIN from "../../Assets/Projects/TRIPPIN.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TRIPPIN}
              isBlog={false}
              title="TRIPPIN"
              description="This was a final project in Northcoders created as a group of 5 students in 7 days. It is a full-stack mobile app for documenting holidays."
              skills="Firebase | React Native | Javascript | Mapbox"
              ghLink="https://github.com/alexislam0207/TRIPPIN"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Northcoders-news"
              description="A front-end website that is implemented based on the news server. Designed with UI, UX, 
              and responsiveness in mind."
              skills="React.js | Javascript | HTML | CSS"
              ghLink="https://github.com/alexislam0207/Northcoders-news"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newServer}
              isBlog={false}
              title="News-server"
              description="A comprehensive back-end news server. Designed with test-driven development to ensure reliability."
              skills="PSQL | Express | Jest | Supertest | Javascript"
              ghLink="https://github.com/alexislam0207/news-server"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
