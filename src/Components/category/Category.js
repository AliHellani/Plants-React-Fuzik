import React from "react";
import "./Category.css";
import Logo2 from "../../images/logo/logo2.png";
import Product from "../../images/product/image.png";

const Category = () => {
  return (
    <section>
      <div className="category-container">
        <div className="logo-category">
          <a href="#">
            <img src={Logo2} alt="LogoCategory" />
            <p className="category">Category</p>
          </a>
          <div className="see-more">
            <button>See More</button>
          </div>
        </div>
        <div className="card-container">
          <div className="cardCategory" style={{ width: "18rem" }}>
            <img src={Product} className="card-img-top" alt="Product" />
            <div className="card-body">
              <div className="card-title-container">
                <h5 className="card-title">Card title</h5>
                <p className="card-price">$25.00</p>
              </div>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="cart-icon-container">
                <a href="#" className="btn">
                  <i className="bi bi-cart"></i> Add to Cart
                </a>
              </div>
            </div>
          </div>

          <div className="cardCategory" style={{ width: "18rem" }}>
            <img src={Product} className="card-img-top" alt="Product" />
            <div className="card-body">
              <div className="card-title-container">
                <h5 className="card-title">Card title</h5>
                <p className="card-price">$25.00</p>
              </div>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="cart-icon-container">
                <a href="#" className="btn">
                  <i className="bi bi-cart"></i> Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="cardCategory" style={{ width: "18rem" }}>
            <img src={Product} className="card-img-top" alt="Product" />
            <div className="card-body">
              <div className="card-title-container">
                <h5 className="card-title">Card title</h5>
                <p className="card-price">$25.00</p>
              </div>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="cart-icon-container">
                <a href="#" className="btn">
                  <i className="bi bi-cart"></i> Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="cardCategory" style={{ width: "18rem" }}>
            <img src={Product} className="card-img-top" alt="Product" />
            <div className="card-body">
              <div className="card-title-container">
                <h5 className="card-title">Card title</h5>
                <p className="card-price">$25.00</p>
              </div>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="cart-icon-container">
                <a href="#" className="btn">
                  <i className="bi bi-cart"></i> Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
