import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a new, dedicated component for your education history.

const Education = () => {
  return (
    <section
      id="education"
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
      }}
    >
      {/* Adding a style block for the hover effect */}
      <style>{`
        .education-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .education-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
          transform: scale(0);
          transition: transform 0.3s ease-in-out;
          border-radius: 8px;
        }
        .education-card:hover::before {
          transform: scale(1);
        }
        .education-card-content {
          position: relative;
          z-index: 1;
        }
      `}</style>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4" style={{ fontWeight: "bold", color: "#00d8ff" }}>My Education</h1>
            <p className="lead" style={{ marginTop: "15px" }}>
              A summary of my academic background and qualifications.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Example Education Entry 1 */}
          <Col md={10}>
            <div 
              className="education-card"
              style={{ 
                backgroundColor: '#18313d', 
                padding: '2rem', 
                borderRadius: '8px', 
                marginBottom: '1.5rem',
                border: '1px solid #00d8ff'
              }}
            >
              <div className="d-flex align-items-center education-card-content">
                <FaGraduationCap size={40} style={{ color: "#00d8ff", marginRight: '1.5rem' }} />
                <div>
                  <h4 style={{ fontWeight: 'bold' }}>Jinnah University For Women</h4>
                  <h6 style={{ color: '#bdbdbd' }}>Bachelor's of Science in Computer Science</h6>
                  <p className="mb-0">Graduation Year : Feb 2022 - Jan 2026</p>
                   <p className="mb-0">CGPA : 3.7</p>
                 
                </div>
              </div>
            </div>
          </Col>
          
          {/* Example Education Entry 2 */}
          <Col md={10}>
            <div 
              className="education-card"
              style={{ 
                backgroundColor: '#18313d', 
                padding: '2rem', 
                borderRadius: '8px', 
                marginBottom: '1.5rem',
                border: '1px solid #00d8ff'
              }}
            >
              <div className="d-flex align-items-center education-card-content">
                <FaGraduationCap size={40} style={{ color: "#00d8ff", marginRight: '1.5rem' }} />
                <div>
                  <h4 style={{ fontWeight: 'bold' }}>Sir Adamjee Institute</h4>
                  <h6 style={{ color: '#bdbdbd' }}>Intermediate | Pre-Engineering</h6>
                  <p className="mb-0">Graduation Year : 2020-2021</p>
                  <p className="mb-0">Percentage : 85%</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Example Education Entry 2 */}
          <Col md={10}>
            <div 
              className="education-card"
              style={{ 
                backgroundColor: '#18313d', 
                padding: '2rem', 
                borderRadius: '8px', 
                marginBottom: '1.5rem',
                border: '1px solid #00d8ff'
              }}
            >
              <div className="d-flex align-items-center education-card-content">
                <FaGraduationCap size={40} style={{ color: "#00d8ff", marginRight: '1.5rem' }} />
                <div>
                  <h4 style={{ fontWeight: 'bold' }}>Al-Huda School</h4>
                  <h6 style={{ color: '#bdbdbd' }}>Matriculation | Science</h6>
                  <p className="mb-0">Graduation Year : 2018-2019</p>
                  <p className="mb-0">Percentage : 85%</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
