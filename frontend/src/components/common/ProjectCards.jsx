import React from "react";
import { Col } from "react-bootstrap";

const ProjectCards = ({ title, image, tags, marginTop }) => {
  return (
    <Col lg={6} md={6} sm={12} className={marginTop ? "mt-3" : ""}>
      <div className="project-card">
        <div className="project-img">
          <img src={image} className="img-fluid" alt={title} />
        </div>

        <div className="project-content">
          <h3>{title}</h3>

          <div className="tag-wrap">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCards;
