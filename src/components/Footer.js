import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a separate, reusable Footer component.

const Footer = () => {
  return (
    <footer style={{ 
      textAlign: 'center', 
      padding: '2rem 0', 
      background: '#1a1a1a', // Changed color to make it visible against the Projects section
      borderTop: '1px solid rgba(0, 216, 255, 0.1)',
      color: 'white'
    }}>
      <Container>
        <Row>
          <Col>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              &copy; 2025 Laiba Irfan. All Rights Reserved.
            </p>
            <div className="mt-2">
              <a href="laibairfan546@gmail.com" className="text-white mx-2" aria-label="Gmail">
              <FaEnvelope size={20} />
              </a>
              <a href="www.linkedin.com/in/laiba-irfan-145bab2a4" className="text-white mx-2" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
