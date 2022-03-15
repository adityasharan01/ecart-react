import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard({ category }) {
  return (
    <div>
      <Link to="/products" class="btn-link">
        <div class="card m-1">
          <div class="card-section center-div">
            <img class="card-img img-responsive p-1" src="/card.svg" alt="card img" />
            <span class="card-badge p-1">{category}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
