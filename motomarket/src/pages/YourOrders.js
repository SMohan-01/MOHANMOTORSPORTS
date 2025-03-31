import React, { useEffect, useState } from "react";
import "../styles/YourOrders.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToMyPurchase, fetchUserDetails } from "../services/userService";
import { loginUser } from "../redux/loginUserSlice";

const YourOrders = ({ orders }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const updatePurchase = async () => {
      if (user && orders && !orderPlaced) {
        const response = await addToMyPurchase(user.id, orders);
        if (response.success) {
          setOrderPlaced(true);
  
          
          const updatedUser = await fetchUserDetails(user.id);
          if (updatedUser) {
            dispatch(loginUser(updatedUser)); 
          }
        }
      }
    };
  
    updatePurchase();
  }, [user, orders, orderPlaced]);

  return (
    <div className="your-orders-container">
      <h3>Thank You For Your Order</h3>
      {<h4>Your Order has been placed..</h4>}
      {<p>Order Number : {orders.orderNumber}</p>}
      <p>You can Expect To Recieve Your Helmet Safe And Secure in 2-3 Days</p>
      <p>In case if you can any queries, Feel free to contact us.</p>

      <div className="order-products">
        <h4>Products</h4>
        {orders.product.map((item) => (
          <div>
            {item.name}
            {item.price}
          </div>
        ))}
      </div>
      <div>
        <h4>Total Price : ₹{orders.amount}</h4>
      </div>
      <div className="order-buttons">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="shop-btn"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default YourOrders;
