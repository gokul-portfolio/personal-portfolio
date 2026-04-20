import React from "react";
import { Row, Col } from "react-bootstrap";
import projects from "../../data/projects";

const ProjectGalleryCard = ({ category, page = 1, limit = 6 }) => {

  // 🔍 FILTER BY CATEGORY
  const filteredProjects = category
    ? projects.filter(item => item.category === category)
    : projects;

  // 📄 PAGINATION LOGIC
  const startIndex = (page - 1) * limit;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + limit
  );

  return (
    <Row className="g-4 justify-content-center">

      {/* EMPTY STATE */}
      {paginatedProjects.length === 0 && (
        <Col xs={12} className="text-center py-5">
          <h5 className="text-muted">No posters found</h5>
        </Col>
      )}

      {/* POSTER CARDS */}
      {paginatedProjects.map((item) => (
        <Col lg={4} md={6} sm={12} key={item.id}>
          <div className="poster-gallery-card">

            <div className="poster-img">
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid"
              />
            </div>

            <div className="poster-content">
              <h6>{item.name}</h6>
            </div>

          </div>
        </Col>
      ))}

    </Row>
  );
};

export default ProjectGalleryCard;