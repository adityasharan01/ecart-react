import React from "react";
import "./CartCard.css";

function CartCard() {
  return (
    <div className="card cart-card m-1">
      <div className="card-section grid-2-col center-div">
        <img
          className="card-img horizontal-card-img img-responsive p-1"
          src="/card.svg"
          alt="card img"
        />
        <div className="card-header p-2">
          <h4>Men premium jacket</h4>
          <p className="font-weight-black pt-1 text-m">
            ₹2000 <small className="discount-price">₹1000</small>
          </p>
          <p className="py-1 discount text-m">50% Off</p>
          <p className="py-1">
            Quantity : <i className="fas fa-minus px-1"></i>{" "}
            <span className="quantity px-2 border-s">1</span>{" "}
            <i className="fas fa-plus px-1"></i>
          </p>
          <button className="btn btn-primary my-1">Remove from cart</button>
          <button className="btn btn-secondary">Move to wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
