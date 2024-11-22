import React, { useEffect } from 'react';
import './Contact.css';
import '../assets/js/contact.js';

export default function Contact() {
        useEffect(() => {
            const submitButton = document.querySelector('.submit-button');
    
            if (submitButton) {
                submitButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    console.log('Submit button clicked.');
                    const name = document.querySelector('#name').value.trim();
                    const email = document.querySelector('#email').value.trim();
                    const message = document.querySelector('#message').value.trim();
    
                    if (!name || !email || !message) {
                        alert('Please fill in all fields.');
                        return;
                    }
    
                    console.log('Name:', name);
                    console.log('Email:', email);
                    console.log('Message:', message);
                });
            }
        }, []);

    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="form-container">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" />
                <label htmlFor="message">Message:</label>
                <textarea id="message"></textarea>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    );
}