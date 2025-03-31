import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInventory, setSearchBike } from "../redux/inventorySlice";
import "../styles/Inventory.css";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const bikeInventory = useSelector((state) => state.inventory.bikes);
  const filteredBikes = useSelector((state) => state.inventory.filteredData);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setInventory(bikeInventory));
  }, [dispatch, bikeInventory]);

  useEffect(() => {}, [dispatch]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    dispatch(setSearchBike(value));
  };

  return (
    <div className="inventory-container">
      <form onSubmit={handleSearch} className="search-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Bike"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </form>
      <h1>Featured Inventory</h1>
      <div className="bike-list">
        {(filteredBikes.length > 0 ? filteredBikes : bikeInventory).map(
          (bike) => (
            <div key={bike.id} className="bike-card">
              <h2 className="bike-name">
                {bike.brandName} {bike.model}
              </h2>
              <img src={bike.image} alt={`${bike.brandName} ${bike.model}`} />

              <div className="bike-info">
                <p className="bike-year">Year: {bike.year}</p>
                <p className="bike-km">KM: {bike.Km}</p>
              </div>

              <div className="bike-footer">
                <p className="bike-price">₹{bike.price}</p>
                <button
                  className="view-details"
                  onClick={() => {
                    navigate(`/inventory/${bike.id}`);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Inventory;
