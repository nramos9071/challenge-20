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
                        <img src="../../public/images/Project1.png" alt="Project 1" />
                    </a>
                    <p>A project designed to allow users to connect music with their local weather.</p>
                </section>
                <section id="projects">
                    <h3>Project 2</h3>
                    <a href="https://challenge-14-g18m.onrender.com">
                        <img src="../../public/images/Project2.png" alt="Project 2" />
                    </a>
                    <p>A project that allows fellow coders to post questions and discuss tech issues. </p>
                </section>
            </div>
            <div id="project-container1">
                <section id="projects">
                    <h3>Project 3</h3>
                    <a href="https://github.com/nramos9071/challenge-5">
                        <img src="../../public/images/Project3.png" alt="Project 3" />
                    </a>
                    <p>A project that allows users to create tasks and keep their tasks organized. </p>
                </section>
                <section id="projects">
                    <h3>Project 4</h3>
                    <a href="https://nramos9071.github.io/blog-website/">
                        <img src="../../public/images/Project4.png" alt="Project 4" />
                    </a>
                    <p>A project designed to allow Dnd players to post questions and discuss dnd.</p>
                </section>
            </div>
            <div id="project-container1">
                <section id="projects">
                    <h3>Project 5</h3>
                    <a href="https://note-taker-xhjt.onrender.com/">
                        <img src="../../public/images/Project5.png" alt="Project 3" />
                    </a>
                    <p>A project designed to allow users to make and keep track of notes. </p>
                </section>
                <section id="projects">
                    <h3>Project 6</h3>
                    <a href="https://nramos9071.github.io/challenge-6/">
                        <img src="../../public/images/Project6.png" alt="Project 4" />
                    </a>
                    <p>An app used to allow users to check the weather in a certain area. </p>
                </section>
            </div>
        </div>
    )

}

