import React from "react";
import {
  HiOutlineCode,
  HiOutlineColorSwatch,
  HiOutlineTrendingUp,
} from "react-icons/hi";

const TestMarque = () => {
  return (
    <section className="text-marquee">
      <div className="marquee-track marquee-left">
        <div className="bi-text-scroll-item-1">
          <h3>FRONTEND WEB DEVELOPER</h3>
          <h3>REACT & MODERN JAVASCRIPT</h3>
          <h3>CLEAN UI / UX INTERFACES</h3>
          <h3>PERFORMANCE OPTIMIZED SITES</h3>
          <h3>SCALABLE WEB APPLICATIONS</h3>
        </div>

        {/* duplicate for smooth infinite loop */}
        <div className="bi-text-scroll-item-1">
          <h3>FRONTEND WEB DEVELOPER</h3>
          <h3>REACT & MODERN JAVASCRIPT</h3>
          <h3>CLEAN UI / UX INTERFACES</h3>
          <h3>PERFORMANCE OPTIMIZED SITES</h3>
          <h3>SCALABLE WEB APPLICATIONS</h3>
        </div>
      </div>
    </section>

  );
};

export default TestMarque;
