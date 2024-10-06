import React, { useState } from "react";
import "./AboutUs.css";
import Logo2 from "../../images/logo/logo2.png";
import Tulip from "../../images/aboutUs/tulip.png";
import Arrivals11 from "../../images/aboutUs/arrivals11.png";
import Arrivals33 from "../../images/aboutUs/arrivals33.png";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const AboutUs = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [Tulip, Arrivals11, Arrivals33];

  const nextPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prevPhoto) =>
      prevPhoto === 0 ? photos.length - 1 : prevPhoto - 1
    );
  };

  return (
    <section className="aboutUs">
      <div className="aboutUs-container">
        <div className="aboutUs-photo-section">
          <button className="photo-nav-btn" onClick={prevPhoto}>
            <FaArrowAltCircleLeft size={30} />
          </button>
          <img
            src={photos[currentPhoto]}
            alt="About Us"
            className="aboutUs-photo"
          />
          <button className="photo-nav-btn" onClick={nextPhoto}>
            <FaArrowAltCircleRight size={30} />
          </button>
        </div>

        <div className="aboutUs-text-section">
          <div className="aboutUs-logo-container">
            <img src={Logo2} alt="Logo" className="aboutUs-logo" />
            <p className="aboutUs-title">About Us</p>
          </div>
          <p className="aboutUs-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
