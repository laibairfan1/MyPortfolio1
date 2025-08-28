import React from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar
        expand="lg"
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          padding: "15px 30px",
          position: "fixed",
          width: "100%",
          zIndex: "1000",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              fontWeight: "bold",
              color: "#00d8ff",
              fontSize: "1.5rem",
              letterSpacing: "1px",
            }}
          >
            Laiba Irfan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ fontSize: "1.1rem" }}>
              {["Home", "About", "Skills", "Projects", "Education", "Certificate"].map(
                (item, idx) => (
                  <Nav.Link
                    key={idx}
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: "white",
                      margin: "0 12px",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "#00d8ff")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "white")
                    }
                  >
                    {item}
                  </Nav.Link>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          color: "white",
          textAlign: "center",
          paddingTop: "70px",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        }}
      >
        {/* Animated Blobs */}
        <div className="animated-bg"></div>

        {/* Floating Particles */}
        <div className="particles"></div>

        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row>
            <Col>
              <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
                Hi, I’m <span style={{ color: "#00d8ff" }}>Laiba Irfan</span>
              </h1>
              <p style={{ fontSize: "1.3rem", marginTop: "15px" }}>
                A passionate{" "}
                <span style={{ color: "#00d8ff" }}>Web Developer</span>
              </p>

              {/* Buttons */}
              <div style={{ marginTop: "25px" }}>
                <Button
                  variant="light"
                  href="#projects"
                  style={{
                    margin: "10px",
                    padding: "12px 25px",
                    fontWeight: "bold",
                    borderRadius: "30px",
                  }}
                >
                  View Projects
                </Button>
                <a
                  href="/Laiba Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    style={{
                      margin: "10px",
                      padding: "12px 25px",
                      fontWeight: "bold",
                      borderRadius: "30px",
                      background:
                        "linear-gradient(135deg, #00d8ff, #007a99)",
                      border: "none",
                      color: "#fff",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                    }}
                  >
                    Resume
                  </Button>
                </a>
              </div>

              {/* Social Icons */}
              <div style={{ marginTop: "40px", fontSize: "1.8rem" }}>
                <a
                  href="https://www.linkedin.com/in/laiba-irfan-145bab2a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", margin: "10px" }}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:laibairfan546@gmail.com"
                  style={{ color: "white", margin: "10px" }}
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://github.com/laibairfan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", margin: "10px" }}
                >
                  <FaGithub />
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        {/* CSS for Dynamic Background */}
        <style>{`
          /* Gradient Blobs */
          .animated-bg {
            position: absolute;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at 30% 30%, rgba(0,216,255,0.2), transparent 40%),
                        radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05), transparent 40%),
                        radial-gradient(circle at 50% 90%, rgba(0,128,128,0.15), transparent 50%);
            animation: animateBlobs 15s infinite alternate ease-in-out;
          }

          @keyframes animateBlobs {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-50px, -30px) scale(1.1); }
            100% { transform: translate(50px, 30px) scale(1); }
          }

          /* Floating Particles */
          .particles::before, .particles::after {
            content: '';
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-image: radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.4), transparent),
                              radial-gradient(2px 2px at 60px 80px, rgba(255,255,255,0.3), transparent),
                              radial-gradient(2px 2px at 120px 150px, rgba(255,255,255,0.5), transparent);
            background-size: 200px 200px;
            animation: moveParticles 30s linear infinite;
          }

          @keyframes moveParticles {
            from { transform: translateY(0); }
            to { transform: translateY(-200px); }
          }
        `}</style>
      </section>
    </>
  );
}

export default Home;
