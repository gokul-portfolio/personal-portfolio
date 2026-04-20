import React from 'react'
import img from '../../assets/images/home/cta-img-1.png'
import { HiArrowRight } from "react-icons/hi";

import Button from '../common/Button'
const CtaSection = () => {
    return (
        <>

            <div className="cta-inner-1">
                <div className="cta-overlay-1">
                    <img src={img} alt="" />
                </div>

                <div className="cta-overlay-content-1">
                    <h2 className='main-head'>
                        Ready to <span>Build Your Website</span>?
                    </h2>

                    <p>
                        I help businesses and brands create modern, responsive, and high-performance
                        websites. From static and dynamic websites to full e-commerce platforms,
                        I deliver scalable digital solutions that help your business grow online.
                    </p>
                    <Button
                        to="tel:+917339114903"
                        icon={<HiArrowRight />}  >
                        Call Us Today
                    </Button>
                </div>

            </div>
        </>
    )
}

export default CtaSection
