import React from 'react'
import { Container } from 'react-bootstrap'
import ContactImg from '../../assets/images/home/contact-img.png'
import { MdEmail, MdPhoneInTalk, MdChat, MdWhatsapp } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

import Button from '../common/Button'
const ContactUs = () => {
    return (
        <section>
            <div className="inner-contact">
                <Container fluid>
                    <div className="header-wrap-3 text-center mb-3 mb-lg-5">
                        <h4 className="bg-header">Contact</h4>
                        <h2 className="main-head">Get in Touch With Me</h2>
                    </div>

                    <div className="contact-wrap">
                        <div className="contact-center-img">
                            <img src={ContactImg} className='img-fluid' alt="" />
                        </div>

                        <div className="contact-floating">
                            <a href="mailto:gokulnath2k24@gmail.com" className="contact-item item-1">
                                <MdEmail />
                                <span>Email Support</span>
                            </a>

                            <a href="tel:+917339114903" className="contact-item item-2">
                                <MdPhoneInTalk />
                                <span>Call Assistance</span>
                            </a>

                            <a href="https://m.me/yourpage" target="_blank" rel="noreferrer" className="contact-item item-3">
                                <MdChat />
                                <span>Live Chat</span>
                            </a>

                            <a href="https://wa.me/917339114903" target="_blank" rel="noreferrer" className="contact-item item-4">
                                <MdWhatsapp />
                                <span>WhatsApp Help</span>
                            </a>
                        </div>

                        <div class="contact-content-1">
                            <h2>Let's grab a coffee and discuss your next project.</h2>
                            <p>I'm always open to collaborating on exciting web development ideas. Whether you’re looking to build a brand-new website or improve an existing product, let’s connect and make it happen.</p>
                        </div>

                        <div className="contact-btn">
                            <Button to="/" icon={<HiArrowRight />}>
                                View More
                            </Button>
                        </div>

                    </div>

                </Container>
            </div>
        </section>
    )
}

export default ContactUs
