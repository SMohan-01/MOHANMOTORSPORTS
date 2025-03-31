import React from "react";
import "../styles/SellBikeSection.css";
import { useNavigate } from "react-router-dom";

const SellBikeSection = () => {
  const navigate = useNavigate();
  return (
    <div className="sell-your-bike">
      <h2 className="sell-title">
        <span className="line"></span>
        <span className="featured-text">Sell Your</span>
        <span className="inventory-text">Bike</span>
      </h2>
      <p className="sell-description">See how it works</p>

      <div className="sell-steps">
        <div className="step">
          <div className="step-circle">1</div>
          <h3>Tell Us About Your Vehicle</h3>
          <p>
            Submit your vehicle's information using the form below, and one of
            our buyers will contact you with an offer.
          </p>
        </div>
        <div className="step-line"></div>
        <div className="step">
          <div className="step-circle">2</div>
          <h3>Pick-Up or Deliver</h3>
          <p>
            Request a pickup, or if you're local, you can deliver the vehicle
            for a quicker selling process.
          </p>
        </div>
        <div className="step-line"></div>
        <div className="step">
          <div className="step-circle">3</div>
          <h3>GET PAID TOP DOLLAR</h3>
          <p>
            Same-day cash payment. Selling your vehicle has never been so easy!
          </p>
        </div>
      </div>

      <button
        className="sell-button"
        onClick={() => {
          navigate("/sellbike");
        }}
      >
        Start Selling Your Bike
      </button>
    </div>
  );
};

export default SellBikeSection;
