import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../common/Button";
import { HiArrowRight } from "react-icons/hi";
import ProjectCards from "../projects/ProjectCard";
import ProjectGalleryCard from "../projects/ProjectGalleryCard";

const ITEMS_PER_PAGE = 6;

const ProjectShowCase = () => {
  const [activeTab, setActiveTab] = useState("page1");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
    const dropdown = document.getElementById("projectFilter");
    if (dropdown) dropdown.value = activeTab;
  }, [activeTab]);

  return (
    <div className="project-show-inner">
      <Container fluid>

        {/* HEADER */}
        <div className="project-show-head">
          <Row className="align-items-end">
            <Col lg={9}>
              <h4 className="sub-head">Project Showcase</h4>
              <h2 className="main-head">
                Selected Projects <br />
                That Deliver Real Results
              </h2>
            </Col>

            <Col lg={3} className="text-end">
              <Button to="/contact" icon={<HiArrowRight />}>
                Contact Us
              </Button>
            </Col>
          </Row>
        </div>

        {/* TABS */}
        <div className="project-main-tab d-flex flex-column align-items-center">
          <div className="tab-buttons d-none d-md-flex gap-2">
            <button className={`tab-btn ${activeTab === "page1" ? "active" : ""}`} onClick={() => setActiveTab("page1")}>
              Website UI
            </button>
            <button className={`tab-btn ${activeTab === "page2" ? "active" : ""}`} onClick={() => setActiveTab("page2")}>
              UI / UX Design
            </button>
            <button className={`tab-btn ${activeTab === "page3" ? "active" : ""}`} onClick={() => setActiveTab("page3")}>
              Posters & Branding
            </button>
          </div>

          <div className="tab-dropdown d-md-none w-100 mt-3">
            <Form.Select onChange={(e) => setActiveTab(e.target.value)}>
              <option value="page1">Website UI</option>
              <option value="page2">UI / UX Design</option>
              <option value="page3">Posters & Branding</option>
            </Form.Select>
          </div>
        </div>

        {/* CONTENT */}
        {activeTab === "page1" && (
          <ProjectCards category="web" page={currentPage} limit={ITEMS_PER_PAGE} />
        )}

        {activeTab === "page2" && (
          <ProjectCards category="uiux" page={currentPage} limit={ITEMS_PER_PAGE} />
        )}

        {activeTab === "page3" && (
          <ProjectGalleryCard category="branding" page={currentPage} limit={ITEMS_PER_PAGE} />
        )}

        {/* PAGINATION */}
        <div className="project-pagination text-center mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
          >
            ← Prev
          </button>

          <span className="mx-3">Page {currentPage}</span>

          <button
            onClick={() => setCurrentPage(p => p + 1)}
          >
            Next →
          </button>
        </div>

      </Container>
    </div>
  );
};

export default ProjectShowCase;
