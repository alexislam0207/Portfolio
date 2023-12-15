import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import newServer from "../../Assets/Projects/news-server.png";
import comingSoon from "../../Assets/Projects/coming-soon.png";

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
              imgPath={newServer}
              isBlog={false}
              title="News-server"
              description="A comprehensive and versatile back-end server for news data, users
              can access and amend data about articles and comments etc."
              skills="PSQL | Express | Jest | Supertest | Javascript"
              ghLink="https://github.com/alexislam0207/news-server"
              demoLink="https://alexis-news-server.onrender.com/api/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Northcoders-news"
              description="A front-end website that is implemented based on the news server, designed with UI, UX, 
              and responsiveness in mind."
              skills="React.js | Javascript | HTML | CSS"
              ghLink="https://github.com/alexislam0207/Northcoders-news"
              demoLink="https://alexis-northcoders-news.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
