import React from "react";
import "./Gifts.css";
import Logo2 from "../../images/logo/logo2.png";
import ImageGifts from "../../images/gifts/gift.png";

const Gifts = () => {
  return (
    <section>
      <div className="gift-container">
        <div className="logo-gift">
          <a href="#">
            <img src={Logo2} alt="LogoArrivals" />
            <p className="gift">Gifts</p>
          </a>
          <div className="see-more">
            <button>See More</button>
          </div>
        </div>
        <div className="card-gift-container">
          <div className="cardGifts" style={{ width: "18rem" }}>
            <img src={ImageGifts} className="card-img-gift" alt="Gifts" />
            <div className="gift-icon">
              <a href="#" className="btn">
                <i className="bi bi-cart"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card-gift-container">
          <div className="cardGifts" style={{ width: "18rem" }}>
            <img src={ImageGifts} className="card-img-gift" alt="Gifts" />
            <div className="gift-icon">
              <a href="#" className="btn">
                <i className="bi bi-cart"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card-gift-container">
          <div className="cardGifts" style={{ width: "18rem" }}>
            <img src={ImageGifts} className="card-img-gift" alt="Gifts" />
            <div className="gift-icon">
              <a href="#" className="btn">
                <i className="bi bi-cart"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card-gift-container">
          <div className="cardGifts" style={{ width: "18rem" }}>
            <img src={ImageGifts} className="card-img-gift" alt="Gifts" />
            <div className="gift-icon">
              <a href="#" className="btn">
                <i className="bi bi-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
