import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckoutCard, Spinner } from "../../Components";
import CartCard from "../../Components/CartCard/CartCard";
import { useCart } from "../../Context/cart";
import "./Cart.css";

function Cart() {
  const { cartState } = useCart();
  const { cart } = cartState;
  const [isLoading, setIsloading] = useState(false);

  return (
    <main>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="heading p-2 flex center-div">
            <h3>
              My cart <span>({cart?.length})</span>
            </h3>
          </div>
          {cart?.length > 0 ? (
            <div className="cart cart-mobile grid-2-col">
              <div className="products">
                {cart?.map((item) => (
                  <CartCard
                    key={item._id}
                    product={item}
                    setIsloading={setIsloading}
                  />
                ))}
              </div>
              <div className="price">
                <CheckoutCard />
              </div>
            </div>
          ) : (
            <div className="message center-div">
              <p>
                Your cart is empty.{" "}
                <Link to="/products" className="btn-link">
                  Continue shopping
                </Link>{" "}
                🤗
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default Cart;
