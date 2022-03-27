import React from "react";
import { useCart } from "../../Context/cart";
import { useWishlist } from "../../Context/wishlist";
import { isItemInList } from "../../utils";
import Button from "../Button/Button";
import "./CartCard.css";
import axios from "axios";

function CartCard({ product }) {
  const { _id, image, productName, price, oldPrice, discount, quantity } =
    product;
  const { cartState, cartDispatch } = useCart();
  const { state, dispatch } = useWishlist();
  const isItemInWishlist = isItemInList(product._id, state.wishlist);
  const token = localStorage.getItem("token");

  const moveToWishlistHandler = (product) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: product._id });
    if (!isItemInWishlist) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  };

  const increaseQuantityHandler = (_id) => {
    cartDispatch({ type: "INCREASE_QUANTITY", payload: _id });
  };

  const decreaseQuantityHandler = (_id) => {
    if (quantity > 1) {
      cartDispatch({ type: "DECREASE_QUANTITY", payload: _id });
    }
  };

  const handleRemoveFromCart = async (_id) => {
    if (token) {
      try {
        const res = await axios.delete(`api/user/wishlist/${_id}`, {
          headers: { authorization: token },
        });
        console.log(res);
        cartDispatch({ type: "REMOVE_FROM_CART", payload: _id });
      } catch (e) {
        console.error(e);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="card cart-card m-1">
      <div className="card-section grid-2-col center-div">
        <img
          className="card-img horizontal-card-img img-responsive p-1"
          src={image}
          alt="card img"
        />
        <div className="card-header p-2">
          <h4>{productName}</h4>
          <p className="font-weight-black pt-1 text-m">
            ₹{price} <small className="discount-price">₹{oldPrice}</small>
          </p>
          <p className="py-1 discount text-m">{discount}% Off</p>
          <p className="py-1">
            Quantity :{" "}
            <i
              className="fas fa-minus px-1"
              onClick={() => decreaseQuantityHandler(_id)}
            ></i>{" "}
            <span className="quantity px-2 border-s">{quantity}</span>{" "}
            <i
              className="fas fa-plus px-1"
              onClick={() => increaseQuantityHandler(_id)}
            ></i>
          </p>
          <Button
            class_name="btn btn-primary my-1"
            clickHandler={() => handleRemoveFromCart(_id)}
          >
            Remove from cart
          </Button>
          <Button
            class_name="btn btn-secondary"
            clickHandler={() => moveToWishlistHandler(product)}
          >
            Move to wishlist
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
