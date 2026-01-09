import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import img from "../../assets/images/home/head.png";

/* =========================
   Counter Component
========================= */
const Counter = ({ end, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration]);

    return (
        <>
            {count}
            {suffix}
        </>
    );
};

/* =========================
   Main Component
========================= */
const ServiceTop = () => {
    return (
        <section className="service-parent">
            <Container fluid>
                {/* Header */}
                <div className="header-wrap-3 text-center mb-3 mb-lg-5">
                    <h4 className="bg-header">Our Services</h4>
                    <h2 className="main-head">
                        Solutions Designed to Grow Your Business
                    </h2>
                </div>

                {/* Center Image */}
                <div className="parent-wrap">
                    <div className="parent-overlay-box-1">
                        <img src={img} className="img-fluid" alt="Service Visual" />
                    </div>
                </div>

                {/* Right Content */}
                <div className="parent-overlay-box-2">
                    <h4>Strategy-Driven Digital Services</h4>
                    <p>
                        We build smart digital solutions using modern technology
                        and user-focused design to drive sustainable growth.
                    </p>
                </div>

                {/* Counter 1 */}
                <div className="parent-overlay-box-3">
                    <h4 className="service-counter">
                        <Counter end={40} suffix="+" />
                    </h4>
                    <p className="service-counter-para">Projects Delivered</p>
                </div>

                {/* Counter 2 */}
                <div className="parent-overlay-box-4">
                    <h4 className="service-counter">
                        <Counter end={98} suffix="%" />
                    </h4>
                    <p className="service-counter-para">Client Satisfaction</p>
                </div>

                {/* Marquee */}
                <div className="wraper">
                    <div className="parent-marquee">
                        <div className="marquee-track">
                            <span>Website Development</span>
                            <span className="weapper-plux">+</span>
                            <span>UI / UX Design</span>
                            <span className="weapper-plux">+</span>
                            <span>React Development</span>
                            <span className="weapper-plux">+</span>
                            <span>Backend Development</span>
                            <span className="weapper-plux">+</span>
                            <span>API Integration</span>
                            <span className="weapper-plux"> +</span>
                            <span>Performance Optimization</span>
                            <span className="weapper-plux">+</span>
                            <span>SEO-Friendly Coding</span>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ServiceTop;
