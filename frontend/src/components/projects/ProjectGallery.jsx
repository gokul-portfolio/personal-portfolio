import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from "../../assets/images/gallery/img-1.png";
import img2 from "../../assets/images/gallery/img-2.png";
import img3 from "../../assets/images/gallery/img-1.png";
import img4 from "../../assets/images/gallery/img-2.png";
import img5 from "../../assets/images/gallery/img-1.png";
import img6 from "../../assets/images/gallery/img-2.png";

const images = [img1, img2, img3, img4, img5, img6];

const ProjectGallery = () => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);

  const openModal = (index) => {
    setCurrent(index);
    setShow(true);
  };

  const closeModal = () => setShow(false);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-gallery-inner">
      <Container fluid>

        {/* HEADER */}
        <div className="header-wrap-3 text-center mb-3 mb-lg-5">
          <h4 className="bg-header">Project Showcase</h4>
        </div>

        {/* GALLERY */}
        <Row className="g-4">
          {images.map((img, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <div
                className="gallery-project-item"
                onClick={() => openModal(index)}
              >
                <img src={img} className="img-fluid" alt="Project" />
                <div className="gallery-content">
                  <h6>Project Title</h6>
                  <span>View Project</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* FANCY POPUP */}
        <Modal
          show={show}
          onHide={closeModal}
          centered
          size="xl"
          className="gallery-fancy-modal"
        >
          <Modal.Body className="gallery-modal-body">

            {/* CLOSE */}
            <button className="close-btn" onClick={closeModal}>
              <FaTimes />
            </button>

            {/* PREV */}
            <button className="nav-btn prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>

            {/* IMAGE */}
            <div className="popup-image-wrap">
              <img src={images[current]} alt="Preview" />
            </div>

            {/* NEXT */}
            <button className="nav-btn next" onClick={nextImage}>
              <FaChevronRight />
            </button>

          </Modal.Body>
        </Modal>

      </Container>
    </div>
  );
};

export default ProjectGallery;
