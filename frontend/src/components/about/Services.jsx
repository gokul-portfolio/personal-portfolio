import React from "react";
import { Container, Accordion } from "react-bootstrap";

const Services = () => {
    return (
        <section className="service-accordian-inner">
            <Container fluid>


                <div className="header-wrap mb-4">
                    <div className="header-wrap-3">
                        <h2 className="bg-header">My Services</h2>
                    </div>
                    <h4 className="sub-main-1">Services</h4>
                </div>
<div className="service-accordion mx-auto">
  <Accordion defaultActiveKey="0" flush>

    {/* 01 */}
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <span className="me-3 fw-bold">01.</span>
        Website Development
      </Accordion.Header>
      <Accordion.Body>
        <p>
          I build fast, secure, and scalable websites tailored to your business
          goals. Each project is developed using modern standards, clean code,
          and performance-focused architecture to ensure long-term reliability.
        </p>
        <ul>
          <li>Custom website development based on business needs</li>
          <li>Clean, maintainable, and scalable code structure</li>
          <li>Optimized performance and fast page loading</li>
          <li>Secure implementation with best practices</li>
          <li>Future-ready architecture for easy expansion</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>

    {/* 02 */}
    <Accordion.Item eventKey="1">
      <Accordion.Header>
        <span className="me-3 fw-bold">02.</span>
        Frontend Development (React.js)
      </Accordion.Header>
      <Accordion.Body>
        <p>
          I specialize in building modern, interactive, and component-based
          frontend applications using React.js, focusing on performance and
          seamless user experience.
        </p>
        <ul>
          <li>Reusable and modular React components</li>
          <li>Optimized state management and rendering</li>
          <li>Smooth animations and UI interactions</li>
          <li>API integration with backend services</li>
          <li>Responsive and cross-browser compatible UI</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>

    {/* 03 */}
    <Accordion.Item eventKey="2">
      <Accordion.Header>
        <span className="me-3 fw-bold">03.</span>
        UI / UX Design
      </Accordion.Header>
      <Accordion.Body>
        <p>
          I design intuitive and visually appealing user interfaces that focus
          on usability, clarity, and brand consistency to enhance user
          engagement.
        </p>
        <ul>
          <li>User-centered design approach</li>
          <li>Clean and modern interface layouts</li>
          <li>Consistent typography and color systems</li>
          <li>Wireframes and UI design systems</li>
          <li>Accessibility-focused design principles</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>

    {/* 04 */}
    <Accordion.Item eventKey="3">
      <Accordion.Header>
        <span className="me-3 fw-bold">04.</span>
        Poster & Graphic Design
      </Accordion.Header>
      <Accordion.Body>
        <p>
          I create visually striking posters, banners, and digital creatives
          that communicate your message effectively and strengthen brand
          identity.
        </p>
        <ul>
          <li>Creative posters and banner designs</li>
          <li>Social media and promotional creatives</li>
          <li>Brand-aligned visual concepts</li>
          <li>High-quality digital exports</li>
          <li>Designs optimized for engagement</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>

    {/* 05 */}
    <Accordion.Item eventKey="4">
      <Accordion.Header>
        <span className="me-3 fw-bold">05.</span>
        Responsive & Mobile-First Design
      </Accordion.Header>
      <Accordion.Body>
        <p>
          Every website is built using a mobile-first approach to ensure a
          seamless experience across all devices and screen sizes.
        </p>
        <ul>
          <li>Mobile-first layout strategy</li>
          <li>Fully responsive design across devices</li>
          <li>Cross-browser compatibility</li>
          <li>Flexible grids and scalable components</li>
          <li>Touch-friendly interactions</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>

    {/* 06 */}
    <Accordion.Item eventKey="5">
      <Accordion.Header>
        <span className="me-3 fw-bold">06.</span>
        SEO & Performance Optimization
      </Accordion.Header>
      <Accordion.Body>
        <p>
          I optimize websites for search engines and performance by improving
          speed, accessibility, and overall technical structure.
        </p>
        <ul>
          <li>Core Web Vitals optimization</li>
          <li>Improved page load speed</li>
          <li>SEO-friendly HTML structure</li>
          <li>Image and asset optimization</li>
          <li>Accessibility and usability enhancements</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>

    {/* 07 */}
    <Accordion.Item eventKey="6">
      <Accordion.Header>
        <span className="me-3 fw-bold">07.</span>
        Website Maintenance & Support
      </Accordion.Header>
      <Accordion.Body>
        <p>
          I provide ongoing maintenance and technical support to keep your
          website secure, updated, and running smoothly without interruptions.
        </p>
        <ul>
          <li>Regular updates and bug fixes</li>
          <li>Security monitoring and improvements</li>
          <li>Performance monitoring and tuning</li>
          <li>Content updates and enhancements</li>
          <li>Reliable long-term support</li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>

  </Accordion>
</div>



            </Container>
        </section>
    );
};

export default Services;
