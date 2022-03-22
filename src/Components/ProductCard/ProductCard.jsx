import React from "react";
import { useWishlist } from "../../Context/wishlist";
import "./ProductCard.css";
import { isItemInList } from "../../utils";
import { useCart } from "../../Context/cart";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

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
  const { cartState, cartDispatch } = useCart();
  const itemInWishlist = isItemInList(_id, state.wishlist);
  const itemInCart = isItemInList(_id, cartState.cart);

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
          {itemInCart ? (
            <Link to="/cart">
              <button className="btn btn-outline-primary">Go to cart</button>
            </Link>
          ) : (
            <Button
              class_name="btn btn-secondary"
              disabled={!inStock}
              clickHandler={() =>
                cartDispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
