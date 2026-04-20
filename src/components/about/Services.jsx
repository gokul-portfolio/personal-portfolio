import React from "react";
import { Container, Accordion } from "react-bootstrap";
import servicesData from '../../data/services';

const Services = () => {
    return (
        <section className="service-accordian-inner">
            <Container fluid>

                <div className="header-wrap mb-4">
                    <div className="header-wrap-3">
                        <h2 className="bg-header">My Services</h2>
                    </div>
                    <h4 className="sub-main-1">Services</h4>
                </div>

                <div className="service-accordion mx-auto">
                    <Accordion defaultActiveKey="01" flush>
                        {servicesData.map((item) => (
                            <Accordion.Item eventKey={item.id} key={item.id}>
                                <Accordion.Header>
                                    <span className="me-3 fw-bold">{item.id}.</span>
                                    {item.title}
                                </Accordion.Header>
                                <Accordion.Body>

                                    <div className="service-accordian-wrap">

                                        <div className="service-content2" >
                                            {item.description}

                                        </div>

                                        <div className="service-inside-img">
                                            <img src={item.image} className="img-fluid" alt="" />

                                        </div>

                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>


            </Container>
        </section>
    );
};

export default Services;
