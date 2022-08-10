import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="700px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-top">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              New Arrivals
            </h5>
            <p className="card-text lead fs-2">Check out now!</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
