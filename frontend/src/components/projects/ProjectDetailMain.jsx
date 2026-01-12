import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects";

import {
    FaReact,
    FaJsSquare,
    FaBootstrap,
    FaCss3Alt,
    FaHtml5,
} from "react-icons/fa";

import { BsCaretRightFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import Button from "../common/Button";

const techIcons = {
    React: <FaReact />,
    JavaScript: <FaJsSquare />,
    Bootstrap: <FaBootstrap />,
    CSS: <FaCss3Alt />,
    HTML: <FaHtml5 />,
};

const ProjectMain = () => {
    const { slug } = useParams();

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return <h2 className="text-center mt-5">Project Not Found</h2>;
    }

    return (
        <section>
            <div className="project-detail">
                <div className="container-fluid">
                    <div className="row align-items-start">

                        {/* LEFT IMAGE */}
                        <div className="col-lg-5 col-md-5 mt-3">
                            <div className="project-detail-left sticky-js">
                                <img
                                    src={project.mainimg}
                                    className="img-fluid"
                                    alt={project.title}
                                />
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-lg-7 col-md-7 mt-3">
                            <div className="project-detail-right">

                                <span className="project-tag">{project.category}</span>

                                <h2 className="main-head">{project.title}</h2>

                                <p className="para">
                                    <BsCaretRightFill /> {project.description}
                                </p>

                                <p className="para">
                                    <BsCaretRightFill /> {project.longDescription}
                                </p>

                                {/* META */}
                                <div className="project-meta mt-3">
                                    <div className="meta-item">
                                        <h4>Client</h4>
                                        <p>{project.client}</p>
                                    </div>

                                    <div className="meta-item">
                                        <h4>Category</h4>
                                        <p>{project.category}</p>
                                    </div>

                                    <div className="meta-item">
                                        <h4>Duration</h4>
                                        <p>{project.duration}</p>
                                    </div>

                                    <div className="meta-item">
                                        <h4>Status</h4>
                                        <p>{project.status}</p>
                                    </div>
                                </div>

                                {/* FEATURES */}
                                <div className="project-features">
                                    <h3 className="project-header">Key Features</h3>

                                    <ul>
                                        {project.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>


                                {/* TECHNOLOGIES */}
                                <div className="project-tech">
                                    <h3 className="project-header">Technologies Used</h3>
                                    <div className="tech-list">
                                        {project.tech.map((tech, index) => (
                                            <span key={index}>
                                                {techIcons[tech]} {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* ACTION */}
                                <div className="project-actions">
                                    <Button to={project.liveUrl} icon={<HiArrowRight />}>
                                        View Demo
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
