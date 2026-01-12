import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import projects from "../../data/projects.js";

const ProjectCards = ({ category }) => {

  // FILTER PROJECTS
  const filteredProjects = category
    ? projects.filter((project) => project.category === category)
    : projects;

  return (
    <Row className="g-4 justify-content-center align-items-center">
      
      {/* 💥 SHOW THIS WHEN EMPTY */}
      {filteredProjects.length === 0 && (
        <Col xs={12} className="text-center py-5">
          <h5 className="text-muted">No projects found</h5>
        </Col>
      )}

      {/* 🔥 LOOP PROJECTS */}
      {filteredProjects.map((project) => (
        <Col lg={6} md={6} sm={6} key={project.id}>
          <div className="project-show-card">
            <div className="project-show-img">

              <img
                src={project.thumbnail}
                className="img-fluid"
                alt={project.title}
              />

              <div className="project-overlay-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <Link
                  to={`/projectdetail/${project.slug}`}
                  className="project-link"
                >
                  View Project <HiArrowUpRight />
                </Link>
              </div>

              {project.tag && (
                <div className="project-main-tag">
                  <h5>{project.tag}</h5>
                </div>
              )}

            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectCards;
