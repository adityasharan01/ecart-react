import React from "react";
import { useCart } from "../../Context/cart";
import { useWishlist } from "../../Context/wishlist";
import { isItemInList } from "../../utils";
import Button from "../Button/Button";
import "./CartCard.css";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../services/cart/cart";
import { addToWishlist } from "../../services/wishlist/wishlist";

function CartCard({ product, setIsloading }) {
  const { _id, image, productName, price, oldPrice, discount, quantity } =
    product;
  const { cartState, cartDispatch } = useCart();
  const { state, dispatch } = useWishlist();
  const isItemInWishlist = isItemInList(product._id, state.wishlist);

  const moveToWishlistHandler = async (product) => {
    handleRemoveFromCart(product._id);
    if (!isItemInWishlist) {
      try {
        const { data } = await addToWishlist(product);
        dispatch({ type: "UPDATE_WISHLIST", payload: data?.wishlist });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const increaseQuantityHandler = async (_id) => {
    setIsloading(true);
    try {
      const { data } = await increaseQuantity(_id);
      cartDispatch({ type: "UPDATE_CART", payload: data?.cart });
      setIsloading(false);
    } catch (error) {
      console.error(error);
      setIsloading(false);
    }
  };

  const decreaseQuantityHandler = async (_id) => {
    if (quantity > 1) {
      setIsloading(true);
      try {
        const { data } = await decreaseQuantity(_id);
        cartDispatch({ type: "UPDATE_CART", payload: data?.cart });
        setIsloading(false);
      } catch (error) {
        console.error(error);
        setIsloading(false);
      }
    }
  };

  const handleRemoveFromCart = async (_id) => {
    setIsloading(true);
    try {
      const { data } = await removeFromCart(_id);
      cartDispatch({ type: "UPDATE_CART", payload: data?.cart });
      setIsloading(false);
    } catch (error) {
      console.error(error);
      setIsloading(false);
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
              className={`fas fa-minus px-1 ${
                quantity === 1 ? "text-gray disabled-element" : ""
              }`}
              title="Decrease quantity"
              onClick={() => decreaseQuantityHandler(_id)}
            ></i>{" "}
            <span className="quantity px-2 border-s" data-testid="quantity">
              {quantity}
            </span>{" "}
            <i
              className="fas fa-plus px-1"
              title="Increase quantity"
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
