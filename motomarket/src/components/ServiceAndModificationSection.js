import React from "react";
import "../styles/ServiceAndModificationSection.css";
import { useNavigate } from "react-router-dom";
const ServiceAndModificationSection = () => {
  const navigate = useNavigate();
  const services = [
    "Service",
    "Performance",
    "Suspension",
    "Wheels",
    "Wraps",
    "PPF",
    "Ceramic Coating",
    "Carbon Fiber",
  ];
  return (
    <div className="service-modifications">
      <div className="service-title">
        <span className="line"></span>
        <span className="featured-text">Service &</span>
        <span className="inventory-text">Modifications</span>
      </div>

      <p className="service-description">
        Our skilled technicians provide regular maintenance services, including
        oil changes, fluid replacements, brake pad inspections, tire services,
        and spark plug replacements. Whatever essential service you need, we’ve
        got you covered.
      </p>

      <div className="service-list">
        {services.map((item, index) => (
          <div key={index} className="service-item">
            <div className="service-circle">{index + 1}</div>
            <h3>{item}</h3>
            {index !== services.length - 1 && (
              <div className="service-line"></div>
            )}
          </div>
        ))}
      </div>

      <button
        className="service-button"
        onClick={() => {
          navigate("/services-modifications");
        }}
      >
        Schedule an Appointment
      </button>
    </div>
  );
};

export default ServiceAndModificationSection;
