import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div>
               <div className="py-2 text-center footer-style">© Amit Ashok Gupta &nbsp;{new Date().getFullYear()}</div>
        </div>
    );
};

export default Footer;
