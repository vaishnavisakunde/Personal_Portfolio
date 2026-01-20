import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Random_dog from "../../Assets/Projects/Random_dog.jpg";
import Laptop from "../../Assets/Projects/Laptop.jpg";
import Chatbot from "../../Assets/Projects/Chatbot.jpg";
import Agritech from "../../Assets/Projects/Agritech.jpg";
import Face from "../../Assets/Projects/Face.jpg";


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
              imgPath={Random_dog}
              isBlog={false}
              title="Random Dog Pic Generator"
              description="The Random Dog Picture Generator is a fun and interactive web application built using React.js that fetches and displays random dog images from the Dog CEO's Dog API.Users can generate new dog images by clicking a button, making the app a perfect example of working with APIs, React hooks, and real-time data rendering."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Laptop}
              isBlog={false}
              title="Laptop Rental Website"
              description="The Laptop Rental Website is a fully responsive static website designed for users to browse, explore, and request laptops for rent. Built using core web technologies — HTML, CSS, and JavaScript — this project showcases a modern UI and essential features for a rental service platform."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chatbot}
              isBlog={false}
              title="DocChat- Disease Prediction Chatbot"
              description="DocChat is an intelligent disease prediction chatbot powered by Machine Learning that allows users to describe their symptoms in natural language and receive probable disease predictions along with basic advice. Built with a combination of ML algorithms , DocChat aims to provide quick and accessible preliminary health insights.."
              ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agritech}
              isBlog={false}
              title="AgriTech- An E-commerce Website"
              description="AgriTech is a modern e-commerce platform tailored for the agricultural sector, allowing farmers and agri-businesses to browse, select, and purchase farming essentials such as seeds, fertilizers, pesticides, tools, and machinery online. The platform is designed with a user-friendly interface and to simplify the procurement process for rural and urban farmers alike.."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Face}
              isBlog={false}
              title="Face Recognition Attendance System"
              description="The Face Recognition Attendance System is an AI-powered application that automates the process of recording attendance by recognizing faces using a webcam or live camera feed. This system enhances accuracy, saves time, and reduces the chances of proxy or fraudulent attendance in educational institutions, offices, and events."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
