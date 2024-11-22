import React from 'react';
import './Resume.css';

export default function Resume() {
    return (
        <div className="resume-container">
            <div>
                <h1>Resume</h1>
                <section>
                    <h2>Skills & Abilities</h2>
                </section>
            </div>
            <div>
                <div className="skills">
              
                <section id="skill-lists">
                    <h3>Technical Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </section>
                <section id="skill-lists">
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Communication</li>
                        <li>Problem Solving</li>
                        <li>Teamwork</li>
                        <li>Time Management</li>
                        <li>Adaptability</li>
                    </ul>
                </section>
                </div>
                <section>
                    <h2>Experience</h2>
                    <ul>
                        <li>August 2014-Present</li>
                            <ul>
                                <li>Account Manager I (Helpline) - USAA</li>
                                <ul>
                                    <li>Assisted members with their accounts and financial needs.</li>
                                    <li>Provided excellent customer service.</li>
                                    <li>Assisted co workers with technical questions with flood systems and how the flood product worked.</li>
                                </ul>
                            </ul>
                            <li>June 2009 - August 2014</li>
                            <ul>
                                <li>Loss Prevention - HEB</li>
                                <ul>
                                    <li>Identified potential risks to prevent further shrink.</li>
                                    <li>De-escalated high pressure situations.</li>
                                    <li>Offered execellent customer service.</li>
                                </ul>
                            </ul>

                    </ul>
                </section>
                <section>
                    <h2>Education</h2>
                    <h3>Degrees</h3>
                    <ul>
                      
                        <li>Texas A&M University - San Antonio</li>
                        <ul>
                            <li>Bachelor of Arts in History with a minor in Education.</li>
                        </ul>
                        <li>Palo Alto Community College</li>
                        <ul>
                            <li>Associates of Arts in Teaching.</li>
                        </ul>
                        <li>Palo Alto Community College</li>
                        <ul>
                            <li>Associates of Science.</li>
                        </ul>
                    </ul>
                    <h3>Certifications</h3>
                    <ul>
                        <li>Full Stack Developer Certification - University of Texas - Austin</li>  
                        <ul>
                            <li>Full Stack Coding Bootcamp</li>
                        </ul>
                    </ul>
                </section>

            </div>
        </div>
    );
}