import React from "react";
import { useCart } from "../../Context/cart";
import { totalItemsInList, totalPrice } from "../../utils";
import "./Checkout.css";

function Checkout() {
  const { cartState } = useCart();
  const { cart } = cartState;
  const totalItems = totalItemsInList(cart);
  const totalPriceOfItems = totalPrice(cart);
  const discountedPrice = totalPriceOfItems / 10;
  const totalAmount = totalPriceOfItems - discountedPrice + 100;

  return (
    <div className="card price-card m-1 p-1">
      <div className="card-section">
        <div className="card-header p-1">
          <h4 className="card-heading pb-1">PRICE DETAILS</h4>
          <hr className="separator" />
          <div className="flex-between py-1">
            <p>
              Price <span>({totalItems} items)</span>
            </p>
            <p>₹{totalPriceOfItems}</p>
          </div>
          <div className="flex-between py-1">
            <p>Discount (10%)</p>
            <p>- ₹{discountedPrice}</p>
          </div>
          <div className="flex-between py-1">
            <p>Delivery Charges</p>
            <p>₹100</p>
          </div>
        </div>
        <hr className="separator" />
        <div className="card-disc p-1 flex-between">
          <h4>TOTAL AMOUNT</h4>
          <h4>₹{totalAmount}</h4>
        </div>
        <hr className="separator" />
        <p className="p-2">You will save ₹{discountedPrice} on this order</p>
      </div>
      <hr className="separator" />
      <div className="card-footer p-1">
        <a className="p-1 checkout">PLACE ORDER</a>
      </div>
    </div>
  );
}

export default Checkout;
