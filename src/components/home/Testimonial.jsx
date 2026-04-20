import React, { useMemo } from "react";
import { Container } from "react-bootstrap";

import testimonials from "../../data/testimonial";

import Testimonialimg from '../../assets/images/icons/testimonial.webp'

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Testimonial = () => {
  const randomTestimonials = useMemo(
    () => shuffleArray(testimonials),
    []
  );

  return (
    <section className="testimonial-inner">
      <Container fluid>
        <div className="header text-center mb-5">
          <h2 className="sub-title">Testimonials</h2>
          <h3 className="main-title">What Our Clients Say</h3>
        </div>

        <div className="testimonial-marquee">
          <div className="testimonial-track left">
            {[...randomTestimonials, ...randomTestimonials].map((item, index) => (
              <div className="testimonial-card" key={`top-${index}`}>
                <span className="quote"><img src={Testimonialimg} alt="" /></span>
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-user">
                  <h5>{item.name}</h5>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="testimonial-marquee mt-4">
          <div className="testimonial-track right">
            {[...randomTestimonials, ...randomTestimonials].map((item, index) => (
              <div className="testimonial-card" key={`bottom-${index}`}>
                <span className="quote"><img src={Testimonialimg} alt="" /></span>
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-user">
                  <h5>{item.name}</h5>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
