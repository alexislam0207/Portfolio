import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiPostgresql,
  SiJest,
  SiExpress
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { TiHtml5 } from "react-icons/ti";
import { FaGit, FaCss3Alt } from "react-icons/fa";




function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="skill_name">Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="skill_name">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="skill_name">React.js</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TiHtml5 />
        <p className="skill_name">HTML</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
        <p className="skill_name">CSS</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <PiFileSql />
        <p className="skill_name">SQL</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p className="skill_name">PostgreSQL</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p className="skill_name">Express.js</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <p className="skill_name">Jest</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGit />
        <p className="skill_name">Git</p>

      </Col>
    
    </Row>
  );
}

export default Techstack;
