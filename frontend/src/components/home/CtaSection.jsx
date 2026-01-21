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
                        Ready to <span>Grow Your Business</span> With Us?
                    </h2>

                    <p>
                        We help brands build powerful digital experiences that drive results.
                        From strategy to execution, our team delivers solutions designed to
                        scale your business and maximize impact.
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
