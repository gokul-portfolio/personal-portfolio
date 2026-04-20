import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const ServiceCard = ({ image, title, link }) => {
  return (
    <Link to={link} className="service-link">
      <div className="service-card">
        <img src={image} className="img-fluid" alt={title} />

        <div className="service-overlay"></div>

        <div className="service-content">
          <h4>{title}</h4>
          <span className="service-arrow">
            <HiArrowRight />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
