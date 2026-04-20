import React from 'react'
import { Helmet } from 'react-helmet-async'

import Aboutus from '../components/about/About'
import WhyChoose from '../components/about/WhyChoose'
import Services from '../components/about/Services'
import WhyChooseMain from '../components/home/WhyChoose'

const AboutPage = () => {
  return (
    <>
      <Helmet>

        <title>About | Gokul Portfolio – MERN Stack Developer & UI/UX Designer</title>
        <meta
          name="description"
          content="Learn more about Gokul, a MERN Stack Developer and UI/UX Designer. Explore expertise in web development, innovative projects, and why clients choose Gokul for modern, interactive web solutions."
        />
        <meta
          name="keywords"
          content="Gokul, About, MERN Stack Developer, UI/UX Designer, Web Development, Portfolio, Projects"
        />

      </Helmet>

      {/* About Us Section */}
      <Aboutus />

      {/* Why Choose Us Section */}
      <WhyChooseMain />

      {/* Services / Additional Section */}
      <WhyChoose />
    </>
  )
}

export default AboutPage
