import React from "react";
import "../styles/AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section">
     
      <div className="about-title">
        <span className="line"></span>
        <span className="featured-text">About</span>
        <span className="inventory-text">Our Company</span>
      </div>
      <p className="title">Welcome to Mohan MotorSports</p>

      {/* Description */}
      <p className="about-description">
        With more than 5 years in the business, Mohan Motorsports is here to
        bring you the finest examples of sports motorcycles. Our mission is
        straightforward: to help you find your dream vehicle while providing an
        unparalleled experience every step of the way. We prioritize
        relationships over transactions, creating a family-like atmosphere where
        every customer feels valued and understood, and we have built a loyal
        community of thousands of customers worldwide. If you’re looking for a
        reliable source, look no further. Welcome to the Mohan MotorSports
        Family.
      </p>
    </div>
  );
};

export default AboutSection;
