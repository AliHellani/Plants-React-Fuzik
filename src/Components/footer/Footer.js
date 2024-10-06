import React from "react";
import Logo from "../../images/logo/logo.png";
import "./Footer.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import Facebook from "../../images/footer/facebook.png";
import Instagram from "../../images/footer/instagram.png";
import Linkedin from "../../images/footer/linkedin.png";
import Whatsapp from "../../images/footer/whatsapp.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={Logo} alt="Logo" className="footer-logo" />
        <div className="contact-info">
          <div className="contact-item">
            <MdOutlineAlternateEmail size={20} className="icon" />
            <span>email@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhone size={20} className="icon" />
            <span>+123 456 7890</span>
          </div>
          <div className="contact-item">
            <FaLocationDot size={20} className="icon" />
            <span>123 Street, City, Country</span>
          </div>
        </div>
        <div className="social-media">
          <img src={Instagram} alt="Instagram" />
          <img src={Facebook} alt="Facebook" />
          <img src={Whatsapp} alt="Whatsapp" />
          <img src={Linkedin} alt="LinkedIn" />
        </div>
        <p className="stay-tuned">Stay tuned!!</p>
      </div>
      <div className="footer-right">
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
