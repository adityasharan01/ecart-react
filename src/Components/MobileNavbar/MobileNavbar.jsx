import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileNavbar.css";

function MobileNavbar({ toggleMobileNavbarVisibility }) {
  return (
    <div className="mobile-navbar">
      <div
        className="mobile-navbar-header"
        onClick={() => toggleMobileNavbarVisibility()}
      >
        <div className="mobile-navs-header p-2" data-testid="closeNavbar">
          <i className="fas fa-times"></i>
        </div>
      </div>
      <nav
        className="mobile-navs"
        onClick={() => toggleMobileNavbarVisibility()}
      >
        <NavLink
          to="/profile"
          className="btn-link mobile-nav py-1 border-s my-1"
        >
          <div className="nav-icon px-2">
            <i className="far fa-user"></i>
          </div>
          <div className="nav-title">Profile</div>
        </NavLink>
        <NavLink
          to="/wishlist"
          className="btn-link mobile-nav py-1 border-s my-1"
        >
          <div className="nav-icon px-2">
            <i className="far fa-heart"></i>
          </div>
          <div className="nav-title">Wishlist</div>
        </NavLink>
        <NavLink to="/cart" className="btn-link mobile-nav py-1 border-s my-1">
          <div className="nav-icon px-2">
            <i className="fas fa-cart-plus"></i>
          </div>
          <div className="nav-title">Cart</div>
        </NavLink>
      </nav>
    </div>
  );
}

export default MobileNavbar;
