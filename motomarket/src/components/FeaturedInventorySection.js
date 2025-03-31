import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/FeaturedInventory.css";
import { Link } from "react-router-dom";

const FeaturedInventory = () => {
  const bikes = useSelector((state) => state.inventory.bikes).slice(0, 8);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (startIndex + itemsPerPage < bikes.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="featured-inventory">
      <h2>
        <span>Featured </span> Inventory
      </h2>

      <div className="inventory-wrapper">
        <div className="bike-list">
          {bikes
            .slice(startIndex, startIndex + itemsPerPage)
            .map((bike, index) => (
              <div key={bike.id} className="bike-card">
                {/* Left button beside 1st bike */}
                {index === 0 && startIndex > 0 && (
                  <button className="nav-button left" onClick={handlePrev}>
                    &lt;
                  </button>
                )}

                <img src={bike.image} alt={bike.brandName} />
                <h3>
                  {bike.brandName} {bike.model}
                </h3>
                <p>Year: {bike.year}</p>

               
                {index === 3 && startIndex + itemsPerPage < bikes.length && (
                  <button className="nav-button right" onClick={handleNext}>
                    &gt;
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="view-all-container">
        <Link to="/inventory" className="view-all-btn">
          View All
        </Link>
      </div>
    </div>
  );
};

export default FeaturedInventory;
