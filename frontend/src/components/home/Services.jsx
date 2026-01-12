import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HiArrowRight } from "react-icons/hi";

import Button from "../common/Button";
import ServiceCard from "../common/ServiceCard";

import Services1 from "../../assets/images/services/ui-ux.webp";
import Services2 from "../../assets/images/services/social-marketing.webp";
import Services3 from "../../assets/images/services/web-development.webp";

const Services = () => {
    const servicesData = [
        {
            title: "Web Development",
            image: Services3,
            link: "/services/web-development",
        },
        {
            title: "UI / UX Design",
            image: Services1,
            link: "/services/ui-ux",
        },
        {
            title: "SEO Websites",
            image: Services2,
            link: "/services/seo",
        },
        {
            title: "Web Development",
            image: Services3,
            link: "/services/web-development",
        },
        {
            title: "UI / UX Design",
            image: Services1,
            link: "/services/ui-ux",
        },
        {
            title: "SEO Websites",
            image: Services2,
            link: "/services/seo",
        },
        {
            title: "Web Development",
            image: Services3,
            link: "/services/web-development",
        },
        {
            title: "UI / UX Design",
            image: Services1,
            link: "/services/ui-ux",
        },
        {
            title: "SEO Websites",
            image: Services2,
            link: "/services/seo",
        },
    ];

    return (
        <div className="services-inner">
            <Container fluid>
                <div className="header-wrap-1">
                    <Row>
                        <Col lg={9} md={8}>
                            <h4 className="sub-head">What I Do</h4>
                            <h2 className="main-head">
                                Unlock Revenue Growth <br /> for Your Business
                            </h2>
                        </Col>

                        <Col lg={3} md={4} className="d-flex justify-content-end align-items-end">
                            <Button to="/contact" icon={<HiArrowRight />}>
                                Portfolio
                            </Button>
                        </Col>
                    </Row>
                </div>

                <div className="service-sec">
                    <div className="service-track">
                        {servicesData.map((item, index) => (
                            <ServiceCard
                                key={index}
                                title={item.title}
                                image={item.image}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;
