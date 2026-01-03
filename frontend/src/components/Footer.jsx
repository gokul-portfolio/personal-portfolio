import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa6";

import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="mui-footer">
      <Container fluid>
        <Row className="gy-4">

          <Col md={4} sm={12}>
            <div className="footer-brand">
              <img src={Logo} className="img-fluid mb-3" alt="Gokul Logo" />

              <h5>Stay Connected</h5>
              <p className="footer-text">
                Follow my journey as a Full-Stack Developer.  
                I share projects, learnings, and updates. No spam.
              </p>

             
            </div>
          </Col>

          <Col md={2}  sm={6} xs={6} > 
            <h6 className="footer-title">Skills</h6>
            <ul className="footer-links">
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </Col>

          <Col md={2}  sm={6}  xs={6} >
            <h6 className="footer-title">Projects</h6>
            <ul className="footer-links">
              <li>Portfolio Website</li>
              <li>E-commerce App</li>
              <li>Notes App (MERN)</li>
              <li>Auth System (JWT)</li>
              <li>Admin Dashboard</li>
            </ul>
          </Col>

          <Col md={2}  sm={6}  xs={6} >
            <h6 className="footer-title">Explore</h6>
            <ul className="footer-links">
              <li>About Me</li>
              <li>Experience</li>
              <li>Blog</li>
              <li>Resume</li>
              <li>Contact</li>
            </ul>
          </Col>

          <Col md={2}  sm={6}  xs={6} >
            <h6 className="footer-title">Connect</h6>
            <ul className="footer-links">
              <li>Email</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>
                Open to Work <span className="hiring">YES</span>
              </li>
            </ul>
          </Col>

        </Row>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Gokul — Full-Stack Developer
          </p>

          <div className="social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaDiscord />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
