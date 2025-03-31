import React from "react";
import { useSelector } from "react-redux";
import "../styles/HelmetPage.css";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Hemet = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, helmet) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(helmet));
  };
  const fetchedHelmets = useSelector((state) => state.helmets.helmet);
  return (
    <div className="helmets-page">
      <h1 className="page-title">Premium Helmets</h1>
      <p className="page-description">
        Browse our collection of high-performance helmets.
      </p>

      <div className="helmets-grid">
        {fetchedHelmets.map((helmet) => (
          <div key={helmet.id} className="helmet-card">
            <img
              src={helmet.image}
              alt={helmet.name}
              className="helmet-image"
            />
            <h3 className="helmet-name">{helmet.name}</h3>
            <p className="helmet-description">{helmet.description}</p>
            <p className="helmet-price">₹{helmet.price}</p>

            <button
              onClick={(e) => handleAddToCart(e, helmet)}
              className="helmet-button"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hemet;
