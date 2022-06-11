import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth";
import { useCart } from "../../Context/cart";
import { useWishlist } from "../../Context/wishlist";
import { useToggle } from "../../Hooks/useToggle";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import "./Nav.css";

function Nav() {
  const { state } = useWishlist();
  const { cartState } = useCart();
  const [isMobileNavbarVisible, toggleMobileNavbarVisibility] = useToggle();
  const { user } = useAuth();

  return (
    <>
      <header>
        <div className="header px-1">
          <div className="menu" onClick={() => toggleMobileNavbarVisibility()}>
            <i className="fas fa-bars"></i>
          </div>

          <div className="header-brand">
            <Link to="/" className="btn-link">
              Always Shopping
            </Link>
          </div>
        </div>
        <div className="nav-right center-div">
          <Link
            title="User"
            to="/profile"
            className="badge-icon-wrapper center-div p-1 btn-link"
          >
            <i className="far fa-user"></i>
          </Link>
          <Link
            title="Wishlist"
            to="/wishlist"
            className="badge-icon-wrapper center-div p-1 btn-link"
          >
            <i className="far fa-heart"></i>
            <span className="badge-icon center-div">
              {state.wishlist.length}
            </span>
          </Link>
          <Link
            title="Cart"
            to="/cart"
            className="badge-icon-wrapper center-div p-1 btn-link"
          >
            <i className="fas fa-cart-plus"></i>
            <span className="badge-icon">{cartState.cart.length}</span>
          </Link>
        </div>
      </header>
      {isMobileNavbarVisible && <MobileNavbar toggleMobileNavbarVisibility={toggleMobileNavbarVisibility}/>}
    </>
  );
}

export default Nav;
