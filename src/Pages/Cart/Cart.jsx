import React from "react";
import CartCard from "../../Components/CartCard/CartCard";
import Nav from "../../Components/Nav/Nav";
import "./Cart.css";

function Cart() {
  return (
    <div className="px-2">
      <Nav />
      <main className="p-3">
        <div className="heading p-2 flex center-div">
          <h3>
            My cart <span>(2)</span>
          </h3>
        </div>

        <div className="cart grid-2-col">
          <div className="products px-3">
           <CartCard/>
           <CartCard/>
          </div>
          <div className="price px-3">
            <div className="card price-card m-1 p-1">
              <div className="card-section">
                <div className="card-header p-1">
                  <h4 className="card-heading pb-1">PRICE DETAILS</h4>
                  <hr className="separator" />
                  <div className="flex-between py-1">
                    <p>
                      Price <span>(2 items)</span>
                    </p>
                    <p>₹4000</p>
                  </div>
                  <div className="flex-between py-1">
                    <p>Discount</p>
                    <p>- ₹2000</p>
                  </div>
                  <div className="flex-between py-1">
                    <p>Delivery Charges</p>
                    <p>₹200</p>
                  </div>
                </div>
                <hr className="separator" />
                <div className="card-disc p-1 flex-between">
                  <h4>TOTAL AMOUNT</h4>
                  <h4>₹2200</h4>
                </div>
                <hr className="separator" />
                <p className="p-2">You will save ₹2000 on this order</p>
              </div>
              <hr className="separator" />
              <div className="card-footer p-1">
                <a className="p-1">PLACE ORDER</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
