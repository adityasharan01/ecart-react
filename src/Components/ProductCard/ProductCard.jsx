import React from "react";
import "./ProductCard.css";

function ProductCard({
  productName,
  image,
  alt,
  price,
  description,
  oldPrice,
  rate,
  inStock
}) {
  return (
    <div className="card product-card m-1">
      <div className="card-section">
        <img className="card-img img-responsive p-1" src={image} alt={alt} />
        {!inStock && (<span class="card-badge p-1">Out of stock</span>)}
        
        <span className="card-dismiss center-div p-1">
          <i className="fas fa-heart"></i>
        </span>
        <div className="card-header p-1 center-div">
          <h4>{productName}</h4>
          <p className="card-desc px-1">{description}</p>
          <div className="card-price-section center-div py-1">
            <h3>₹{price}</h3> <del>{oldPrice}</del>
            <span>
              {rate} ★
            </span>
          </div>
          <button className="btn btn-secondary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
