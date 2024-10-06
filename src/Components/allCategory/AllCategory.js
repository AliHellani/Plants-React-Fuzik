import React from "react";
import "./AllCategory.css";
import Logo2 from "../../images/logo/logo2.png";
import Arrivals11 from "../../images/arrivals/arrivals11.png";

const AllCategory = () => {
  return (
    <section className="section-all-category">
      <div className="all-category-container">
        <div className="logo-all-category">
          <a href="#">
            <div className="logo-text">
              <img src={Logo2} alt="Logo" />
              <p className="all-category">Explore all</p>
            </div>
            <div className="sub-text">
              <p className="all-category2">Plants</p>
              <p className="all-category3">Categories</p>
            </div>
          </a>
        </div>

        <div className="btn-all-category">
          <button>View All</button>
        </div>

        <div className="card-allCategory-container">
          <div className="card">
            <img
              src={Arrivals11}
              className="card-img-allCategory"
              alt="All Category"
            />
            <label className="allCategory">Green Plants</label>
          </div>
          <div className="card">
            <img
              src={Arrivals11}
              className="card-img-allCategory"
              alt="All Category"
            />
            <label className="allCategory">Flower Plants</label>
          </div>
          <div className="card">
            <img
              src={Arrivals11}
              className="card-img-allCategory"
              alt="All Category"
            />
            <label className="allCategory">Cacti</label>
          </div>
          <div className="card">
            <img
              src={Arrivals11}
              className="card-img-allCategory"
              alt="All Category"
            />
            <label className="allCategory">Hanging Plants</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCategory;
