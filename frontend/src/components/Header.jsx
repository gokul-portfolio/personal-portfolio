import { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar bg="light" fixed="top" className="shadow-sm">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={NavLink} to="/">
            Gokul
          </Navbar.Brand>

          {/* Desktop Menu */}
          <Nav className="ms-auto d-none d-lg-flex gap-4">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>

          {/* Mobile Menu Button */}
          <button
            className="btn d-lg-none"
            onClick={handleShow}
          >
            <i className="bi bi-list fs-2"></i>
          </button>
        </Container>
      </Navbar>

      {/* ===== OFFCANVAS (MOBILE MENU) ===== */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Gokul</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Nav.Link as={NavLink} to="/" end onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleClose}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" onClick={handleClose}>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleClose}>
              Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
