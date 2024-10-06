import React from "react";
import "./Reviews.css";
import logo from "../../images/logo/logo2.png";
import { FaRegUser } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Layer1 from "../../images/review/layer1.png";

const Reviews = () => {
  return (
    <section className="review">
      <div className="review-container">
        <div className="review-title">
          <img src={logo} alt="Logo" className="review-logo" />
          <p className="title">Reviews</p>
        </div>
        <div className="review-cards">
          <div className="review-card">
            <div className="user-card">
              <FaRegUser size={30} />
              <p className="username-reviews">User Name</p>
            </div>
            <p>
              This is the description of the review. It can be a few sentences
              long.
            </p>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <CiStar key={index} size={30} />
              ))}
              <span className="followers">3.5k</span>
            </div>
            <img src={Layer1} alt="Layer1" className="layer1" />
          </div>
          <div className="review-card">
            <div className="user-card">
              <FaRegUser size={30} />
              <p className="username-reviews">User Name</p>
            </div>
            <p>
              This is the description of the review. It can be a few sentences
              long.
            </p>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <CiStar key={index} size={30} />
              ))}
              <span className="followers">3.5k</span>
            </div>
            <img src={Layer1} alt="User" className="layer1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
