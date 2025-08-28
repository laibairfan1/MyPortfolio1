import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const experiences = [
  {
    title: "GrowIntern Internship",
    period: "Aug 2024 - Sep 2024",
    description: "Completed an online internship with GrowIntern in web development, gaining hands-on experience in HTML, CSS, and JavaScript. Worked on creating responsive web designs and enhancing user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    title: "5th IBRAS",
    period: "Jan 2025",
    description: "Presented my research work on the usability and accessibility of educational websites at the 5th International Conference on Biological Research and Applied Science.",
    skills: ["Research", "Presentation", "Accessibility"]
  },
  {
    title: "10 Pearls Shine Internship",
    period: "March 2025 – May 2025",
    description: "Completed a MERN Stack internship under the 10Pearls Shine Internship Program, gaining hands-on experience in full-stack web development.",
    skills: ["MongoDB", "Express", "React", "Node.js", "Full-Stack Development"]
  }
];

const Experience = () => {
  return (
    <section style={{ padding: "80px 0", background: "#0f2027", color: "#fff" }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1 style={{ fontWeight: "bold", color: "#00d8ff", fontSize: "2.8rem" }}>
              My Experience
            </h1>
            <p style={{ color: "#b0b0b0", fontSize: "1.2rem" }}>
              Internships, Conferences, and Projects
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {experiences.map((exp, idx) => (
            <Col md={12} key={idx}>
              <div className="experience-card-modern">
                <div className="experience-accent-line"></div>
                <div className="experience-content">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="company-name">{exp.period}</h4>
                  <p className="experience-description">{exp.description}</p>
                  <div className="skills-container">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .experience-card-modern {
          display: flex;
          background: linear-gradient(145deg, #18313d, #1f3a4b);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s forwards;
          animation-delay: 0.1s;
        }

        .experience-card-modern:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.35);
        }

        .experience-accent-line {
          width: 5px;
          background: linear-gradient(180deg, #00d8ff, #2c5364);
          border-radius: 5px;
          margin-right: 20px;
        }

        .experience-content {
          padding: 20px;
          flex: 1;
        }

        .experience-title {
          color: #00d8ff;
          font-weight: 700;
          margin-bottom: 5px;
          font-size: 1.6rem;
        }

        .company-name {
          color: #bdbdbd;
          font-style: italic;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        .experience-description {
          color: #e0e0e0;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-pill {
          background: #00d8ff33;
          color: #00d8ff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          transition: background 0.3s ease, transform 0.2s ease;
          cursor: default;
        }

        .skill-pill:hover {
          background: #00d8ff55;
          transform: scale(1.05);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .experience-card-modern {
            flex-direction: column;
          }
          .experience-accent-line {
            width: 100%;
            height: 5px;
            margin: 0 0 15px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
