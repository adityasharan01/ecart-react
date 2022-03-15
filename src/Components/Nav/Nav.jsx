import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
      <header>
        <div class="header-brand">
          <a href="#" class="btn-link">
            Always Shopping
          </a>
        </div>
        <div class="nav-right center-div">
          <Link to="/wishlist" class="badge-icon-wrapper center-div p-1 btn-link">
            <i class="far fa-heart"></i>
            <span class="badge-icon center-div">1</span>
          </Link>
          <Link to="/cart" class="badge-icon-wrapper center-div p-1 btn-link">
            <i class="fas fa-cart-plus"></i>
            <span class="badge-icon">6</span>
          </Link>
        </div>
      </header>
  );
}

export default Nav;
