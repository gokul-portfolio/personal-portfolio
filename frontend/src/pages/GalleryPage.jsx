import React from 'react';
import { Helmet } from 'react-helmet-async';

import GalleryHead from '../components/gallery/GalleryHead';
import GalleryMain from '../components/gallery/GalleryMain';
import CtaSection from '../components/home/CtaSection';

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Gokul Portfolio — Projects & UI/UX Works</title>
        <meta
          name="description"
          content="Browse Gokul's project gallery showcasing UI/UX designs, MERN stack applications, component UI visuals, and modern web development work."
        />
        <meta
          name="keywords"
          content="Gokul Gallery, Portfolio Gallery, UI/UX Gallery, MERN Developer Gallery, Web Design Showcase, Project Screenshots"
        />

        {/* OG Tags for Social Sharing */}
        <meta property="og:title" content="Gallery | Gokul Portfolio" />
        <meta
          property="og:description"
          content="Explore UI/UX designs and full-stack web development project visuals by Gokul."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Gallery Header */}
      <GalleryHead />

      {/* Gallery Content */}
      <GalleryMain />

    </>
  );
};

export default GalleryPage;
