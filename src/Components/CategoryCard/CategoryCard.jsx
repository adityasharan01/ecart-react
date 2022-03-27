import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";
import { useProductFilter } from "../../Context/product-filter";

function CategoryCard({ category, imgSrc }) {
  const { state, dispatch } = useProductFilter();

  const chooseCategoryHandler = (_category) => {
    const category = _category.toLowerCase();
    switch (category) {
      case "mens":
        dispatch({ type: "MEN_WATCHES" });
        break;
      case "womens":
        dispatch({ type: "WOMEN_WATCHES" });
        break;
      case "boys":
        dispatch({ type: "BOY_WATCHES" });
        break;
      case "girls":
        dispatch({ type: "GIRL_WATCHES" });
        break;
      default:
        break;
    }
  };

  return (
    <div onClick={() => chooseCategoryHandler(category)}>
      <Link to="/products" className="btn-link">
        <div className="card category-card m-1">
          <div className="card-section center-div">
            <img
              className="card-img img-responsive p-1"
              src={imgSrc}
              alt="card img"
            />
            <span className="card-badge p-1">{category}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
