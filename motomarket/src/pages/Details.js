import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/Details.css";
import { addToInterest, fetchUserDetails } from "../services/userService";
import { toast } from "react-toastify";
import { loginUser } from "../redux/loginUserSlice";

const Details = () => {
  const { id } = useParams();
  const bikeInventory = useSelector((state) => state.inventory.bikes);
  const [bike, setBike] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user.user);
  const userId = parseInt(user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const bikedetails = bikeInventory.find((bike) => bike.id === parseInt(id));
    setBike(bikedetails);
  }, [id, bikeInventory]);

  const handleInterestClick = async () => {
    if (!bike) return;

    setLoading(true);
    const response = await addToInterest(userId, bike);

    if (response.success) {
      toast.success("Added To Your Favorites List", { position: "top-right" });
      const updatedUser = await fetchUserDetails();
      if (updatedUser) {
        dispatch(loginUser(updatedUser));
      }
    } else {
      toast.error("Failed To Add To Your Favorites List!", {
        position: "top-right",
      });
    }

    setLoading(false);
  };

  if (!bike) {
    return <div className="loading">Loading......</div>;
  }

  return (
    <div className="details-page">
      <h2 className="bike-details-heading">Bike Details</h2>
      <div className="details-container">
        <div className="details-card">
          <div className="image-section">
            <img src={bike.image} alt="" className="bike-image" />
          </div>
          <div className="info-section">
            <div className="brand-model">
              <h2 className="bike-brand">{bike.brandName}</h2>
              <h3 className="bike-model">{bike.model}</h3>
            </div>

            <h3 className="bike-year">Year : {bike.year}</h3>
            <p className="bike-description">{bike.description}</p>
            <p className="bike-price">Price : ₹{bike.price}</p>
            <p className="bike-km">KM Driven : {bike.Km}</p>
            <button
              className="add-to-cart"
              onClick={handleInterestClick}
              disabled={loading}
            >
              {loading ? "Adding..." : "I'm Interested"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
