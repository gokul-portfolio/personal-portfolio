import { useState } from "react";
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
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
          </Nav>

          {/* RIGHT SIDE (DESKTOP) */}
          <div className="nav-right d-none d-lg-flex align-items-center gap-3">

            {/* SOCIAL ICONS */}
            <div className="nav-social">
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

            {/* CTA BUTTON */}
            <Button to="/contact" icon={<HiArrowRight />}>
              Get Resume
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="menu-btn d-lg-none"
            onClick={handleShow}
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
        {/* HEADER */}
        <Offcanvas.Header closeButton className="offcanvas-header-custom">
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="logo"
            onClick={handleClose}
          >
            <img src={Logo} alt="Gokul Logo" />
          </Navbar.Brand>
        </Offcanvas.Header>

        {/* BODY */}
        <Offcanvas.Body className="offcanvas-body-custom">
          <Nav className="flex-column offcanvas-nav-left">
            <Nav.Link as={NavLink} to="/" end onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleClose}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" onClick={handleClose}>
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/skills" onClick={handleClose}>
              Gallery
            </Nav.Link>

            {/* CTA BUTTON */}
            <Button
              to="/contact"
              icon={<HiArrowRight />}
              onClick={handleClose}
              className="mt-4"
            >
              Get Started
            </Button>
          </Nav>
        </Offcanvas.Body>

        {/* FOOTER */}
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
