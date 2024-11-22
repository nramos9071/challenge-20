import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <div>
                <h1>Contact</h1>
            </div>
            <div className="form-container">
                <label for="name">Name:</label>
                <input type="text" id="name"></input>
                <label for="email">Email:</label>
                <input type="text" id="email"></input>
                <label for="message">Message:</label>
                <input type="textarea" id="message"></input>
                <button id="submit">Submit</button>
            </div>
        </div>
    );
}