import React from 'react'


const HomePage = () => {
  return (
    <section className="container py-5 text-center">
      <h1 className="mb-3">
        Hi, I’m <span className="text-primary">Gokul</span> 👋
      </h1>

      <h4 className="text-muted mb-4">
        Frontend Developer | React Developer
      </h4>

      <p className="mx-auto mb-4" style={{ maxWidth: "600px" }}>
        I build clean, responsive, and user-friendly web applications using
        modern frontend technologies. Passionate about learning and creating
        real-world projects.
      </p>

      <div className="d-flex justify-content-center gap-3">
        <a href="/projects" className="btn btn-primary">
          View Projects
        </a>
        <a href="/contact" className="btn btn-outline-secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default HomePage;
