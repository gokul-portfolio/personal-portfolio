import React from "react";

import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCards from "../common/ProjectCards";

import project1 from "../../assets/images/projects/project-1.webp";
import project2 from "../../assets/images/projects/project-2.webp";
import project3 from "../../assets/images/projects/project-3.webp";
import project4 from "../../assets/images/projects/project-4.webp";
import project5 from "../../assets/images/projects/project-3.webp";
import project6 from "../../assets/images/projects/project-2.webp";

const projectItems = [
    {
        id: 1,
        title: "Travel Website Design",
        image: project1,
        tags: ["UI/UX", "Responsive Design", "Web UI"],
    },
    {
        id: 2,
        title: "E-Commerce Website",
        image: project2,
        tags: ["UI Design", "Frontend", "E-Commerce"],
    },
    {
        id: 3,
        title: "Portfolio Website",
        image: project3,
        tags: ["React", "Personal Branding", "Modern UI"],
    },
    {
        id: 4,
        title: "Business Landing Page",
        image: project4,
        tags: ["SEO", "Landing Page", "Conversion UI"],
    },
    {
        id: 5,
        title: "Dashboard UI",
        image: project5,
        tags: ["Admin Panel", "Data UI", "UX Design"],
    },
    {
        id: 6,
        title: "SaaS Website",
        image: project6,
        tags: ["Web App", "SaaS UI", "Scalable UI"],
    },
];


const Project = () => {

    const [visibleCount, setVisibleCount] = useState(4);

    const loadMore = () => {
        setVisibleCount((prev) =>
            Math.min(prev + 2, projectItems.length)
        );
    };

    const loadLess = () => {
        setVisibleCount((prev) => Math.max(prev - 2, 4));
    };


    return (
        <div className="inner-projects">
            <Container fluid>
                <div className="header-wrap mb-4">
                    <div className="header-wrap-3">
                        <h2 className="bg-header">Our Best Projects</h2>
                    </div>

                    <h4 className="sub-main-1">Projects</h4>

                    <h2 className="main-head">
                        Explore Our Best Recently <br />
                        Completed Projects
                    </h2>
                </div>

                <div className="project-card-wrap">
                    <Row>
                        {projectItems
                            .slice(0, visibleCount)
                            .map((item, index) => (
                                <ProjectCards
                                    key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    tags={item.tags}
                                    marginTop={index % 2 !== 0}
                                />
                            ))}
                    </Row>


                    <div className="project-pagination">
                        <button
                            onClick={loadLess}
                            disabled={visibleCount <= 4}
                        >
                            − Less
                        </button>

                        <button
                            onClick={loadMore}
                            disabled={visibleCount >= projectItems.length}
                        >
                            + More
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Project;
