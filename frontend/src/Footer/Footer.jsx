import React from 'react';

import "../CSS/Footer.css";
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row">

          {/* Brand & About */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Arnav Sirohi</h5>
            <p>
              Passionate full-stack developer crafting digital experiences with clean code & creative design.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Links</h5>
            <p><a href="#home" className="text-white text-decoration-none">Home</a></p>
            <p><a href="#about" className="text-white text-decoration-none">About</a></p>
            <p><a href="#projects" className="text-white text-decoration-none">Projects</a></p>
            <p><a href="#contact" className="text-white text-decoration-none">Contact</a></p>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-envelope me-3"></i> arnavsirohi@gmail.com</p>
            <p><i className="fas fa-map-marker-alt me-3"></i> New Delhi, India</p>
          </div>

          {/* Social Media */}
          <div className="d-flex gap-3">
            <a href=" https://instagram.com/acear_c" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/arnavsirohi" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/919560526332" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
              <FaWhatsapp />
            </a>
          </div>


        </div>

        <hr className="my-3 border-light" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p>© 2025 Arnav Sirohi. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p>Made with ❤️ by Arnav</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
