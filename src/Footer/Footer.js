import React from 'react';
import './Footer.css';

const footer = (props) => {
    return (
        <footer className="footer">
            <p className="center-text">{props.footerText}</p>
        </footer>
    )
}

export default footer;