import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../assets/images/home/why-us.webp";
import Button from "../common/Button"
import { HiCheckCircle, HiArrowRight } from "react-icons/hi";

const Aboutus = () => {
    return (
        <div className="inner-aboutus">
            <Container fluid>
                <Row className="align-items-center">
                    <Col lg={7} md={7}  sm={12}  >
                        <div className="aboutus-left">
                            <h4 className="sub-main">About us</h4>
                            <h2 className="main-head">
                                Smart Web Solutions <br />
                                That Drive Growth
                            </h2>

                            <p className="about-desc">
                                I help businesses and individuals build modern, scalable, and
                                high-performance web applications. With a strong focus on clean code,
                                intuitive UI/UX, and reliable technologies, I deliver digital solutions
                                that are built to grow and perform long-term.
                            </p>



                            {/* PROGRESS BARS */}
                            <div className="about-progress mb-3 mb-md-5">
                                <div className="progress-item">
                                    <div className="progress-head">
                                        <span>Frontend Development</span>
                                        <span className="percent red">92%</span>
                                    </div>
                                    <div className="progress-bar">
                                        <span className="progress-fill red" style={{ width: "92%" }}></span>
                                    </div>
                                </div>

                                <div className="progress-item">
                                    <div className="progress-head">
                                        <span>Backend Development</span>
                                        <span className="percent green">85%</span>
                                    </div>
                                    <div className="progress-bar">
                                        <span className="progress-fill green" style={{ width: "85%" }}></span>
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
                            </div>

                            <Button to={"/about"} icon={<HiArrowRight />} >
                                Contact Us
                            </Button>
                        </div>
                    </Col>

                    <Col lg={5} md={5} sm={12}>
                        <div className="aboutus-right">
                            <img src={AboutImg} className="img-fluid" alt="About Us" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Aboutus;
