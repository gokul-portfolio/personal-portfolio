import React from "react";
import { Container, Accordion } from "react-bootstrap";

const Services = () => {
    return (
        <section className="service-accordian-inner">
            <Container fluid>

                {/* ================= HEADING ================= */}

                <div className="header-wrap mb-4">
                    <div className="header-wrap-3">
                        <h2 className="bg-header">My Services</h2>
                    </div>
                    <h4 className="sub-main-1">Services</h4>
                </div>

                {/* ================= ACCORDION ================= */}
                <div className="service-accordion mx-auto">
                    <Accordion defaultActiveKey="0" flush>

                        {/* 01 */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <span className="me-3 fw-bold">01.</span>
                                Website Development
                            </Accordion.Header>
                            <Accordion.Body>
                                I develop fast, secure, and scalable websites tailored to
                                business needs. From landing pages to complete websites,
                                every project is built with clean code, modern standards,
                                and performance in mind.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* 02 */}
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <span className="me-3 fw-bold">02.</span>
                                Frontend Development (React.js)
                            </Accordion.Header>
                            <Accordion.Body>
                                I create interactive and dynamic user interfaces using
                                React.js. My focus is on component reusability, smooth
                                animations, and optimized UI performance for a seamless
                                user experience.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* 03 */}
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <span className="me-3 fw-bold">03.</span>
                                UI / UX Design
                            </Accordion.Header>
                            <Accordion.Body>
                                I design clean, modern, and user-friendly interfaces that
                                focus on usability and visual clarity. Every design decision
                                is driven by user behavior and brand consistency.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* 04 */}
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <span className="me-3 fw-bold">04.</span>
                                Poster & Graphic Design
                            </Accordion.Header>
                            <Accordion.Body>
                                Creative posters, banners, and social media designs crafted
                                to grab attention and communicate your message effectively
                                across digital platforms.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* 05 */}
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                <span className="me-3 fw-bold">05.</span>
                                Responsive & Mobile-First Design
                            </Accordion.Header>
                            <Accordion.Body>
                                All websites and designs are built using a mobile-first
                                approach to ensure perfect responsiveness across devices,
                                screen sizes, and modern browsers.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* 06 */}
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                <span className="me-3 fw-bold">06.</span>
                                SEO & Performance Optimization
                            </Accordion.Header>
                            <Accordion.Body>
                                I optimize websites for search engines and speed by improving
                                Core Web Vitals, page load times, accessibility, and clean
                                semantic structure to boost visibility and rankings.
                            </Accordion.Body>
                        </Accordion.Item>

                        {/* 07 */}
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>
                                <span className="me-3 fw-bold">07.</span>
                                Website Maintenance & Support
                            </Accordion.Header>
                            <Accordion.Body>
                                Ongoing website maintenance, updates, bug fixes, and
                                performance monitoring to ensure your site stays secure,
                                updated, and running smoothly at all times.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>


            </Container>
        </section>
    );
};

export default Services;
