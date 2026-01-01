import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-light mt-5">
      <Container>
        <Row className="py-4 align-items-center">
          
          {/* Left */}
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-1">Gokul</h5>
            <p className="mb-0 small text-muted">
              Frontend Developer | React Enthusiast
            </p>
          </Col>

          {/* Center */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <a href="#home" className="footer-link mx-2">Home</a>
            <a href="#about" className="footer-link mx-2">About</a>
            <a href="#projects" className="footer-link mx-2">Projects</a>
            <a href="#contact" className="footer-link mx-2">Contact</a>
          </Col>

          {/* Right */}
          <Col md={4} className="text-center text-md-end">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:yourmail@gmail.com"
              className="social-icon"
            >
              <FaEnvelope />
            </a>
          </Col>

        </Row>

        {/* Bottom */}
        <Row>
          <Col className="text-center border-top pt-3">
            <p className="mb-0 small text-muted">
              © {year} Gokul. Made with <FaHeart className="text-danger" /> using React
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
