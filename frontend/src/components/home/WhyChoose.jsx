import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HiCheckCircle, HiArrowRight } from "react-icons/hi";
import tick from "../../assets/images/icons/tick.webp"
import WhyChooseImg from "../../assets/images/home/why-us.webp";
import Button from "../common/Button";
const WhyChoose = () => {
    return (
        <section className="inner-why-us">
            <Container fluid>

                <div className="header-wrap mb-4">
                    <div className="header-wrap-3">
                        <h2 className="bg-header">Why Choose Me</h2>
                    </div>

                    <h4 className="sub-main-1">Why Me</h4>

                </div>



                <Row className="align-items-center">
                    <Col lg={5} md={5} className="mb-4 order-2 order-md-1 mb-lg-0">
                        <div className="why-left">
                            <img
                                src={WhyChooseImg}
                                className="img-fluid"
                                alt="Why Choose Me"
                            />
                        </div>
                    </Col>

                    <Col lg={7}  md={7} className="order-1 order-md-2">
                        <div className="why-right">
                            <h2 className="main-head">
                                Building Web Solutions <br />
                                You Can Trust
                            </h2>

                            <p className="why-desc">
                                I help businesses and individuals build modern, high-performing
                                web applications with clean code, strong UI/UX, and scalable
                                architecture. My focus is on quality, performance, and long-term
                                value.
                            </p>

                            {/* FEATURES LIST */}
                            <div className="why-points">
                                <div className="why-point">
                                    <img src={tick} className="img-fluid" alt="" />
                                    <span>Responsive & Modern Design</span>
                                </div>

                                <div className="why-point">
                                    <img src={tick} className="img-fluid" alt="" />
                                    <span>Clean & Scalable Codebase</span>
                                </div>

                                <div className="why-point">
                                    <img src={tick} className="img-fluid" alt="" />
                                    <span>SEO & Performance Optimized</span>
                                </div>

                                <div className="why-point">
                                    <img src={tick} className="img-fluid" alt="" />
                                    <span>User-Focused UI / UX</span>
                                </div>

                                <div className="why-point">
                                    <img src={tick} className="img-fluid" alt="" />
                                    <span>Secure & Best Coding Practices</span>
                                </div>

                                <div className="why-point">
                                    <img src={tick} className="img-fluid" alt="" />
                                    <span>Reliable Support & Maintenance</span>
                                </div>
                            </div>


                            {/* CTA */}
                            <div className="why-btn mt-4">
                               <Button to="/gallery" icon={<HiArrowRight />}>
                               Explore Work
                               </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhyChoose;
