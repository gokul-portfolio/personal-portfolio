import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import projects from "../../data/projects";

const ProjectCards = ({ category, page = 1, limit = 6 }) => {

  // 🔍 FILTER BY CATEGORY
  const filteredProjects = category
    ? projects.filter(project => project.category === category)
    : projects;

  // 📄 PAGINATION LOGIC
  const startIndex = (page - 1) * limit;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + limit
  );

  return (
    <Row className="g-4 justify-content-center align-items-center">

      {/* EMPTY STATE */}
      {paginatedProjects.length === 0 && (
        <Col xs={12} className="text-center py-5">
          <h5 className="text-muted">No projects found</h5>
        </Col>
      )}

      {/* PROJECT CARDS */}
      {paginatedProjects.map((project) => (
        <Col lg={6} md={6} sm={12} key={project.id}>
          <div className="project-show-card">

            <div className="project-show-img">
              <img
                src={project.thumbnail}
                className="img-fluid"
                alt={project.title}
              />

              {/* OVERLAY */}
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

              {/* OPTIONAL TAG */}
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