import React from 'react'
import Aboutus from '../components/about/About'
import WhyChoose from '../components/about/WhyChoose'
import Services from '../components/about/Services'
import WhyChooseMain from '../components/home/WhyChoose'

const AboutPage = () => {
  return (
    <>

      {/* // about us */}
      <Aboutus />


      {/* why choose us */}
      <WhyChooseMain />


      {/* // why choose us */}
      <WhyChoose />

    </>

  )
}

export default AboutPage
