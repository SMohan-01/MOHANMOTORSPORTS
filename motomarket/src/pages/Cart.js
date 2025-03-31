import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import "../styles/Cart.css";
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.myProducts);
  const totalAmount = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      {cartItems.length > 0 ? (
        <div className="cart-wrapper">
          <h3 className="cart-title">My Cart</h3>
          <div className="cart-content">
            <div className="cart-header">
              <p className="cart-header-title">PRODUCTS</p>
              <div className="cart-header-details">
                <p>Price</p>
                <p>Remove</p>
              </div>
            </div>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
                    <button
                      className="cart-remove-button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <h1>No Items in Cart</h1>
        </div>
      )}
      <div className="cart-footer">
        <h3>CART TOTAL</h3>
        <div className="cart-total-items">
          <p>
            <strong>Items in Cart:</strong>
          </p>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span>
            <p className="FirstText">Total Price :</p>{" "}
          </span>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>
        <button onClick={() => navigate("/checkout")}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
