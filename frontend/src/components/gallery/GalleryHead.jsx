import React from 'react';
import img from "../../assets/images/gallery/gallery-head.webp";
import { HiArrowRight } from "react-icons/hi";

import Button from '../common/Button';
import { Container } from 'react-bootstrap';

const GalleryHead = () => {
    return (
        <>
            <div className="inner-gallery-main">

                <Container fluid>


                    <div className="header-wrap-3 text-center mb-3 mb-lg-5">
                        <h4 className="bg-header">Gallery</h4>
                        <h2 className="main-head">Our Recent Works & Creations</h2>
                    </div>

                    <div className="gallery-header">
                        <p>
                            Explore a curated collection of our recent projects showcasing
                            creativity, innovation, and attention to detail across design
                            and development.
                        </p>

                        <Button to="/" icon={<HiArrowRight />}>
                            View More
                        </Button>
                    </div>


                </Container>


                {/* Image Section */}
                <div className="gallery-main-img">
                    <img src={img} className="img-fluid" alt="Gallery Showcase" />
                </div>

            </div>
        </>
    );
};

export default GalleryHead;
