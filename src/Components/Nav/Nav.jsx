import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/cart";
import { useWishlist } from "../../Context/wishlist";
import "./Nav.css";

function Nav() {
  const { state } = useWishlist();
  const { cartState } = useCart();
  const token = localStorage.getItem("token");

  return (
    <header>
      <div className="header-brand">
        <Link to="/" className="btn-link">
          Always Shopping
        </Link>
      </div>
      <div className="nav-right center-div">
        <Link
          to={token ? "/profile": "/login"}
          className="badge-icon-wrapper center-div p-1 btn-link"
        >
          <i className="far fa-user"></i>
        </Link>
        <Link
          to={token ? "/wishlist" : "/login"}
          className="badge-icon-wrapper center-div p-1 btn-link"
        >
          <i className="far fa-heart"></i>
          <span className="badge-icon center-div">{state.wishlist.length}</span>
        </Link>
        <Link
          to={token ? "/cart" : "/login"}
          className="badge-icon-wrapper center-div p-1 btn-link"
        >
          <i className="fas fa-cart-plus"></i>
          <span className="badge-icon">{cartState.cart.length}</span>
        </Link>
      </div>
    </header>
  );
}

export default Nav;
