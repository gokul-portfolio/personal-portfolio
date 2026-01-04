import React from 'react'

import Services from "../components/home/Services"
import Pill from "../components/home/Pills"
import TestMarque from '../components/common/TestMarque'
import Project from '../components/home/Project'
import Skills from '../components/home/Skills'
import WhyChoose from '../components/home/WhyChoose'
import Aboutus from '../components/home/Aboutus'
const HomePage = () => {
  return (

    <div className='Page-wrap'>

      {/* about us */}
      <Aboutus />

      {/* text marque */}
      <TestMarque />
      
      {/* skills */}
      <Skills />


      {/* services section */}
      <Services />

      {/* why choose us */}
      <WhyChoose />

      {/* pills section */}
      <Pill />

      {/* projeccts */}
      <Project />

    </div>
  )
}

export default HomePage
