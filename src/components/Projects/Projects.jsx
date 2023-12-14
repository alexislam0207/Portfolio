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
              description="A back-end news application created with SQL, PSQL, Express, Jest, Supertest, and Javascript. Users
              can access and amend data about topics, articles, comments, etc."
              ghLink="https://github.com/alexislam0207/news-server"
              demoLink="https://alexis-news-server.onrender.com/api/articles"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comingSoon}
              isBlog={false}
              title="Northcoders-news"
              description="A front-end news application created with React.js, Javascript, HTML and CSS. Users
              can access all the articles, filter and sort by different categories, post comment and delete their own comment etc."
              ghLink="https://github.com/alexislam0207/Northcoders-news"
              demoLink="https://github.com/alexislam0207/Northcoders-news"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
