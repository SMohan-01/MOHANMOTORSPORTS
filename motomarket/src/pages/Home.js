import React from "react";
import "../styles/Home.css";
// import { Link } from 'react-router-dom'
import garageImage from "../assets/images/Shop Image.webp";
import FeaturedInventory from "../components/FeaturedInventorySection";
import SellBikeSection from "../components/SellBikeSection";
import ServiceAndModificationSection from "../components/ServiceAndModificationSection";
import AboutSection from "../components/AboutSection";
import ReviewSection from "../components/ReviewSection";

const Home = () => {
  return (
    <div className="home-container">
      <img src={garageImage} alt="Superbike Garage" className="garage-image" />

      <FeaturedInventory />
      <SellBikeSection />
      <ServiceAndModificationSection />
      <AboutSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
