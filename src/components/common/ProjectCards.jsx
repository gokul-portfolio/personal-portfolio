import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCards = ({
  title,
  link,
  image,
  category,
  tech = [],
  marginTop,
}) => {
  return (
    <Col lg={6} md={6} sm={12} className={marginTop ? "mt-3" : ""}>
      <div className="project-card">

        <div className="project-img">
          <img src={image} className="img-fluid" alt={title} />
        </div>

        <div className="project-content">
          {category && <span className="project-category">{category}</span>}

          <h3>
            <Link
              to={`/projectdetail/${link}`}
              className="project-title-link"
            >
              {title}
            </Link>
          </h3>

          <div className="tag-wrap">
            {tech.slice(0, 5).map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

      </div>
    </Col>
  );
};

export default ProjectCards;