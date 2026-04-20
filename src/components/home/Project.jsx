import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCards from "../common/ProjectCards";
import projectItems from "../../data/projects";

const Project = () => {

    const [visibleCount, setVisibleCount] = useState(4);

    const loadMore = () => {
        setVisibleCount(prev =>
            Math.min(prev + 2, projectItems.length)
        );
    };

    const loadLess = () => {
        setVisibleCount(prev =>
            Math.max(prev - 2, 4)
        );
    };

    return (
        <div className="inner-projects">
            <Container fluid>

                {/* HEADER */}
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

                {/* PROJECT LIST */}
                <div className="project-card-wrap">
                    <Row>
                        {projectItems
                            .slice(0, visibleCount)
                            .map((item, index) => (
                                <ProjectCards
                                    key={item.id}
                                    title={item.title}
                                    image={item.thumbnail}                 
                                    category={item.projectCatagory}      
                                    tech={item.tech}     
                                    link={item.slug}               
                                    marginTop={index % 2 !== 0}
                                />
                            ))}
                    </Row>

                    {/* PAGINATION */}
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
