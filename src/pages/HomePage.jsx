import React from 'react'
import { Helmet } from 'react-helmet-async'

import Services from "../components/home/Services"
import Pill from "../components/home/Pills"
import TestMarque from '../components/common/TestMarque'
import Project from '../components/home/Project'
import Skills from '../components/home/Skills'
import WhyChoose from '../components/home/WhyChoose'
import Aboutus from '../components/home/Aboutus'
import CtaSection from '../components/home/CtaSection'
import HomeBanner from '../components/home/HomeBanner'

const HomePage = () => {
  return (
    <div className='Page-wrap'>

      {/* Page Title & Meta */}
      <Helmet>
        <title>Gokul Portfolio | MERN Stack Developer & UI/UX Designer</title>
        <meta
          name="description"
          content="Gokul Portfolio showcases expertise in MERN stack development and UI/UX design. Explore web development projects, interactive designs, and innovative solutions for modern web applications."
        />
      </Helmet>


      {/* home banner  */}
      <HomeBanner />

      {/* about us */}
      <Aboutus />

      {/* text marque */}
      <TestMarque />

      {/* skills */}
      <Skills />

      {/* cta section */}
      <CtaSection />

      {/* services section */}
      <Services />

      {/* why choose us */}
      <WhyChoose />

      {/* pills section */}
      <Pill />

      {/* projects */}
      <Project />

    </div>
  )
}

export default HomePage
