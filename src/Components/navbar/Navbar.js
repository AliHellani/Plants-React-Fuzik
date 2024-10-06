import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";
import Logo from "../../images/logo/logo.png";
import ImagePink from "../../images/background/imagePink.png";
import PlantHouseplant from "../../images/background/plant-houseplant.jpg";
import PottedCactus from "../../images/background/potted-cactus.jpg";

const Navbar = () => {
  useEffect(() => {
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    const showNextSlide = () => {
      currentIndex = (currentIndex + 1) % 3;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const intervalId = setInterval(showNextSlide, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      <div className="slider-container">
        <div className="slider">
          <div className="slide">
            <img src={ImagePink} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={PlantHouseplant} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={PottedCactus} alt="Slide 3" />
          </div>
        </div>

        <div className="static-text-container">
          <p className="living-life">Living Life</p>
          <p className="love-plants">Life in Love With Plants</p>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-top">
          <div className="logo">
            <a href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          <div className="search-container">
            <i className="bi bi-search"></i>
            <input type="text" id="search-input" placeholder="Search" />
            <label htmlFor="search-input">Search</label>
          </div>

          <div className="navbar-icons">
            <a href="#">
              <i className="bi bi-cart"></i>
            </a>
            <a href="#">
              <i className="bi bi-heart"></i>
            </a>
            <a href="#">
              <i className="bi bi-person"></i>
            </a>
          </div>
        </div>

        <ul className="category-list">
          <li>
            <a href="#">Green Plants</a>
          </li>
          <li>
            <a href="#">Flower Plants</a>
          </li>
          <li>
            <a href="#">Cacti</a>
          </li>
          <li>
            <a href="#">Hanging Plants</a>
          </li>
          <li>
            <a href="#">Tree Plants</a>
          </li>
          <li>
            <a href="#">Gifts</a>
          </li>
          <li>
            <a href="#">Subscription</a>
          </li>
          <li>
            <a href="#">Accessories and Pottery</a>
          </li>
          <li className="language-options">
            <a href="#">
              العربية <i className="bi bi-globe"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
