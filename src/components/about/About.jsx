import React from "react";
import {
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsFacebook,
  BsStarFill,
  BsQuote
} from "react-icons/bs";
import about from '../../assets/images/about/about-1.webp';

const About = () => {
  return (
    <>
      {/* About Us */}
      <section>
        <div className="about-sec">
          <div className="container-fluid">

            {/* Heading */}
            <div className="about-head-wrap wow animate__animated animate__fadeInDown" data-wow-delay="0.2s">
              <h4 className="round-head mb-3 mb-lg-4">Hello</h4>

              <h2 className="main-head">
                Building <span className="name">Modern</span> Web Experiences <br />
                <span>That Feel Fast, Clean & Reliable</span>
              </h2>
            </div>

            <div className="about-sec-content">

              {/* Main Image */}
              <div className="about-main-img wow animate__animated animate__zoomIn" data-wow-delay="0.4s">
                <img
                  src={about}
                  className="img-fluid"
                  alt="About Gokul"
                />
              </div>

              {/* Experience Box */}
              <div className="experience-box wow animate__animated animate__fadeInLeft" data-wow-delay="0.6s">
                <div className="star">
                  <BsStarFill className="star-icon" />
                  <BsStarFill className="star-icon" />
                  <BsStarFill className="star-icon" />
                  <BsStarFill className="star-icon" />
                  <BsStarFill className="star-icon" />
                </div>

                <div className="experience-content">
                  <h4>
                    2 Years <br />
                    <span>Experience</span>
                  </h4>
                </div>
              </div>

              {/* About Text */}
              <div className="about-box wow animate__animated animate__fadeInRight" data-wow-delay="0.8s">
                <p>
                  <span><BsQuote /></span>
                </p>
                <p>
                  I’m <strong>Gokul</strong>, a passionate <strong>Web Developer</strong> focused on
                  building high-performance, scalable, and SEO-friendly websites.
                  I specialize in creating clean user interfaces and smooth user
                  experiences using modern web technologies.
                </p>
              </div>

              {/* Social Links */}
              <div className="about-social wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                <h2>Follow Me</h2>
                <ul className="social-list">
                  <li>
                    <a href="https://www.linkedin.com/in/gokul-nath-6315a1317/" target="_blank" rel="noreferrer">
                      <BsLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/kutti_gokul_/" target="_blank" rel="noreferrer">
                      <BsInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/gokul-portfolio" target="_blank" rel="noreferrer">
                      <BsGithub />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/gokul.g.73307" target="_blank" rel="noreferrer">
                      <BsFacebook />
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            {/* Marquee */}
            <div className="aboout-footer-marquee wow animate__animated animate__fadeInUp" data-wow-delay="1.2s">
              <div className="marquee-track">
                <span>Frontend Development</span><span className="dot">✦</span>
                <span>React.js & Modern JavaScript</span><span className="dot">✦</span>
                <span>Responsive Web Design</span><span className="dot">✦</span>
                <span>SEO Optimized Websites</span><span className="dot">✦</span>
                <span>High Performance UI</span><span className="dot">✦</span>
                <span>Clean & Scalable Code</span><span className="dot">✦</span>

                <span>Frontend Development</span><span className="dot">✦</span>
                <span>React.js & Modern JavaScript</span><span className="dot">✦</span>
                <span>Responsive Web Design</span><span className="dot">✦</span>
                <span>SEO Optimized Websites</span><span className="dot">✦</span>
                <span>High Performance UI</span><span className="dot">✦</span>
                <span>Clean & Scalable Code</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
