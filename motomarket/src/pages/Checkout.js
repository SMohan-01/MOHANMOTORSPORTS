import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../styles/Checkout.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrders }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("cashondelivery");

  const cartItems = useSelector((state) => state.cart.myProducts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      product: cartItems,
      orderNumber: Math.floor(100 + Math.random() * 900),
      shippingInformation: user.address,
      amount: totalPrice,
    };
    setOrders(newOrder);
    navigate("/your-order");
  };
  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <h3 className="cart-title">Checkout</h3>
        <div className="cart-content">
          <div className="billing-section">
            <div className="billing-header">
              <h3>Billing Information</h3>
              {billingToggle ? (
                <FaAngleDown
                  onClick={() => {
                    setBillingToggle(!billingToggle);
                  }}
                />
              ) : (
                <FaAngleUp
                  onClick={() => {
                    setBillingToggle(!billingToggle);
                  }}
                />
              )}
            </div>

            <div className={`form-group ${billingToggle ? "" : "hidden"}`}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={user.name} readOnly />
            </div>

            <div className={`form-group ${billingToggle ? "" : "hidden"}`}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={user.email} readOnly />
            </div>

            <div className={`form-group ${billingToggle ? "" : "hidden"}`}>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" value={user.phoneNumber} readOnly />
            </div>
          </div>

          <div className="billing-section">
            <div className="billing-header">
              <h3>Shipping Information</h3>
              {shippingToggle ? (
                <FaAngleDown
                  onClick={() => {
                    setShippingToggle(!shippingToggle);
                  }}
                />
              ) : (
                <FaAngleUp
                  onClick={() => {
                    setShippingToggle(!shippingToggle);
                  }}
                />
              )}
            </div>

            <div className={`form-group ${shippingToggle ? "" : "hidden"}`}>
              <label htmlFor="address">DoorNo/Street</label>
              <input
                type="text"
                id="address"
                
              />
            </div>

            <div className={`form-group ${shippingToggle ? "" : "hidden"}`}>
              <label htmlFor="city">City</label>
              <input
                type="email"
                id="city"
                
              />
            </div>

            <div className={`form-group ${shippingToggle ? "" : "hidden"}`}>
              <label htmlFor="zipcode">Zip Code</label>
              <input
                type="text"
                id="zipcode"
                
              />
            </div>
          </div>
        </div>

        <div className="payment-container">
          <div className="payment-header">
            <h3>Payment Information</h3>
            {paymentToggle ? (
              <FaAngleDown
                onClick={() => {
                  setPaymentToggle(!paymentToggle);
                }}
              />
            ) : (
              <FaAngleUp
                onClick={() => {
                  setPaymentToggle(!paymentToggle);
                }}
              />
            )}
          </div>

          <div className={`payment-options ${paymentToggle ? "" : "hidden"}`}>
            <div className="form-group">
              <input
                type="radio"
                id="cashondelivery"
                checked={paymentMethod === "cashondelivery"}
                onChange={() => setPaymentMethod("cashondelivery")}
              />
              <label htmlFor="cashondelivery">Cash On Delivery</label>
            </div>

            <div className="form-group">
              <input
                type="radio"
                id="debitcard"
                checked={paymentMethod === "debitcard"}
                onChange={() => setPaymentMethod("debitcard")}
              />
              <label htmlFor="debitcard">Debit Card</label>
            </div>
            {paymentMethod === "debitcard" && (
              <div className="debit-card-info">
                <h3>Debit Card Information</h3>
                <div className="form-group">
                  <label htmlFor="cardnumber">CardNumber</label>
                  <input type="text" id="cardnumber" />
                </div>
                <div className="form-group">
                  <label htmlFor="cardholdername">Card Holder Name</label>
                  <input type="text" id="cardholdername" />
                </div>
                <div className="card-details">
                  <div className="form-group">
                    <label htmlFor="expirydate">Expiry Date</label>
                    <input type="text" id="expirydate" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="cart-footer">
        <h3>Place Your Order</h3>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt="" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="total-price">
            <span>Total Price</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <button
          className="place-order-btn"
          onClick={() => {
            handleOrder();
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
