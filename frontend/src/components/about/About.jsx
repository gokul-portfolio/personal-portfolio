import React from "react";
import {
    BsStarFill,
    BsFacebook,
    BsInstagram,
    BsTwitterX,
    BsLinkedin,
    BsQuote
} from "react-icons/bs";

import about from '../../assets/images/about/about-1.webp'

const About = () => {
    return (
        <>
            {/* About Us */}
            <section>
                <div className="about-sec">
                    <div className="container-fluid">

                        <div className="about-head-wrap">
                            <h4 className="round-head mb-3 mb-lg-4">Hello</h4>

                            <h2 className="main-head">
                                Building <span className="name">Modern</span> Web Experiences <br />
                                <span>That Feel Fast  Clean & Reliable</span>
                            </h2>
                        </div>

                        <div className="about-sec-content">

                            <div className="about-main-img">
                                <img
                                    src={about}
                                    className="img-fluid"
                                    alt="About"
                                />
                            </div>

                            <div className="experience-box">
                                <div className="star">
                                    <BsStarFill className="star-icon" />
                                    <BsStarFill className="star-icon" />
                                    <BsStarFill className="star-icon" />
                                    <BsStarFill className="star-icon" />
                                    <BsStarFill className="star-icon" />
                                </div>

                                <div className="experience-content">
                                    <h4>
                                        2 Years <br />
                                        <span>Experience</span>
                                    </h4>
                                </div>
                            </div>

                            <div className="about-box">
                                <p>
                                    <span><BsQuote /></span>
                                </p>
                                <p>
                                    I’m <strong>Gokul</strong>, a passionate <strong>Web Developer</strong> focused on
                                    building high-performance, scalable, and SEO-friendly websites.
                                    I specialize in creating clean user interfaces and smooth user
                                    experiences using modern web technologies.
                                </p>
                            </div>

                            <div className="about-social">
                                <h2>Follow Me</h2>
                                <ul className="social-list">
                                    <li><a href="#"><BsFacebook /></a></li>
                                    <li><a href="#"><BsInstagram /></a></li>
                                    <li><a href="#"><BsTwitterX /></a></li>
                                    <li><a href="#"><BsLinkedin /></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="aboout-footer-marquee">
                            <div className="marquee-track">
                                <span>Frontend Development</span><span className="dot">✦</span>
                                <span>React.js & Modern JavaScript</span><span className="dot">✦</span>
                                <span>Responsive Web Design</span><span className="dot">✦</span>
                                <span>SEO Optimized Websites</span><span className="dot">✦</span>
                                <span>High Performance UI</span><span className="dot">✦</span>
                                <span>Clean & Scalable Code</span><span className="dot">✦</span>

                                <span>Frontend Development</span><span className="dot">✦</span>
                                <span>React.js & Modern JavaScript</span><span className="dot">✦</span>
                                <span>Responsive Web Design</span><span className="dot">✦</span>
                                <span>SEO Optimized Websites</span><span className="dot">✦</span>
                                <span>High Performance UI</span><span className="dot">✦</span>
                                <span>Clean & Scalable Code</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
