import React from "react";
import { useWishlist } from "../../Context/wishlist";
import "./ProductCard.css";
import { isItemInWishlist } from "../../utils";

function ProductCard({ product }) {
  const {
    _id,
    productName,
    image,
    alt,
    price,
    description,
    oldPrice,
    rate,
    inStock,
  } = product;
  const { state, dispatch } = useWishlist();
  const itemInWishlist = isItemInWishlist(_id, state.wishlist);

  return (
    <div className="card product-card m-1">
      <div className="card-section">
        <img className="card-img img-responsive p-1" src={image} alt={alt} />
        {!inStock && <span className="card-badge p-1">Out of stock</span>}
        {itemInWishlist ? (
          <span
            className={`card-dismiss inwishlist-${itemInWishlist} center-div p-1`}
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_WISHLIST", payload: _id })
            }
          >
            <i className="fas fa-heart"></i>
          </span>
        ) : (
          <span
            className={`card-dismiss inwishlist-${itemInWishlist} center-div p-1`}
            onClick={() =>
              dispatch({ type: "ADD_TO_WISHLIST", payload: product })
            }
          >
            <i className="fas fa-heart"></i>
          </span>
        )}
        <div className="card-header p-1 center-div">
          <h4>{productName}</h4>
          <p className="card-desc px-1">{description}</p>
          <div className="card-price-section center-div py-1">
            <h3>₹{price}</h3> <del>₹{oldPrice}</del>
            <span>{rate} ★</span>
          </div>
          <button className="btn btn-secondary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
