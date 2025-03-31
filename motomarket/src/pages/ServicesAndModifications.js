import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "../styles/ServiceAndModificationPage.css";
import { addToServices, fetchUserDetails } from "../services/userService";
import { loginUser } from "../redux/loginUserSlice";

const ServicesAndModifications = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [service, setService] = useState({
    serviceType: "General Service",
    bikeName: "",
    serviceDateTime: "",
  });

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = user.id;

    const response = await addToServices(userId, user, service);
    if (response.success) {
      toast.success("Your Service Appointment Slot is Booked", {
        position: "top-right",
      });
      const updatedUser = await fetchUserDetails();
      if (updatedUser) {
        dispatch(loginUser(updatedUser));
      }
      setService({
        serviceType: "General Service",
        bikeName: "",
        serviceDateTime: "",
      });
    } else {
      toast.error(
        "Small Technical Error, Sorry For the Inconvience. But You Can Bring Your To Our Shop For To Proceed Further",
        { position: "top-right" }
      );
    }
  };
  return (
    <div>
      <div className="services-container">
        <h2>List Your Service or Modification</h2>
        <form onSubmit={handleSubmit} className="services-form">
          <div className="form-group">
            <label>Service Type:</label>
            <select
              name="serviceType"
              value={service.serviceType}
              onChange={handleChange}
              required
            >
              <option value="General Service">General Service</option>
              <option value="Manual Service/Modification">
                Manual Service/Modification
              </option>
            </select>
          </div>

         
          <div className="form-group">
            <label>Bike Name:</label>
            <input
              type="text"
              name="bikeName"
              placeholder="Enter Bike Name"
              value={service.bikeName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Service Date & Time:</label>
            <input
              type="datetime-local"
              name="serviceDateTime"
              value={service.serviceDateTime}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="services-btn">
            Book Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServicesAndModifications;
