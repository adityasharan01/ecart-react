import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
      <header>
        <div className="header-brand">
          <Link to="/" className="btn-link">
            Always Shopping
          </Link>
        </div>
        <div className="nav-right center-div">
          <Link to="/wishlist" className="badge-icon-wrapper center-div p-1 btn-link">
            <i className="far fa-heart"></i>
            <span className="badge-icon center-div">1</span>
          </Link>
          <Link to="/cart" className="badge-icon-wrapper center-div p-1 btn-link">
            <i className="fas fa-cart-plus"></i>
            <span className="badge-icon">6</span>
          </Link>
        </div>
      </header>
  );
}

export default Nav;
