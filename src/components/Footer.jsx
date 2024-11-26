import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023 Nicholas Ramos. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="https://github.com/nramos9071" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="mailto:nicholas.ramos@example.com">Email</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;