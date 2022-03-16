import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard({ category, imgSrc }) {
  return (
    <div>
      <Link to="/products" className="btn-link">
        <div className="card category-card m-1">
          <div className="card-section center-div">
            <img className="card-img img-responsive p-1" src={imgSrc} alt="card img" />
            <span className="card-badge p-1">{category}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
