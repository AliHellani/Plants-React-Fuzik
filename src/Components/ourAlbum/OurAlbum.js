import React, { useState } from "react";
import "./OurAlbum.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Logo2 from "../../images/logo/logo2.png";
import FlowerCenter from "../../images/ourAlbum/FlowerCenter.png";
import Rose from "../../images/ourAlbum/Rose.png";
import BouquetFlower from "../../images/ourAlbum/bouquetFlower.jpg";
import Flower from "../../images/ourAlbum/Flower.png";
import PinkFlower from "../../images/ourAlbum/pinkFlower.jpg";

const images = [
  { src: Flower, size: "small-flower" },
  { src: Rose, size: "medium-flower" },
  { src: FlowerCenter, size: "flower-center" },
  { src: PinkFlower, size: "medium-flower" },
  { src: BouquetFlower, size: "small-flower" },
];

const OurAlbum = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="album-container">
      <div className="our-album">
        <img src={Logo2} alt="Our Album Logo" className="album-logo" />
        <p className="ourAlbum-title">Our Album</p>
      </div>
      <div className="image-gallery">
        <FaArrowAltCircleLeft
          className="gallery-arrow left-arrow"
          onClick={prevSlide}
        />
        {images.map((image, index) => {
          let className = image.size;
          if (index === currentIndex) {
            className = "flower-center";
          } else if (
            index === (currentIndex - 1 + images.length) % images.length ||
            index === (currentIndex + 1) % images.length
          ) {
            className = "medium-flower";
          } else {
            className = "small-flower";
          }
          return (
            <img
              key={index}
              src={image.src}
              alt=""
              className={`${className} ${
                index === currentIndex ? "active" : ""
              }`}
            />
          );
        })}
        <FaArrowAltCircleRight
          className="gallery-arrow right-arrow"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default OurAlbum;
