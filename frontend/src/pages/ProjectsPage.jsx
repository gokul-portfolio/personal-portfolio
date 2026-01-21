import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectMain from '../components/projects/ProjectMain';
import ProjectShowCase from '../components/projects/ProjectShowCase';

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Project Portfolio | Our Work Showcase</title>
        <meta 
          name="description" 
          content="Explore our completed projects, case studies and portfolio showcasing creative and development work delivered for clients." 
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <ProjectMain />
      <ProjectShowCase />
    </>
  );
};

export default ProjectsPage;
