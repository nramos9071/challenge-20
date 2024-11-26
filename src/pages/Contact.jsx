import React, { useEffect } from 'react';
import './Contact.css';

export default function Contact() {
    useEffect(() => {
        const submitButton = document.querySelector('.submit-button');
        console.log('Submit button:', submitButton);

        if (submitButton) {
            submitButton.addEventListener('click', (event) => {
                event.preventDefault();
                console.log('Submit button clicked.');
                const name = document.querySelector('#name').value.trim();
                const email = document.querySelector('#email').value.trim();
                const message = document.querySelector('#message').value.trim();

                console.log('Name:', name);
                console.log('Email:', email);
                console.log('Message:', message);

                if (!name || !email || !message) {
                    console.log('One or more fields are empty.');
                    alert('Please fill in all fields.');
                    return;
                } else {
                    console.log('All fields are filled.');
                    alert('Thank you for your message! It was received and I will get back to you as soon as possible.');
                }
            });
        } else {
            console.error('Submit button not found');
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