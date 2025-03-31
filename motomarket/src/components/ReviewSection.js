import React from "react";
import "../styles/ReviewSection.css";
const ReviewSection = () => {
  const reviews = [
    {
      name: "Kay.",
      review:
        "Amazing experience! Mohan Motorsports made everything smooth and easy.",
    },
    {
      name: "Steve.",
      review:
        "Top-notch customer service and high-quality vehicles. Highly recommended!",
    },
    {
      name: "Roman Reings.",
      review:
        "Best place to buy sports bikes! The team really knows their stuff.",
    },
    {
      name: "Brock Lesnar.",
      review: "Absolutely love my new ride! Thank you for the great deal!",
    },
    {
      name: "Seth Rollins.",
      review:
        "Exceptional service and great attention to detail. Will buy again!",
    },
  ];
  return (
    <div className="reviews-section">
      {/* Title */}
      <div className="reviews-title">
        <span className="line"></span>
        <span className="featured-text">Reviews</span>
      </div>

      
      <p className="reviews-subtitle">Real Reviews from Our Customers</p>

    
      <div className="reviews-slider">
        {reviews.map((item, index) => (
          <div key={index} className="review-card">
            <p className="review-text">"{item.review}"</p>
            <p className="review-author">- {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
