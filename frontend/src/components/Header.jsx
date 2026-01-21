import { useState, useRef, useEffect } from "react";

import {
  Navbar,
  Nav,
  Container,
  Offcanvas
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";


import Button from "../components/common/Button";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const clickSound = useRef(null);
  useEffect(() => {
    clickSound.current = new Audio("/sounds/click.mp3");
    clickSound.current.volume = 0.4;
  }, []);


  const playClickSound = () => {
    if (!clickSound.current) return;
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* ================= HEADER ================= */}
      <Navbar expand="lg" className="portfolio-navbar">
        <Container fluid className="nav-wrapper">

          {/* LOGO */}
          <Navbar.Brand as={NavLink} to="/" className="logo">
            <img src={Logo} alt="Gokul Logo" />
          </Navbar.Brand>

          {/* CENTER MENU (DESKTOP) */}
          <Nav className="nav-center d-none d-lg-flex align-items-center gap-4">
            <Nav.Link as={NavLink} to="/" end onClick={playClickSound}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={playClickSound}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" onClick={playClickSound}>
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" onClick={playClickSound}>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" onClick={playClickSound}>
              Gallery
            </Nav.Link>
          </Nav>

          {/* RIGHT SIDE (DESKTOP) */}
          <div className="nav-right d-none d-lg-flex align-items-center gap-3">
            <div className="nav-social">
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/gokul-portfolio" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
            </div>

            <Button
              to="/contact"
              icon={<HiArrowRight />}
              onClick={playClickSound}
            >
              Get Contact
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="menu-btn d-lg-none"
            onClick={() => {
              playClickSound();
              handleShow();
            }}
            aria-label="Open menu"
          >
            <i className="bi bi-list"></i>
          </button>

        </Container>
      </Navbar>

      {/* ================= OFFCANVAS (MOBILE MENU) ================= */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="portfolio-offcanvas"
      >
        <Offcanvas.Header closeButton className="offcanvas-header-custom">
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="logo"
            onClick={() => {
              playClickSound();
              handleClose();
            }}
          >
            <img src={Logo} alt="Gokul Logo" />
          </Navbar.Brand>
        </Offcanvas.Header>

        <Offcanvas.Body className="offcanvas-body-custom">
          <Nav className="flex-column offcanvas-nav-left">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              onClick={() => {
                playClickSound();
                handleClose();
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={() => {
                playClickSound();
                handleClose();
              }}
            >
              About
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/projects"
              onClick={() => {
                playClickSound();
                handleClose();
              }}
            >
              Services
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/gallery"
              onClick={() => {
                playClickSound();
                handleClose();
              }}
            >
              Gallery
            </Nav.Link>

            <Button
              to="/contact"
              icon={<HiArrowRight />}
              onClick={() => {
                playClickSound();
                handleClose();
              }}
              className="mt-4"
            >
              Get Started
            </Button>
          </Nav>
        </Offcanvas.Body>

        <div className="offcanvas-footer offcanvas-footer-left">
          <p>Let’s build something amazing 🚀</p>

          <div className="offcanvas-social">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </Offcanvas>
    </>
  );
};

export default Header;
