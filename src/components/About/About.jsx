import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <br />
        <h1 style={{ fontSize: "2.3em", paddingBottom: "20px" }}>Education</h1>
        <Aboutcard />
        <br />
        <br />
        <br />
        <h1 className="project-heading">Professional Skillset</h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
