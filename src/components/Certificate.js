import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Certificate = () => {
  return (
    <section
      id="certifications"
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
      }}
    >
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4" style={{ fontWeight: "bold", color: "#00d8ff" }}>My Certifications</h1>
            <p className="lead" style={{ marginTop: "15px" }}>
              A list of my professional certifications and achievements.
            </p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          {/* Example Certification Card 1 */}
          <Col xs={12} md={6} lg={4}>
            <Card style={{ 
                backgroundColor: '#18313d', 
                border: 'none', 
                color: 'white', 
                transition: 'transform 0.2s, box-shadow 0.2s', // Added box-shadow to transition
                '&:hover': { transform: 'scale(1.05)' },
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' // Added shadow here
              }}>
              <Card.Body className="text-center" style={{ padding: '25px' }}>
                <FaCertificate size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="card-title mb-3" style={{ fontWeight: "bold", color: "#00d8ff" }}>Automation With Selenium Web Driver & TestNg</h4>
                <Card.Text>
                  A certificate in test automation with Selenium WebDriver and TestNG, focusing on script development, execution, and software quality
                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">Selenium WebDriver</span>
                  <span className="badge bg-secondary me-2">Test Automation</span>
                  <span className="badge bg-secondary">TestNg Framework</span>
                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a
                  href="https://10pearlsuniversity.org/view-certificate/?cid=10PUC-ac68ddc6cfe054e45ef9385d30167e5dfdb76c00f1da8b6a438912907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  style={{ borderColor: '#00d8ff', color: '#00d8ff' }}
                >
                  <FaExternalLinkAlt className="me-1" /> View Certificate
                </a>
              </Card.Footer>
            </Card>
          </Col>

          {/* Example Certification Card 2 */}
          <Col xs={12} md={6} lg={4}>
            <Card style={{ 
                backgroundColor: '#18313d', 
                border: 'none', 
                color: 'white', 
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
              }}>
              <Card.Body className="text-center" style={{ padding: '25px' }}>
                <FaCertificate size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="card-title mb-3" style={{ fontWeight: "bold", color: "#00d8ff" }}>Roadmap To Product Management</h4>
                <Card.Text>
                  A certificate demonstrating knowledge of product management fundamentals, 
                  including roadmap planning, product lifecycle, market research, and 
                  stakeholder collaboration.
                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">Product Roadmap</span>
                  <span className="badge bg-secondary me-2">Strategy</span>
                  <span className="badge bg-secondary">Stakeholder Management</span>
                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a
                  href="https://10pearlsuniversity.org/view-certificate/?cid=10PUC-d193270a564785a6add131c2ad08691b574d4dcbf387ba77438915324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  style={{ borderColor: '#00d8ff', color: '#00d8ff' }}
                >
                  <FaExternalLinkAlt className="me-1" /> View Certificate
                </a>
              </Card.Footer>
            </Card>
          </Col>

          {/* Example Certification Card 3 */}
          <Col xs={12} md={6} lg={4}>
            <Card style={{ 
                backgroundColor: '#18313d', 
                border: 'none', 
                color: 'white', 
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
              }}>
              <Card.Body className="text-center" style={{ padding: '25px' }}>
                <FaCertificate size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="card-title mb-3" style={{ fontWeight: "bold", color: "#00d8ff" }}>TestCase Management With TestWorthy</h4>
                <Card.Text>
                  A certificate in creating and managing test cases with TestWorthy, 
                  focusing on quality assurance, execution tracking, and reporting
                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">TestCase Design</span>
                  <span className="badge bg-secondary me-2">Execution & Tracking</span>
                  <span className="badge bg-secondary">Quality Assurance</span>
                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a
                  href="https://10pearlsuniversity.org/view-certificate/?cid=10PUC-2f4ea095fe54e2c4f5316f377554e01cbfb2a0dd897a2be3438916967"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  style={{ borderColor: '#00d8ff', color: '#00d8ff' }}
                >
                  <FaExternalLinkAlt className="me-1" /> View Certificate
                </a>
              </Card.Footer>
            </Card>
          </Col>

          {/* Example Certification Card 4 */}
          <Col xs={12} md={6} lg={4}>
            <Card style={{ 
                backgroundColor: '#18313d', 
                border: 'none', 
                color: 'white', 
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
              }}>
              <Card.Body className="text-center" style={{ padding: '25px' }}>
                <FaCertificate size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="card-title mb-3" style={{ fontWeight: "bold", color: "#00d8ff" }}>Draw an Interactive Wireframe Using Mockplus</h4>
                <Card.Text>
                  A certificate in creating interactive wireframes and prototypes with
                  Mockplus, focusing on UI design and user experience flow.
                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">UI/UX Designing</span>
                  <span className="badge bg-secondary me-2">Wireframing</span>
                  <span className="badge bg-secondary">Prototyping</span>
                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/120K60LSQORF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  style={{ borderColor: '#00d8ff', color: '#00d8ff' }}
                >
                  <FaExternalLinkAlt className="me-1" /> View Certificate
                </a>
              </Card.Footer>
            </Card>
          </Col>

          {/* Example Certification Card 5 */}
          <Col xs={12} md={6} lg={4}>
            <Card style={{ 
                backgroundColor: '#18313d', 
                border: 'none', 
                color: 'white', 
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
              }}>
              <Card.Body className="text-center" style={{ padding: '25px' }}>
                <FaCertificate size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="card-title mb-3" style={{ fontWeight: "bold", color: "#00d8ff" }}>Getting Started With Microsoft Excel</h4>
                <Card.Text>
                  A certificate showcasing foundational skills in Microsoft Excel, including 
                  data entry, formulas, functions, formatting, and basic data analysis.
                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">SpreadSheets</span>
                  <span className="badge bg-secondary me-2">Formula & Function</span>
                  <span className="badge bg-secondary">Data Analysis</span>
                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/8DWPAAUCA5TV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  style={{ borderColor: '#00d8ff', color: '#00d8ff' }}
                >
                  <FaExternalLinkAlt className="me-1" /> View Certificate
                </a>
              </Card.Footer>
            </Card>
          </Col>

          {/* Example Certification Card 6 */}
          <Col xs={12} md={6} lg={4}>
            <Card style={{ 
                backgroundColor: '#18313d', 
                border: 'none', 
                color: 'white', 
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
              }}>
              <Card.Body className="text-center" style={{ padding: '25px' }}>
                <FaCertificate size={50} style={{ color: "#00d8ff" }} className="mb-3" />
                <h4 className="card-title mb-3" style={{ fontWeight: "bold", color: "#00d8ff" }}>Introduction To Relational Database & SQL</h4>
                <Card.Text>
                  A certificate demonstrating foundational knowledge of relational database concepts, 
                  SQL queries and database design principles.
                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">Relational Database</span>
                  <span className="badge bg-secondary me-2">SQL Queries</span>
                  <span className="badge bg-secondary">Data Management</span>
                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/6LF5J5A7PTYL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  style={{ borderColor: '#00d8ff', color: '#00d8ff' }}
                >
                  <FaExternalLinkAlt className="me-1" /> View Certificate
                </a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Certificate;