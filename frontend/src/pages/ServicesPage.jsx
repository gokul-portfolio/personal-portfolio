import React from 'react'
import ServiceTop from '../components/services/ServiceTop'
import Service from '../components/about/Services'
import ServiceMain from '../components/services/ServiceMain'

const ServicesPage = () => {
  return (
    <>

      {/* service banner */}
      <ServiceTop />


      <Service />

      <ServiceMain />

    </>
  )
}

export default ServicesPage