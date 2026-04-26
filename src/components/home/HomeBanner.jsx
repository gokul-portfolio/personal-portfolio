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

                            <span className="banner-subtitle wow animate__animated animate__fadeInDown" data-wow-delay="0.2s">
                                <Typewriter
                                    text="HI, I’M"
                                    speed={120}
                                    delay={5500}
                                    loop={true}
                                />
                            </span>

                            <h1 className="banner-title wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                                GOKUL
                            </h1>

                            <h1 className="banner-title-outline wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                                DIGITAL CRAFT
                            </h1>

                        </div>
                    </Col>

                    <Col lg={5} md={5}>
                        <div className="banner-content-right wow animate__animated animate__fadeInRight" data-wow-delay="0.8s">
                           <p className="wow animate__animated animate__fadeInUp" data-wow-delay="1s">
I am a Software and Web Developer with 2+ years of experience in building responsive,
user-friendly, and performance-driven applications and websites. I specialize in developing
scalable software solutions and modern web interfaces using React.js, JavaScript, and
other modern frontend technologies.
</p>    
                            <div className="wow animate__animated animate__zoomIn" data-wow-delay="1.2s">
                                <Button to={'/about'} icon={<HiArrowRight />}>
                                    Get Started
                                </Button>
                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>

            <div className="home-banner-overlay wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                <img src={Banner} className="img-fluid" alt="" />
            </div>

            <div className="banner-overlay-1 wow animate__animated animate__fadeInLeft" data-wow-delay="1s">
                <img src={arrow} className="img-fluid" alt="" />
            </div>
        </section>

    );
};

export default HomeBanner;
