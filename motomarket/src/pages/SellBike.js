import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToSell, fetchUserDetails } from "../services/userService";
import "../styles/SellBike.css";
import { toast } from "react-toastify";
import { loginUser } from "../redux/loginUserSlice";

const SellBike = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [bike, setBike] = useState({
    brandName: "",
    model: "",
    year: "",
    price: "",
    km: "",
    description: "",
  });

  const handleChange = (e) => {
    setBike({ ...bike, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = user.id;

    const response = await addToSell(userId, bike);
    if (response.success) {
      toast.success(
        "Thank You For Showing Interest To Sell Your Bike To Mohan MotorSports, Your Interest is Noted. You can Bring Your To Our Shop for Further Procedures",
        { position: "top-right" }
      );
      const updatedUser = await fetchUserDetails();
      if (updatedUser) {
        dispatch(loginUser(updatedUser));
      }
      setBike({ brandName: "", model: "", year: "", price: "", km: "", description: "", image: "" });
    } else {
      toast.error(
        "Small Technical Error, Sorry For the Inconvience. But You Can Bring Your To Our Shop For To Proceed Further",
        { position: "top-right" }
      );
    }
  };

  

  return (
    <div className="sell-bike-container">
      <h2>Sell Your Bike</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="text"
            name="brandName"
            placeholder="Brand Name"
            value={bike.brandName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={bike.model}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={bike.year}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={bike.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="km"
            placeholder="KM Driven"
            value={bike.km}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="description"
            placeholder="Description"
            value={bike.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          List Bike for Sale
        </button>
      </form>
    </div>
  );
};

export default SellBike;
