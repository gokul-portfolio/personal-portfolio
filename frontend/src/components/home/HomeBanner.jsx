import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HiArrowRight } from "react-icons/hi";
import Button from "../common/Button"
import Banner from "../../assets/images/banner/banner-img-1.png"
import arrow from '../../assets/images/shape/arrow-1.png'
import Typewriter from "../common/Typewriter";


const HomeBanner = () => {
    return (
        <section className="home-banner">
            <div className="banner-overlay"></div>

            <Container fluid>
                <Row className="align-items-center min-vh-100">

                    <Col lg={7} md={7}>
                        <div className="banner-content-left">
                            <span className="banner-subtitle">
                                <Typewriter
                                    text="HI, I’M"
                                    speed={120}
                                    delay={5500}
                                    loop={true}
                                />
                            </span>

                            <h1 className="banner-title">GOKUL </h1>
                            <h1 className="banner-title-outline">DIGITAL CRAFT</h1>
                        </div>

                    </Col>

                    <Col lg={5} md={5}>
                        <div className="banner-content-right">
                            <p>
                                We craft modern digital experiences with a strong focus on
                                design, performance, and user engagement. Our solutions are
                                built to scale and leave a lasting impact.
                            </p>

                            <Button to={'/about'} icon={<HiArrowRight />}>
                                Get Started
                            </Button>
                        </div>
                    </Col>

                </Row>
            </Container>

            <div className="home-banner-overlay">
                <img src={Banner} className="img-fluid" alt="" />
            </div>

            <div className="banner-overlay-1">
                <img src={arrow} className="img-fluid" alt="" />
            </div>
        </section>
    );
};

export default HomeBanner;
