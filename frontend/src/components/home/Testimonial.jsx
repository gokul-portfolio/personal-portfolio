import React from 'react'
import { Container } from 'react-bootstrap'
import testimonial from '../../assets/images/home/testimonial.png'

const Testimonial = () => {
  return (
    <div className="testimonial-inner">
      <Container fluid>
        <div className="header text-center mb-4">
          <h2>lorem</h2>
          <h3>Lorem ipsum dolor sit.</h3>
        </div>

        <div className="testimonial-wrap">
          <img src={testimonial} className="testimonial-img img-fluid" alt="testimonial" />
        </div>
      </Container>
    </div>
  )
}

export default Testimonial
