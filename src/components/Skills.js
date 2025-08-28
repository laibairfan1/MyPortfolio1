import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaTools, FaLightbulb, FaUser, FaServer,FaPencilRuler,FaClipboardCheck } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

// This Skills component now includes interactive hover effects to make it more dynamic.

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
      }}
    >
      {/* Adding a style block for hover effects and a subtle animation */}
      <style>{`
        .skill-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          cursor: pointer;
        }
        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 216, 255, 0.1);
        }
        .skill-badge {
          transition: transform 0.2s ease-in-out;
        }
        .skill-badge:hover {
          transform: scale(1.1);
        }

        .styled-card {
          position: relative;
          background: #18313d; /* Solid background color */
          padding: 2.5rem;
          border-radius: 12px;
          border: 1px solid transparent;
          background-clip: padding-box;
          text-align: center;
          transition: transform 0.3s ease-in-out;
          box-shadow: 0 10px 25px rgba(0, 216, 255, 0.1); /* More visible permanent shadow */
        }

        .styled-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, #00d8ff, #2c5364, #00d8ff);
          z-index: -1;
          border-radius: 14px;
          opacity: 0.8; /* More visible permanent glow */
          transition: opacity 0.3s ease-in-out;
        }

        .styled-card:hover::before {
          opacity: 1; /* Stronger glow on hover */
        }

        .styled-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 216, 255, 0.3); /* Stronger shadow on hover */
        }
        
        .styled-card-content {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .styled-card {
            padding: 2rem;
          }
        }
      `}</style>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4" style={{ fontWeight: "bold", color: "#00d8ff" }}>My Skills</h1>
            <p className="lead" style={{ marginTop: "15px" }}>
              A look at the technologies I use and my core competencies.
            </p>
          </Col>
        </Row>

        {/* Hard Skills Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#00d8ff" }}>Hard Skills</h2>
          </Col>
        </Row>
        <Row className="g-4 mb-5">
          <Col md={6} lg={4}>
            <div className="styled-card">
              <div className="styled-card-content">
                <FaLaptopCode size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="mb-2" style={{ fontWeight: 'bold' }}>Front-End Development</h4>
                <p>I specialize in building responsive and interactive user interfaces using modern front-end frameworks and libraries.</p>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2 skill-badge">React</span>
                  <span className="badge bg-secondary me-2 skill-badge">JavaScript</span>
                  <span className="badge bg-secondary me-2 skill-badge">HTML5</span>
                  <span className="badge bg-secondary me-2 skill-badge">CSS3</span>
                  <span className="badge bg-secondary skill-badge">Bootstrap</span>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="styled-card">
              <div className="styled-card-content">
                <FaServer size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="mb-2" style={{ fontWeight: 'bold' }}>Back-End Development</h4>
                <p>I have experience with building server-side applications and connecting them to databases.</p>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2 skill-badge">Node.js</span>
                  <span className="badge bg-secondary me-2 skill-badge">Express</span>
                  <span className="badge bg-secondary me-2 skill-badge">Firebase</span>
                  <span className="badge bg-secondary skill-badge">MYSQL</span>
                  
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="styled-card">
              <div className="styled-card-content">
                <FaTools size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="mb-2" style={{ fontWeight: 'bold' }}>Tools & Workflow</h4>
                <p>I use essential development tools to maintain an efficient and collaborative workflow.</p>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2 skill-badge">Git</span>
                  <span className="badge bg-secondary me-2 skill-badge">GitHub</span>
                  <span className="badge bg-secondary me-2 skill-badge">npm</span>
                  <span className="badge bg-secondary skill-badge">VS Code</span>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="styled-card">
              <div className="styled-card-content">
                <FaPencilRuler size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="mb-2" style={{ fontWeight: 'bold' }}>UI/UX Design</h4>
                <p>I use tools like Visily, Figma, and Canva to design interactive wireframes 
                  and prototypes for better user experiences.</p>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2 skill-badge">Visily</span>
                  <span className="badge bg-secondary me-2 skill-badge">Figma</span>
                  <span className="badge bg-secondary me-2 skill-badge">Canva</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Soft Skills Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#00d8ff" }}>Soft Skills</h2>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <div className="styled-card">
              <div className="styled-card-content">
                <FaLightbulb size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="mb-2" style={{ fontWeight: 'bold' }}>Problem Solving</h4>
                <p>A logical thinker who enjoys solving complex problems and debugging for efficient solutions.</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="styled-card">
              <div className="styled-card-content">
                <FaUser size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="mb-2" style={{ fontWeight: 'bold' }}>Team Collaboration</h4>
                <p>An effective communicator and collaborator, I work well in team environments.</p>
              </div>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="styled-card">
              <div className="styled-card-content">
                <FaClipboardCheck size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="mb-2" style={{ fontWeight: 'bold' }}>Organized & Consistent</h4>
                <p>I maintain a structured workflow and deliver results with reliability and consistency.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
