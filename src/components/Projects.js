import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

// This new component is a dedicated page for your projects.

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
      }}
    >
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4" style={{ fontWeight: "bold", color: "#00d8ff" }}>My Projects</h1>
            <p className="lead" style={{ marginTop: "15px" }}>
              A selection of my recent work, showcasing my skills and creativity.
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {/* Example Project Card 1 */}
          <Col md={6} lg={4}>
            <Card style={{ backgroundColor: '#18313d', border: 'none', color: 'white', height: '100%' }}>
              <Card.Img
                variant="top"
                src="Edvoke.png"
                alt="Project 1"
                style={{ borderBottom: '3px solid #00d8ff' }}
              />
              <Card.Body>
                <Card.Title style={{color: "#00d8ff"}}>Edvoke</Card.Title>
                <Card.Text>
                  A final-year project built as an Outcome-Based Education (OBE) system to streamline academic
                  management and performance evaluation. It enables efficient course mapping, CLO/PLO tracking,
                  and real-time data management.
                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">React</span>
                  <span className="badge bg-secondary me-2">Node.js</span>
                  <span className="badge bg-secondary me-2">Express.js</span>
                  <span className="badge bg-secondary">Firebase</span>
                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a href="https://github.com/laibairfan1/Edvoke.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
                  <FaGithub className="me-1" /> GitHub
                </a>
              </Card.Footer>
            </Card>
          </Col>

          {/* Example Project Card 2 */}
          <Col md={6} lg={4}>
            <Card style={{ backgroundColor: '#18313d', border: 'none', color: 'white', height: '100%' }}>
              <Card.Img
                variant="top"
                src="/MyPortfolio1/Notes.png"
                alt="Project 2"
                style={{ borderBottom: '3px solid #00d8ff' }}
              />
              <Card.Body>
                <Card.Title style={{color: "#00d8ff"}}>NotesNest</Card.Title>
                <Card.Text>
                  A full-stack note management app where users can create, read, update, and delete notes.
                  Implemented code quality analysis with SonarQube and performed testing using Jest and Mocha/Chai
                  to ensure reliability and maintainability.
                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">React</span>
                  <span className="badge bg-secondary me-2">Node.js</span>
                  <span className="badge bg-secondary me-2">Express.js</span>
                  <span className="badge bg-secondary me-2">MySQL</span>
                  <span className="badge bg-secondary me-2">SonarQube</span>
                  <span className="badge bg-secondary me-2">Jest</span>
                  <span className="badge bg-secondary">Mocha/Chai</span>
                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a href="https://github.com/laibairfan1/laibairfan-mern-10pshine.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
                  <FaGithub className="me-1" /> GitHub
                </a>

              </Card.Footer>
            </Card>
          </Col>


          <Col md={6} lg={4}>
            <Card style={{ backgroundColor: '#18313d', border: 'none', color: 'white', height: '100%' }}>
              <Card.Img
                variant="top"
                src="Quiz.png"
                alt="Project 1"
                style={{ borderBottom: '3px solid #00d8ff' }}
              />
              <Card.Body>
                <Card.Title style={{color: "#00d8ff"}}>Quiz Management System</Card.Title>
                <Card.Text>
                  A Quiz Management System developed as a final project for an Object-Oriented Programming (OOP) course.
                  This application allows users to take quizzes on various subjects, tracks their scores, and provides a
                  streamlined way to manage quiz content.
                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">Python</span>
                  <span className="badge bg-secondary me-2">Abstraction</span>
                  <span className="badge bg-secondary me-2">Polymorphism</span>
                  <span className="badge bg-secondary me-2">Inheritance</span>
                  <span className="badge bg-secondary">Encapsulation</span>
                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a href="https://github.com/laibairfan1/QuizManagementSystem.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
                  <FaGithub className="me-1" /> GitHub
                </a>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card style={{ backgroundColor: '#18313d', border: 'none', color: 'white', height: '100%' }}>
              <Card.Img
                variant="top"
                src="https://uiworkshop.com/upload/images/23ce1851341ec1fa9e0c259de10bf87c_ed2076733e071c0b132556440687e6ad.jpg"
                alt="Project 3"
                style={{ borderBottom: '3px solid #00d8ff' }}
              />
              <Card.Body>
                <Card.Title style={{color: "#00d8ff"}} >Skuduko Solver</Card.Title>
                <Card.Text>
                  A Sudoku-solving program developed as a final project for a Programming Fundamentals course.
                  The project uses Python to implement a backtracking algorithm, demonstrating fundamental programming
                  concepts such as functions, conditional statements, and loops to solve Sudoku puzzles efficiently.
                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">Python</span>
                  <span className="badge bg-secondary me-2">Programming Fundamentals</span>
                  <span className="badge bg-secondary me-2">Backtraking</span>
                  <span className="badge bg-secondary me-2">Conditional Statements</span>

                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a href="https://github.com/laibairfan1/skuduko-solver.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
                  <FaGithub className="me-1" /> GitHub
                </a>
              </Card.Footer>
            </Card>
          </Col>


          <Col md={6} lg={4}>
            <Card style={{ backgroundColor: '#18313d', border: 'none', color: 'white', height: '100%' }}>
              <Card.Img
                variant="top"
                src="https://cdn.dribbble.com/userupload/11480769/file/original-cc2c03a32add2636828375eda4fe51a1.png?resize=400x0"
                alt="Project 3"
                style={{ borderBottom: '3px solid #00d8ff' }}
              />
              <Card.Body>
                <Card.Title style={{color: "#00d8ff"}}>Cubic Solver</Card.Title>
                <Card.Text>
                  A classic Tic-Tac-Toe game developed as part of a Data Structures and Algorithms (DSA) course.
                  This project focuses on implementing core DSA concepts such as arrays and matrices to manage game state and efficient algorithms to check for win conditions.
                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">Python</span>
                  <span className="badge bg-secondary me-2">DSA</span>
                  <span className="badge bg-secondary me-2">Arrays</span>
                  <span className="badge bg-secondary me-2">Linked List</span>
                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a href="https://github.com/laibairfan1/Cubic-Solvers.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
                  <FaGithub className="me-1" /> GitHub
                </a>
              </Card.Footer>
            </Card>
          </Col>


<Col md={6} lg={4}>
            <Card style={{ backgroundColor: '#18313d', border: 'none', color: 'white', height: '100%' }}>
              <Card.Img
                variant="top"
                src="https://cdn3.f-cdn.com//files/download/195255322/ag%28mockup%29.png?width=780&height=520&fit=crop"
                alt="Project 3"
                style={{ borderBottom: '3px solid #00d8ff' }}
              />
              <Card.Body>
                <Card.Title style={{color: "#00d8ff"}}>ArtGallery</Card.Title>
                <Card.Text>
                  An interactive Art Gallery website designed to showcase artwork in a visually appealing way. 
                  This project features modern UI design, smooth navigation, and organized layouts to highlight 
                  each piece of art. 

                </Card.Text>
                <div className="mt-3">
                  <span className="badge bg-secondary me-2">HTML</span>
                  <span className="badge bg-secondary me-2">CSS</span>
                  <span className="badge bg-secondary me-2">JavaScript</span>
                
                </div>
              </Card.Body>
              <Card.Footer style={{ background: 'transparent', borderTop: 'none' }}>
                <a href="https://github.com/laibairfan1/Code_Alpha_ArtGallery.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info me-2">
                  <FaGithub className="me-1" /> GitHub
                </a>
              </Card.Footer>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Projects;
