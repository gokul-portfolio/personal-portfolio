import React from 'react';
import { Container } from 'react-bootstrap';
import ContactImg from '../../assets/images/home/contact-img.png';
import { MdEmail, MdPhoneInTalk, MdChat, MdWhatsapp } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

import Button from '../common/Button';

const ContactUs = () => {
    return (
        <section>
            <div className="inner-contact">
                <Container fluid>

                    {/* Header */}
                    <div className="header-wrap-3 text-center mb-3 mb-lg-5 wow animate__fadeInUp" data-wow-delay="0.1s">
                        <h4 className="bg-header">Contact</h4>
                        <h2 className="main-head">Get in Touch With Me</h2>
                    </div>

                    <div className="contact-wrap">

                        {/* Center Image */}
                        <div className="contact-center-img wow animate__zoomIn" data-wow-delay="0.2s">
                            <img src={ContactImg} className='img-fluid' alt="Contact" />
                        </div>

                        {/* Floating Contact Items */}
                        <div className="contact-floating">
                            <a href="mailto:gokulnath2k24@gmail.com" className="contact-item item-1 wow animate__fadeInLeft" data-wow-delay="0.3s">
                                <MdEmail />
                                <span>Email Support</span>
                            </a>

                            <a href="tel:+917339114903" className="contact-item item-2 wow animate__fadeInLeft" data-wow-delay="0.4s">
                                <MdPhoneInTalk />
                                <span>Call Assistance</span>
                            </a>

                            <a
                                href="https://github.com/gokul-portfolio"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-item item-3 wow animate__fadeInRight"
                                data-wow-delay="0.5s"
                            >
                              <BsGithub />
                                <span>GitHub</span>
                            </a>


                            <a href="https://wa.me/917339114903" target="_blank" rel="noreferrer" className="contact-item item-4 wow animate__fadeInRight" data-wow-delay="0.6s">
                                <MdWhatsapp />
                                <span>WhatsApp Help</span>
                            </a>
                        </div>

                        {/* Contact Text */}
                        <div className="contact-content-1 wow animate__fadeInUp" data-wow-delay="0.7s">
                            <h2>Let's grab a coffee and discuss your next project.</h2>
                            <p>I'm always open to collaborating on exciting web development ideas. Whether you’re looking to build a brand-new website or improve an existing product, let’s connect and make it happen.</p>
                        </div>

                        {/* Button */}
                        <div className="contact-btn wow animate__fadeInUp" data-wow-delay="0.8s">
                            <Button to="/" icon={<HiArrowRight />}>
                                Portfolio
                            </Button>
                        </div>

                    </div>
                </Container>
            </div>
        </section>
    );
};

export default ContactUs;
