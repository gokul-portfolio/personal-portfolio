import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../assets/images/home/why-us.webp";
import Button from "../common/Button";
import { HiArrowRight } from "react-icons/hi";

const Aboutus = () => {
    return (
        <div className="inner-aboutus">
            <Container fluid>
                <Row className="align-items-center">

                    <Col lg={7} md={7} sm={12}>
                        <div className="aboutus-left wow animate__animated animate__fadeInLeft" data-wow-delay="2.2s">

                            <h4 className="sub-main wow animate__animated animate__fadeInDown" data-wow-delay="3.3s">
                                About Me
                            </h4>

                            <h2 className="main-head wow animate__animated animate__fadeInUp" data-wow-delay="3.4s">
                                Building Fast & Scalable <br />
                                Modern Web Experiences
                            </h2>

                            <p className="about-desc wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                I’m a passionate Web Developer specializing in building responsive,
                                high-performance, and scalable web applications. With a strong focus on
                                clean code, modern UI/UX principles, and performance optimization,
                                I create digital experiences that are not only visually appealing
                                but also reliable, SEO-friendly, and built for long-term growth.
                            </p>

                            {/* PROGRESS BARS */}
                            <div className="about-progress mb-3 mb-md-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.8s">
                                <div className="progress-item">
                                    <div className="progress-head">
                                        <span>Frontend Development</span>
                                        <span className="percent red">98%</span>
                                    </div>
                                    <div className="progress-bar">
                                        <span className="progress-fill red" style={{ width: "98%" }}></span>
                                    </div>
                                </div>

                                <div className="progress-item">
                                    <div className="progress-head">
                                        <span>UI / UX Design</span>
                                        <span className="percent yellow">80%</span>
                                    </div>
                                    <div className="progress-bar">
                                        <span className="progress-fill yellow" style={{ width: "80%" }}></span>
                                    </div>
                                </div>

                                <div className="progress-item">
                                    <div className="progress-head">
                                        <span>Backend Development</span>
                                        <span className="percent green">65%</span>
                                    </div>
                                    <div className="progress-bar">
                                        <span className="progress-fill green" style={{ width: "65%" }}></span>
                                    </div>
                                </div>
                            </div>

                            <div className="wow animate__animated animate__zoomIn" data-wow-delay="1s">
                                <Button to={"/contact"} icon={<HiArrowRight />}>
                                    Contact Us
                                </Button>
                            </div>

                        </div>
                    </Col>

                    <Col lg={5} md={5} sm={12}>
                        <div className="aboutus-right wow animate__animated animate__fadeInRight" data-wow-delay="0.4s">
                            <img src={AboutImg} className="img-fluid" alt="About Us" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Aboutus;
