import React from 'react';
import { Helmet } from 'react-helmet-async';

import ProjectDetailMain from '../components/projects/ProjectDetailMain';
import ProjectGallery from '../components/projects/ProjectGallery';

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Gokul Portfolio — MERN Stack & UI/UX Works</title>
        <meta
          name="description"
          content="Explore Gokul's full-stack MERN development projects, UI/UX design work, web applications, and interactive portfolio showcasing modern web solutions."
        />
        <meta
          name="keywords"
          content="Gokul Projects, MERN Projects, React Projects, UI/UX Portfolio, Web App Development, Full Stack Projects"
        />

        {/* OG Tags for Social Sharing */}
        <meta property="og:title" content="Projects | Gokul Portfolio" />
        <meta
          property="og:description"
          content="Showcase of full-stack MERN applications and UI/UX design projects by Gokul."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Project Overview / Details */}
      <ProjectDetailMain />

      {/* Image Gallery / Case Studies */}
      <ProjectGallery />
    </>
  );
};

export default ProjectsPage;
