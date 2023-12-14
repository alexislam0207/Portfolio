import React from "react";
import Card from "react-bootstrap/Card";
import UCSD from "../../Assets/Seal_of_the_University_of_California,_San_Diego.svg.png";
import FootHill from "../../Assets/foothill-college-logo.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div id="edu_container">
            <div className="edu_img">
              <img src={UCSD} id="UCSD_img" className="img-fluid" alt="UCSD" />
            </div>
            <div xs={7} className="edu_details">
              <p style={{ textAlign: "justify" }}>
                University of California, San Diego (2015 - 2017)
                <br />
                <span className="purple">BA Economics, GPA 3.35/4 </span>
              </p>
            </div>

            <div className="edu_img">
              <img
                src={FootHill}
                id="Foothill_img"
                className="img-fluid"
                alt="Foothill"
              />
            </div>
            <div xs={7} className="edu_details">
              <p style={{ textAlign: "justify" }}>
                Foothill College (2013 - 2015) <br />
                <span className="purple">
                  University transferable course, GPA 3.8/4
                </span>
              </p>
            </div>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
