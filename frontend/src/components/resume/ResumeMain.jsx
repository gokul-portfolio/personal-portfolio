import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ResumeMain = () => {
    return (
        <section className="resume-section">
            <Container className="resume-container">

                {/* Header */}
                <div className="resume-header text-center">
                    <h1>Harish R</h1>
                    <p>
                        harish.r.g@gmail.com | +91-9497514513 |
                        <a href="https://github.com/harishraghavan-dev" target="_blank" rel="noreferrer">
                            github.com/harishraghavan-dev
                        </a>
                    </p>
                </div>

                {/* Objective */}
                <ResumeBlock title="Objective">
                    <p>
                        Aspiring Full Stack Developer with a strong foundation in web development
                        and hands-on experience in React.js and Node.js. Passionate about building
                        efficient, scalable, and user-focused software solutions.
                    </p>
                </ResumeBlock>

                {/* Projects */}
                <ResumeBlock title="Projects">
                    <h6>Logistics Application for Shipments</h6>
                    <ul>
                        <li>Developed a logistics platform to streamline shipment tracking and management.</li>
                        <li>Implemented order processing, shipment updates, and delivery status monitoring.</li>
                        <li>Enhanced real-time dashboards for better operational visibility.</li>
                        <li>Followed Agile development practices while collaborating within a team.</li>
                        <li><strong>Technologies:</strong> Node.js, MySQL, React.js</li>
                    </ul>

                    <h6 className="mt-3">Stock Market Dashboard (Python) <span>Jun 2024 – Present</span></h6>
                    <ul>
                        <li>Built a stock signal prediction system using technical indicators and sentiment analysis.</li>
                        <li>Used yfinance, pandas, ta, and VADER.</li>
                        <li>Designed a historical backtesting framework.</li>
                        <li>Implemented REST APIs for real-time signal delivery.</li>
                    </ul>
                </ResumeBlock>

                {/* Internship */}
                <ResumeBlock title="Internship Experience">
                    <h6>Software Debugger – Project Trainee, Zoho Corporation <span>Jul 2025</span></h6>
                    <ul>
                        <li>Worked with the Software Debugging team on enterprise-level applications.</li>
                        <li>Analyzed log files to identify root causes of failures.</li>
                        <li>Assisted in debugging production issues and tracking abnormal behavior.</li>
                        <li>Gained exposure to large-scale systems and professional debugging workflows.</li>
                    </ul>

                    <h6 className="mt-3">Software Developer Intern – BITS Infinity <span>2025</span></h6>
                    <ul>
                        <li>Built a SaaS-based logistics platform for shipment tracking and management.</li>
                        <li>Implemented core modules including order processing and delivery workflows.</li>
                        <li>Designed real-time dashboards for operational visibility.</li>
                        <li>Worked closely with the team following Agile development practices.</li>
                        <li><strong>Technologies:</strong> Node.js, MySQL, React.js</li>
                    </ul>
                </ResumeBlock>

                {/* Education */}
                <ResumeBlock title="Education">
                    <p><strong>Master of Science in Computer Science (Pursuing)</strong> — 2024 – Present<br />
                        Sri Ramakrishna College of Arts and Science, India
                    </p>

                    <p><strong>Bachelor of Science in Computer Science</strong> — 2021 – 2024<br />
                        Gandhigram University, India
                    </p>
                </ResumeBlock>

                {/* Skills */}
                <ResumeBlock title="Technical Skills">
                    <ul className="two-column">
                        <li><strong>Languages:</strong> C++, Python, Java, JavaScript, PHP, PostgreSQL</li>
                        <li><strong>Frameworks & Tools:</strong> React, Node.js, Git, CMake, Selenium (Java)</li>
                        <li><strong>Concepts:</strong> OOP, Data Structures, Algorithms, Multithreading, Deep Learning</li>
                    </ul>
                </ResumeBlock>

                {/* Declaration */}
                <ResumeBlock title="Declaration">
                    <p>
                        I hereby declare that the information furnished above is true to the best
                        of my knowledge and belief.
                    </p>
                </ResumeBlock>

            </Container>
        </section>
    );
};

const ResumeBlock = ({ title, children }) => (
    <div className="resume-block">
        <h4>{title}</h4>
        {children}
    </div>
);

export default ResumeMain;
