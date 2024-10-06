import React from "react";
import "./Arrivals.css";
import Logo2 from "../../images/logo/logo2.png";
import Arrivals11 from "../../images/arrivals/arrivals11.png";
import Arrivals22 from "../../images/arrivals/arrivals22.png";
import Arrivals33 from "../../images/arrivals/arrivals33.png";
import Arrivals44 from "../../images/arrivals/arrivals44.png";

const Arrivals = () => {
  return (
    <section>
      <div className="arrivals-container">
        <div className="logo-arrivals">
          <a href="#">
            <img src={Logo2} alt="LogoArrivals" />
            <p className="arrivals">New Arrivals</p>
          </a>
        </div>

        <div className="card-arrivals-container">
          <div className="cardArrivals" style={{ width: "18rem" }}>
            <img src={Arrivals11} className="card-img-top" alt="Arrivals" />
            <div className="card-body">
              <h5 className="card-title-arrivals">Lorem Ipsum</h5>
              <p className="card-text-arrivals">Lorem Ipsum is simply dummy.</p>
              <div className="cart-icon-arrivals">
                <p className="card-price-arrivals">$25</p>
                <a href="#" className="btn">
                  <i className="bi bi-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card-arrivals-container">
          <div className="cardArrivals" style={{ width: "18rem" }}>
            <img src={Arrivals22} className="card-img-top" alt="Arrivals" />
            <div className="card-body">
              <h5 className="card-title-arrivals">Lorem Ipsum</h5>
              <p className="card-text-arrivals">Lorem Ipsum is simply dummy.</p>
              <div className="cart-icon-arrivals">
                <p className="card-price-arrivals">$25</p>
                <a href="#" className="btn">
                  <i className="bi bi-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card-arrivals-container">
          <div className="cardArrivals" style={{ width: "18rem" }}>
            <img src={Arrivals33} className="card-img-top" alt="Arrivals" />
            <div className="card-body">
              <h5 className="card-title-arrivals">Lorem Ipsum</h5>
              <p className="card-text-arrivals">Lorem Ipsum is simply dummy.</p>
              <div className="cart-icon-arrivals">
                <p className="card-price-arrivals">$25</p>
                <a href="#" className="btn ">
                  <i className="bi bi-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card-arrivals-container">
          <div className="cardArrivals" style={{ width: "18rem" }}>
            <img src={Arrivals44} className="card-img-top" alt="Arrivals" />
            <div className="card-body">
              <h5 className="card-title-arrivals">Lorem Ipsum</h5>
              <p className="card-text-arrivals">Lorem Ipsum is simply dummy.</p>
              <div className="cart-icon-arrivals">
                <p className="card-price-arrivals">$25</p>
                <a href="#" className="btn ">
                  <i className="bi bi-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
