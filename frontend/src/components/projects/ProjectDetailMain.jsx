import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects";

import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaPhp,
    FaJsSquare,
    FaReact,
} from "react-icons/fa";
import { SiSwiper, SiGreensock } from "react-icons/si";

import { BsCaretRightFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

import Button from "../common/Button";

const techIcons = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    PHP: <FaPhp />,
    JavaScript: <FaJsSquare />,
    Bootstrap: <FaBootstrap />,
    React: <FaReact />,
    //   "WOW.js": <SiWow />,
    Swiper: <SiSwiper />,
    GSAP: <SiGreensock />,
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

                                {/* CATEGORY */}
                                <span className="project-tag">{project.projectCatagory}</span>

                                {/* TITLE */}
                                <h2 className="main-head">{project.title}</h2>

                                {/* SHORT DESCRIPTION */}
                                {project.description && (
                                    <p className="para">
                                        <BsCaretRightFill /> {project.description}
                                    </p>
                                )}

                                {/* LONG DESCRIPTION */}
                                {project.longDescription && (
                                    <p className="para">
                                        <BsCaretRightFill /> {project.longDescription}
                                    </p>
                                )}

                                {/* OPTIONAL FIELDS */}
                                {project.objective && (
                                    <p className="para">
                                        <BsCaretRightFill /> <strong>Objective:</strong> {project.objective}
                                    </p>
                                )}

                                {project.role && (
                                    <p className="para">
                                        <BsCaretRightFill /> <strong>Role:</strong> {project.role}
                                    </p>
                                )}

                                {project.solution && (
                                    <p className="para">
                                        <BsCaretRightFill /> <strong>Solution:</strong> {project.solution}
                                    </p>
                                )}

                                {project.targetAudience && (
                                    <p className="para">
                                        <BsCaretRightFill /> <strong>Target Audience:</strong> {project.targetAudience}
                                    </p>
                                )}

                                {/* META INFO */}
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

                                    {project.deployment && (
                                        <div className="meta-item">
                                            <h4>Deployment</h4>
                                            <p>{project.deployment}</p>
                                        </div>
                                    )}
                                </div>

                                {/* FEATURES */}
                                {project.features && project.features.length > 0 && (
                                    <div className="project-features">
                                        <h3 className="project-header">Key Features</h3>
                                        <ul>
                                            {project.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* CHALLENGES */}
                                {project.challenges && project.challenges.length > 0 && (
                                    <div className="project-challenges mt-3">
                                        <h3 className="project-header">Challenges</h3>
                                        <ul>
                                            {project.challenges.map((challenge, index) => (
                                                <li key={index}>{challenge}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* DELIVERABLES */}
                                {project.deliverables && project.deliverables.length > 0 && (
                                    <div className="project-deliverables mt-3">
                                        <h3 className="project-header">Deliverables</h3>
                                        <ul>
                                            {project.deliverables.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* TECHNOLOGIES */}
                                <div className="project-tech mt-3">
                                    <h3 className="project-header">Technologies Used</h3>
                                    <div className="tech-list">
                                        {project.tech.map((tech, index) => (
                                            <span key={index}>
                                                {techIcons[tech] || "🔧"} {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* ACTION */}
                                {project.liveUrl && (
                                    <div className="project-actions mt-3">
                                        <Button to={project.liveUrl} icon={<HiArrowRight />}>
                                            View Demo
                                        </Button>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectMain;
