// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6 mt-12">
    <div className="container mx-auto px-4 text-center">
      <p className="text-lg mb-4">Connect with me</p>
      <div className="flex justify-center space-x-4 mb-4">
        {/* <a href="https://www.linkedin.com/in/gokulakrishnan-s-30250b305/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-teal-500 hover:text-white transition duration-300" />
        </a> */}
        <a href="https://api.whatsapp.com/send?phone=9487435083" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-teal-500 hover:text-white transition duration-300" />
        </a>
        {/* <a href="https://www.instagram.com/gokul_malar23/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl text-teal-500 hover:text-white transition duration-300" />
        </a> */}
        <a href="mailto:gokulakrish23gk@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-teal-500 hover:text-white transition duration-300" />
        </a>
      </div>
      <p className="text-sm">&copy; 2024 Your Name. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
