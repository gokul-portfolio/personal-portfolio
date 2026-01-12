import React from "react";
import { Container } from "react-bootstrap";

/* Frontend */
import html from "../../assets/images/icons/html.webp";
import css from "../../assets/images/icons/css.webp";
import js from "../../assets/images/icons/javascript.webp";
import react from "../../assets/images/icons/react.webp";

/* Backend */
import node from "../../assets/images/icons/node.webp";
import express from "../../assets/images/icons/express.webp";
import php from "../../assets/images/icons/php.webp";

/* Database */
import mongodb from "../../assets/images/icons/mongodb.webp";
import mysql from "../../assets/images/icons/mysql.webp";

/* Tools */
import git from "../../assets/images/icons/git.webp";
import github from "../../assets/images/icons/github.webp";
import postman from "../../assets/images/icons/postman.webp";
import figma from "../../assets/images/icons/figma.webp";

const Skills = () => {
  const skillsData = [
    // Frontend
    { name: "HTML5", icon: html },
    { name: "CSS3", icon: css },
    { name: "JavaScript", icon: js },
    { name: "React JS", icon: react },

    // Backend
    { name: "Node JS", icon: node },
    { name: "Express JS", icon: express },
    { name: "PHP", icon: php },

    // Database
    { name: "MongoDB", icon: mongodb },
    { name: "MySQL", icon: mysql },

    // Tools
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "Postman", icon: postman },
    { name: "Figma", icon: figma },
  ];

  return (
    <section className="inner-skills">
      <Container fluid>
        <div className="header-wrap-3 text-center mb-3 mb-lg-5">
          <h4 className="bg-header">Our Skills</h4>
          <h2 className="main-head">Technologies I Work With</h2>
        </div>

        <div className="skills-wrap">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-icon"
              data-skill={skill.name}
            >
              <img
                src={skill.icon}
                className="img-fluid"
                alt={skill.name}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
