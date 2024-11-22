import React from 'react';
import './Portfolio.css';

export default function Portfolio() {

    return (
        <div>
            <h1>Portfolio</h1>
            <div id="project-container1">
                <section id="projects">
                    <h3>Project 1</h3>
                   
                    <a href="https://nramos9071.github.io/group-project-1/">
                        <img src="../src/assets/images/Project1.png" alt="Project 1" />
                    </a>
                    <p>Project 1 Description</p>
                </section>
                <section id="projects">
                    <h3>Project 2</h3>
                    <a href="https://challenge-14-g18m.onrender.com">
                        <img src="../src/assets/images/Project2.png" alt="Project 2" />
                    </a>
                    <p>Project 2 Description</p>
                </section>
            </div>
            <div id="project-container1">
                <section id="projects">
                    <h3>Project 3</h3>
                    <a href="https://github.com/nramos9071/challenge-5">
                        <img src="../src/assets/images/Project3.png" alt="Project 3" />
                    </a>
                    <p>Project 3 Description</p>
                </section>
                <section id="projects">
                    <h3>Project 4</h3>
                    <a href="https://nramos9071.github.io/blog-website/">
                        <img src="../src/assets/images/Project4.png" alt="Project 4" />
                    </a>
                    <p>Project 4 Description</p>
                </section>
            </div>
        </div>
    )

}

