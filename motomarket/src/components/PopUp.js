import React from "react";
import "../styles/PopUp.css";
const PopUp = ({ isPopUpOpen, setIsPopUpOpen, children }) => {
  if (!isPopUpOpen) {
    return null;
  }
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button
          className="popup-close-btn"
          onClick={() => {
            setIsPopUpOpen(false);
          }}
        >
          &times;
        </button>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
};

export default PopUp;
