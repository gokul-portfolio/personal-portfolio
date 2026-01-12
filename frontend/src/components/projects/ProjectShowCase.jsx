import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../common/Button";
import { HiArrowRight } from "react-icons/hi";
import ProjectCards from "../projects/ProjectCard";

const ProjectShowCase = () => {
    const [activeTab, setActiveTab] = useState("page1");

    useEffect(() => {
        const dropdown = document.getElementById("projectFilter");
        if (dropdown) dropdown.value = activeTab;
    }, [activeTab]);

    return (
        <>
            <div className="project-show-inner">
                <Container fluid>
                    <div className="project-show-head">

                        <Row className="align-items-end">
                            <Col lg={9} md={8} sm={8}>
                                <h4 className="sub-head">Project Showcase</h4>
                                <h2 className="main-head">
                                    Selected Projects <br />
                                    That Deliver Real Results
                                </h2>
                            </Col>

                            <Col lg={3} md={4} sm={4} className="project-btn-wrap text-md-end mt-3 mt-md-0">
                                <Button to="/about" icon={<HiArrowRight />}>
                                    Contact Us
                                </Button>
                            </Col>
                        </Row>

                    </div>

                    <div className="project-main-tab d-flex flex-column align-items-center">

                        {/* Desktop Tabs */}
                        <div className="tab-buttons d-none d-md-flex justify-content-center gap-2">
                            <button
                                className={`tab-btn ${activeTab === "page1" ? "active" : ""}`}
                                onClick={() => setActiveTab("page1")}
                            >
                                Website UI
                            </button>
                            <button
                                className={`tab-btn ${activeTab === "page2" ? "active" : ""}`}
                                onClick={() => setActiveTab("page2")}
                            >
                                UI / UX Design
                            </button>
                            <button
                                className={`tab-btn ${activeTab === "page3" ? "active" : ""}`}
                                onClick={() => setActiveTab("page3")}
                            >
                                Posters & Branding
                            </button>
                        </div>

                        {/* Mobile Dropdown */}
                        <div className="tab-dropdown d-md-none w-100 mt-3">
                            <Form.Select
                                id="projectFilter"
                                onChange={(e) => setActiveTab(e.target.value)}
                            >
                                <option value="page1">Website UI</option>
                                <option value="page2">UI / UX Design</option>
                                <option value="page3">Posters & Branding</option>
                            </Form.Select>
                        </div>
                    </div>

                    {activeTab === "page1" && (
                        <ProjectCards category="web" />
                    )}

                    {activeTab === "page2" && (
                        <ProjectCards category="uiux" />
                    )}

                    {activeTab === "page3" && (
                        <ProjectCards category="branding" />
                    )}

                </Container>
            </div>
        </>
    );
};

export default ProjectShowCase;
