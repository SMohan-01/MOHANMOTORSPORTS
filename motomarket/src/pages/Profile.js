import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/Profile.css";
import { fetchUserDetails } from "../services/userService";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [selectedSection, setSelectedSection] = useState("profile");

  const [userProfile, setUserprofile] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      if (user?.id) {
        const userData = await fetchUserDetails(user.id);
        if (userData) setUserprofile(userData);
      }
    };

    getUserData();
  }, [user]);

  const renderContent = () => {
    switch (selectedSection) {
      case "profile":
        return (
          <div>
            <h2>My Profile</h2>
            <div className="profile-info">
              <p>
                <strong>Name:</strong> {user?.name}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Phone:</strong> {user?.phoneNumber}
              </p>
              <p>
                <strong>Address:</strong> {user?.address?.doorNo},{" "}
                {user?.address?.street}, {user?.address?.city},{" "}
                {user?.address?.pincode}
              </p>
            </div>
          </div>
        );
      case "favorites":
        return (
          <div>
            <h2>Favorites</h2>
            {userProfile?.interest?.length > 0 ? (
              <div className="favorites-list">
                {userProfile.interest.map((item) => (
                  <div key={item.id} className="favorites-card">
                    <img
                      src={item.image}
                      alt={item.model}
                      className="bike-image"
                    />
                    <div>
                      <h4>
                        {item.brandName} {item.model}
                      </h4>
                      <p>
                        <strong>Year:</strong> {item.year}
                      </p>
                      <p>
                        <strong>Description:</strong> {item.description}
                      </p>
                      <p>
                        <strong>Price:</strong> ₹{item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No favorite bikes added yet.</p>
            )}
          </div>
        );
      case "selledBikes":
        return (
          <div>
            <h2>Selled Bikes</h2>
            {userProfile?.sell?.length > 0 ? (
              <div className="selled-bikes-list">
                {userProfile.sell.map((bike, index) => (
                  <div key={index} className="selled-bike-card">
                    <h4>
                      {bike.brandName} {bike.model}
                    </h4>
                    <p>
                      <strong>Year:</strong> {bike.year}
                    </p>
                    <p>
                      <strong>Price Sold:</strong> ₹{bike.price}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No bikes sold yet.</p>
            )}
          </div>
        );
      case "services":
        return (
          <div>
            <h2>My Services</h2>
            {userProfile?.servicesAndModifications?.length > 0 ? (
              <div className="services-list">
                {userProfile.servicesAndModifications.map((service, index) => (
                  <div key={index} className="service-card">
                    <h4>{service.bikeName}</h4>
                    <p>
                      <strong>Service Type:</strong> {service.serviceType}
                    </p>
                    <p>
                      <strong>Service Date:</strong>{" "}
                      {new Date(service.serviceDateTime).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No services booked yet.</p>
            )}
          </div>
        );
      case "purchases":
        return (
          <div>
            <h2>My Purchases</h2>
            <div className="outer">
              {userProfile?.myPurchase?.length > 0 ? (
                userProfile.myPurchase.map((purchase, index) => (
                  <div key={index} className="purchase-card">
                    <h4>Products Purchased:</h4>
                    <div className="product-list">
                      {purchase.product.map((item, idx) => (
                        <div key={idx} className="product-card">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="product-image"
                          />
                          <div>
                            <p>
                              <strong>Name:</strong> {item.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <h5>Order Number: {purchase.orderNumber}</h5>
                    <h4>Total Price: ₹{purchase.amount}</h4>
                  </div>
                ))
              ) : (
                <p>No purchases made yet.</p>
              )}
            </div>
          </div>
        );
      default:
        return <p>Select a section to view details.</p>;
    }
  };

  return (
    <div className="profile-container">
      {/* Left Sidebar (Navigation) */}
      <div className="profile-sidebar">
        <h3 onClick={() => setSelectedSection("profile")}>My Profile</h3>
        <h3 onClick={() => setSelectedSection("favorites")}>Favorites</h3>
        <h3 onClick={() => setSelectedSection("selledBikes")}>Selled Bikes</h3>
        <h3 onClick={() => setSelectedSection("services")}>My Services</h3>
        <h3 onClick={() => setSelectedSection("purchases")}>My Purchases</h3>
      </div>

      {/* Right Side - Dynamic Content */}
      <div className="profile-content">{renderContent()}</div>
    </div>
  );
};

export default Profile;
