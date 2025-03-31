import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import Logo from "../assets/images/Logo.webp";
import PopUp from "./PopUp";
import Login from "./Login";
import Register from "./Register";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../redux/loginUserSlice";

const Navigation = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const openRegister = () => {
    setIsLogin(false);
    setIsPopUpOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsPopUpOpen(true);
  };

  const handleLogin = (loggedInUser) => {
    dispatch(loginUser(loggedInUser));
    setIsPopUpOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Mohan MotorSports Logo" />
        <Link to={"/"} className="shop-name">
          <span className="shop-name-main">MOHAN</span>
          <span className="shop-name-sub">MOTORSPORTS</span>
        </Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/sellbike">Sell</Link>
        </li>
        <li>
          <Link to="/services-modifications">Services & Modifications</Link>
        </li>
        <li>
          <Link to="/helmets">Helmets</Link>
        </li>
        <li>
          <Link to="mycart">MyCart</Link>
        </li>
      </ul>
      {!user ? (
        <button
          className="login"
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          Login
        </button>
      ) : (
        <div className="user-dropdown">
          <button
            className="user-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {" "}
            {user.name}
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      <PopUp isPopUpOpen={isPopUpOpen} setIsPopUpOpen={setIsPopUpOpen}>
        {isLogin ? (
          <Login openRegister={openRegister} loginSuccess={handleLogin} />
        ) : (
          <Register openLogin={openLogin} setIsPopUpOpen={setIsPopUpOpen} />
        )}
      </PopUp>
    </nav>
  );
};

export default Navigation;
