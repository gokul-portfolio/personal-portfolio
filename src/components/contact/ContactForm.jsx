import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { FaUser, FaEnvelope, FaPhoneAlt, FaTools, FaRegCommentDots } from 'react-icons/fa'
import { HiArrowRight } from "react-icons/hi";
import Button from "../common/Button";

const ContactForm = () => {
    return (
        <section>
            <div className="inner-contact-form">
                <Container fluid>
                    <div className="header-wrap-3 mb-3 mb-lg-5">
                        <h4 className="bg-header">Contact</h4>
                        <h2 className="main-head">Turn Ideas Into Digital Reality</h2>
                    </div>

                    <div className="why-btn mt-4">
                        <Button to="/contact" icon={<HiArrowRight />}>
                            Know More
                        </Button>
                    </div>



                    {/* <div className="contact-form">

                         <Form>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="name">
                                        <Form.Label><FaUser /> Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="email">
                                        <Form.Label><FaEnvelope /> Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="phone">
                                        <Form.Label><FaPhoneAlt /> Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your phone number" />
                                    </Form.Group>
                                </Col>

                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="service">
                                        <Form.Label><FaTools /> Service Required</Form.Label>
                                        <Form.Select>
                                            <option>Select a service</option>
                                            <option>Web Development</option>
                                            <option>Branding & Design</option>
                                            <option>SEO Optimization</option>
                                            <option>E-Commerce Development</option>
                                            <option>Maintenance & Support</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="message" className="mb-3">
                                <Form.Label><FaRegCommentDots /> Your Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Write your message..." />
                            </Form.Group>

                            <Button type="submit" className="contact-submit-btn">
                                Send Message
                            </Button>
                        </Form> 
                    
                    </div> */}

                </Container>
            </div>
        </section>
    )
}

export default ContactForm
