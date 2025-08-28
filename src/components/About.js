import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { FaLaptopCode, FaTools, FaLightbulb, FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

// This About component has been updated to remove the skills section
// to prepare for a new, dedicated Skills page.

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
      }}
    >
      <Container>
        {/* About Me Section Header */}
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4" style={{ fontWeight: "bold", color: "#00d8ff" }}>About Me</h1>
            <p className="lead" style={{ marginTop: "15px" }}>
              A little about my journey and passion for web development.
            </p>
          </Col>
        </Row>

        {/* Main Content: Image and Bio */}
        <Row className="align-items-center mb-5">
          <Col md={4} className="text-center mb-4 mb-md-0">
            {/* Replace this placeholder with your actual professional photo */}
            <Image
              src="About.png"
              fluid
              roundedCircle
              alt="Laiba Irfan"
              style={{
                width:"520px",
                height:"370px",
                border: "4px solid #00d8ff",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              }}
            />
          </Col>
          <Col md={8}>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              As a dedicated Computer Science undergraduate, I am passionate about leveraging my strong foundation
               in programming to build impactful digital solutions. I have honed my skills as a web developer, creating responsive, intuitive, and engaging web experiences. My academic journey has equipped me with a solid understanding of core computer science principles,
               which I am eager to apply in a professional setting.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              I am actively seeking an internship opportunity where I can contribute to innovative projects and gain 
              hands-on industry experience. I am a quick learner and a collaborative team member, and I am particularly 
              enthusiastic about exploring the dynamic fields of web and mobile application development. My goal is to
               work alongside experienced professionals, grow my skill set, and contribute to projects that make a real-world
                difference.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
