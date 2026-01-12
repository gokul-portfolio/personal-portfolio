import React from 'react'
import ProjectBanner from '../../assets/images/projects/project-banner.png'
import Button from '../common/Button'
import { HiArrowRight } from "react-icons/hi";
import { Container } from 'react-bootstrap';

const ProjectMain = () => {
    return (
        <>
            <div className="project-main">
                <Container fluid>


                    <div className="project-main-head">
                        <h4 className="round-head mb-3 mb-lg-4">Featured Projects</h4>

                        <h2 className="main-head">
                            Crafting <span className="name">Scalable</span> Web Solutions <br />
                            <span>That Perform, Engage & Grow</span>
                        </h2>

                        <p className="main-para">
                            A curated selection of real-world projects showcasing modern design,
                            clean code, performance optimization, and user-focused development.
                        </p>
                    </div>

                </Container>


                <div className="project-main-img">
                    <img src={ProjectBanner} className="img-fluid" alt="Project Banner" />
                </div>


                <div className="project-main-btn">
                    <Button to={"/about"} icon={<HiArrowRight />} >
                        Contact Us
                    </Button>
                </div>

            </div>
        </>

    )
}

export default ProjectMain
