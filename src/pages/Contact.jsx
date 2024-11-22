import React from 'react';

export default function Contact() {
    return (
        <div>
            <div>
                <h1>Contact</h1>
            </div>
            <div>
                <label for="name">Name:</label>
                <form type="text" id="name"></form>
                <label for="email">Email:</label>
                <form type="text" id="email"></form>
                <label for="message">Message:</label>
                <form type="textarea" id="message"></form>
                <button id="submit">Submit</button>
            </div>
        </div>
    );
}