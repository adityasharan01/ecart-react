import React from "react";
import { useWishlist } from "../../Context/wishlist";
import "./ProductCard.css";
import { isItemInList } from "../../utils";
import { useCart } from "../../Context/cart";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { useAuth } from "../../Context/auth";
import { addToCart } from "../../services/cart/cart";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/wishlist/wishlist";

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
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleAddToWishlist = async (product) => {
    if (user) {
      try {
        const { data } = await addToWishlist(product);
        dispatch({ type: "UPDATE_WISHLIST", payload: data?.wishlist });
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  const handleRemoveFromWishlist = async (_id) => {
    if (user) {
      try {
        const { data } = await removeFromWishlist(_id);
        dispatch({ type: "UPDATE_WISHLIST", payload: data?.wishlist });
      } catch (e) {
        console.error(e);
      }
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  const handleAddToCart = async (product) => {
    if (user) {
      try {
        const { data } = await addToCart(product);
        cartDispatch({ type: "UPDATE_CART", payload: data?.cart });
      } catch (e) {
        console.error(e);
      }
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="card product-card m-1">
      <div className="card-section">
        <img className="card-img img-responsive p-1" src={image} alt={alt} />
        {!inStock && <span className="card-badge p-1">Out of stock</span>}
        {itemInWishlist ? (
          <span
            className={`card-dismiss inwishlist-${itemInWishlist} center-div p-1`}
            onClick={() => handleRemoveFromWishlist(_id)}
          >
            <i className="fas fa-heart"></i>
          </span>
        ) : (
          <span
            className={`card-dismiss inwishlist-${itemInWishlist} center-div p-1`}
            onClick={() => handleAddToWishlist(product)}
          >
            <i className="fas fa-heart"></i>
          </span>
        )}
        <div className="card-header p-1 center-div">
          <h4>{productName}</h4>
          <p className="card-desc px-1" title={description}>
            {description}
          </p>
          <div className="card-price-section center-div py-1">
            <h3>₹{price}</h3> <del>₹{oldPrice}</del>
            <span>{rate}⭐</span>
          </div>
          {itemInCart ? (
            <Link to="/cart">
              <button className="btn btn-outline-primary">Go to cart</button>
            </Link>
          ) : (
            <Button
              class_name="btn btn-secondary"
              disabled={!inStock}
              clickHandler={() => handleAddToCart(product)}
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
