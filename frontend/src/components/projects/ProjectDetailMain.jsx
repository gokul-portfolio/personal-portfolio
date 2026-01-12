import React from "react";
import projectImage from "../../assets/images/layout/layout-1.webp";
import {
    FaReact,
    FaJsSquare,
    FaBootstrap,
    FaCss3Alt,
    FaHtml5
} from "react-icons/fa";

import { BsCaretRightFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

import Button from "../common/Button";

const ProjectMain = () => {

    return (
        <section>
            <div className="project-detail">
                <div className="container-fluid">
                    <div className="row align-items-start">

                        <div className="col-lg-5 col-md-5 mt-3">
                            <div className="project-detail-left  sticky-js">
                                <img
                                    src={projectImage}
                                    className="img-fluid"
                                    alt="Project Layout"
                                />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 mt-3">
                            <div className="project-detail-right">

                                <span className="project-tag">Web Development</span>

                                <h2 className="main-head">
                                    Portfolio Website for a Web Developer
                                </h2>

                                <p className="para">
                                    <BsCaretRightFill /> A modern, responsive portfolio website
                                    designed and developed to showcase projects, services, and
                                    technical expertise with clean UI and smooth interactions.
                                </p>

                                <p className="para">
                                    <BsCaretRightFill /> Built with performance, scalability, and
                                    SEO-friendly structure to ensure fast loading and better
                                    visibility across search engines.
                                </p>

                                {/* META */}
                                <div className="project-meta mt-3">
                                    <div className="meta-item">
                                        <h4>Client</h4>
                                        <p>Personal Project</p>
                                    </div>

                                    <div className="meta-item">
                                        <h4>Category</h4>
                                        <p>Web Development</p>
                                    </div>

                                    <div className="meta-item">
                                        <h4>Duration</h4>
                                        <p>3 Weeks</p>
                                    </div>

                                    <div className="meta-item">
                                        <h4>Status</h4>
                                        <p>Completed</p>
                                    </div>
                                </div>

                                {/* FEATURES */}
                                <div className="project-features">
                                    <h3 className="project-header">Key Features</h3>
                                    <ul>
                                        <li>Modern and clean UI design</li>
                                        <li>Fully responsive across all devices</li>
                                        <li>Optimized for performance and SEO</li>
                                        <li>Smooth animations and interactions</li>
                                        <li>Scalable and maintainable codebase</li>
                                    </ul>
                                </div>

                                {/* TECHNOLOGIES */}
                                <div className="project-tech">
                                    <h3 className="project-header">Technologies Used</h3>
                                    <div className="tech-list">
                                        <span><FaReact /> React.js</span>
                                        <span><FaJsSquare /> JavaScript (ES6+)</span>
                                        <span><FaBootstrap /> Bootstrap</span>
                                        <span><FaCss3Alt /> CSS3</span>
                                        <span><FaHtml5 /> HTML5</span>
                                    </div>
                                </div>

                                {/* ACTION */}
                                <div className="project-actions">
                                    <Button to="/contact" icon={<HiArrowRight />}>
                                        View   Demo
                                    </Button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectMain;
