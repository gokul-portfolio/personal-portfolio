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
          <h3>FULL STACK DEVELOPER</h3>

          <h3>REACT DEVELOPER</h3>

          <h3>UI / UX DESIGNER</h3>

          <h3>SEO FRIENDLY WEBSITES</h3>

          <h3>MODERN WEB APPS</h3>
        </div>

        {/* duplicate for smooth infinite loop */}
        <div className="bi-text-scroll-item-1">
          <h3>FULL STACK DEVELOPER</h3>
  

          <h3>REACT DEVELOPER</h3>
          

          <h3>UI / UX DESIGNER</h3>
     

          <h3>SEO FRIENDLY WEBSITES</h3>
         

          <h3>MODERN WEB APPS</h3>
       
        </div>
      </div>
    </section>
  );
};

export default TestMarque;
