import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

import project1 from "../../assets/images/projects/project-1.webp";
import project2 from "../../assets/images/projects/project-2.webp";
import project3 from "../../assets/images/projects/project-3.webp";
import project4 from "../../assets/images/projects/project-4.webp";

const ProjectCards = () => {

    const projects = [
        {
            id: "modern-business-website",
            image: project1,
            title: "Modern Business Website",
            description:
                "Clean, responsive website UI designed for performance and strong brand presence.",
            tag: "Website UI",
        },
        {
            id: "saas-landing-page",
            image: project2,
            title: "SaaS Landing Page",
            description:
                "High-conversion landing page with clear structure and scalable UI components.",
            tag: "Web Design",
        },
        {
            id: "ecommerce-ui-design",
            image: project3,
            title: "E-Commerce Website UI",
            description:
                "Conversion-focused storefront UI with optimized product and checkout flow.",
            tag: "E-Commerce",
        },
        {
            id: "portfolio-website",
            image: project4,
            title: "Personal Portfolio Website",
            description:
                "Minimal, fast-loading portfolio showcasing projects and personal branding.",
            tag: "Portfolio",
        },
    ];

    return (
        <Row className="g-4 justify-content-center align-items-center">
            {projects.map((project) => (
                <Col lg={6} md={6} sm={6} key={project.id}>
                    <div className="project-show-card">
                        <div className="project-show-img">

                            <img
                                src={project.image}
                                className="img-fluid"
                                alt={project.title}
                            />

                            {/* Overlay Content */}
                            <div className="project-overlay-content">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>

                                {/* Navigate to Project Detail Page */}
                                <Link
                                    to={`/projectdetail`}
                                    className="project-link"
                                >
                                    View Project <HiArrowUpRight />
                                </Link>
                            </div>

                            {/* Tag */}
                            <div className="project-main-tag">
                                <h5>{project.tag}</h5>
                            </div>

                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default ProjectCards;
