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
                    <h2 className='main-head'>Lorem, <span> ipsum </span> dolor.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odio ut delectus obcaecati, impedit illum
                        dolor perspiciatis quae inventore recusandae
                        provident dolorum quis aspernatur deleniti
                        eaque quasi ratione. Cum, aliquid quidem.</p>

                    <Button to={"/contact"} icon={<HiArrowRight />} >
                        contact Now
                    </Button>
                </div>
            </div>
        </>
    )
}

export default CtaSection
