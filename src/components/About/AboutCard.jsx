import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vaishnavi Sakunde </span>
            from <span className="purple">  Satara, Maharashtra.</span>
            <br />
            I am currently persuing my Bachelors in Computer Science and Engineering 
            From Karmaveer Bhaurao Patil College of Enginerring , Satara.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Carrom
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Paper Crafts
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Podcasts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vaishnavi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
