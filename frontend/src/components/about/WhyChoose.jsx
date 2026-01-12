import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    BsAward,
    BsEmojiSmile,
    BsCheck2Circle,
    BsPeopleFill,
} from "react-icons/bs";

const WhyChoose = () => {
    return (
        <section className="inner-why-choose py-5">
            <Container fluid>

                {/* Section Header */}
                <div className="text-center mb-4 mb-lg-5">
                    <h4 className="bg-header">Why Choose Me</h4>
                    <h2 className="main-head">
                        Delivering Reliable, High-Quality Web Solutions
                    </h2>
                </div>

                {/* Grid */}
                <div className="why-inner-grid">
                    <Row className="g-3 align-items-stretch">

                        {/* Left Side */}
                        <Col lg={6} md={6}>
                            <Row className="g-3 h-100">

                                <Col xs={6}>
                                    <div className="why-card h-100">
                                        <div className="icon">
                                            <BsAward />
                                        </div>
                                        <h3>3+</h3>
                                        <p>Years of Industry Experience</p>
                                    </div>
                                </Col>

                                <Col xs={6}>
                                    <div className="why-card h-100">
                                        <div className="icon">
                                            <BsEmojiSmile />
                                        </div>
                                        <h3>42+</h3>
                                        <p>Happy Clients</p>
                                    </div>
                                </Col>

                                <Col xs={12}>
                                    <div className="why-card wide h-100">
                                        <div className="icon">
                                            <BsCheck2Circle />
                                        </div>
                                        <h3>113+</h3>
                                        <p>Projects Successfully Completed</p>
                                    </div>
                                </Col>

                            </Row>
                        </Col>

                        {/* Right Highlight */}
                        <Col lg={6} md={6}>
                            <div className="why-card highlight h-100">
                                <div className="icon">
                                    <BsPeopleFill />
                                </div>
                                <h3>12+</h3>
                                <p>Active & Recent Clients</p>
                            </div>
                        </Col>

                    </Row>
                </div>

            </Container>
        </section>
    );
};

export default WhyChoose;
