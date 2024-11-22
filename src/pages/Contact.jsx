import React from 'react';

export default function Contact() {
    return (
        <div>
            <div>
                <h1>Contact</h1>
            </div>
            <div>
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