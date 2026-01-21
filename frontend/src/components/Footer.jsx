import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaXTwitter, FaHeart } from "react-icons/fa6";
import Logo from "../assets/images/favicon.png";

const Footer = () => {
  return (
    <footer className="mui-footer">
      <Container fluid>

        {/* TOP */}
        <Row className="align-items-center gy-3">

          {/* LEFT : BRAND */}
          <Col md={6} sm={12}>
            <div className="footer-brand d-flex align-items-center gap-3">
              <img src={Logo} className="img-fluid" alt="Gokul Logo" />
              <p className="footer-text mb-0">
                I’m a Full-Stack Developer specializing in building clean,
                scalable, and performance-driven web applications using
                modern technologies.
              </p>
            </div>
          </Col>

          {/* RIGHT : NAV (ROUTER LINKS) */}
          <Col md={6} sm={12}>
            <ul className="footer-links d-flex justify-content-md-end justify-content-start gap-4 mb-0">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>

        </Row>

        {/* BOTTOM */}
        <div className="footer-bottom d-flex justify-content-between align-items-center mt-4 flex-wrap">
          <p className="mb-0">
            Designed & Developed by <strong>Gokul</strong> with{" "}
            <FaHeart className="text-danger" />
          </p>

          <div className="social-icons d-flex gap-3">
            <a href="https://github.com/gokul-portfolio" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
