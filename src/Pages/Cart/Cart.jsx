import React from "react";
import { Checkout } from "../../Components";
import CartCard from "../../Components/CartCard/CartCard";
import Nav from "../../Components/Nav/Nav";
import { useCart } from "../../Context/cart";
import "./Cart.css";

function Cart() {
  const { cartState } = useCart();
  const { cart } = cartState;

  return (
    <div className="px-2">
      <Nav />
      <main className="p-3">
        <div className="heading p-2 flex center-div">
          <h3>
            My cart <span>({cart.length})</span>
          </h3>
        </div>

        <div className="cart grid-2-col">
          <div className="products px-3">
            {cart?.map((item) => (
              <CartCard key={item._id} product={item} />
            ))}
          </div>
          <div className="price px-3">
            <Checkout/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
