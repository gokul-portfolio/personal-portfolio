import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServiceTop from '../components/services/ServiceTop';
import Service from '../components/about/Services';
import ServiceMain from '../components/services/ServiceMain';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | What We Offer</title>
        <meta
          name="description"
          content="Explore our professional services including web development, branding, UI/UX design, and digital solutions tailored for your business needs."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Services Banner */}
      <ServiceTop />

      {/* Services List / Cards */}
      <Service />

      {/* Detailed or Additional Services */}
      <ServiceMain />
    </>
  );
};

export default ServicesPage;
