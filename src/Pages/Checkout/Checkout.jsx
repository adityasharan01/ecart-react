import React from "react";
import { AddressCard, AddressForm, Nav } from "../../Components";
import { useAddress } from "../../Context/address";
import { useCart } from "../../Context/cart";
import { useToggle } from "../../Hooks/useToggle";
import { totalPrice } from "../../utils";
import "./Checkout.css";

function Checkout() {
  const { cartState } = useCart();
  const [isAddressFormVisible, toggleAddressForm] = useToggle();
  const { addresses } = useAddress();
  const { cart } = cartState;
  const totalPriceOfItems = totalPrice(cart);
  const discountedPrice = totalPriceOfItems / 10;
  const totalAmount = totalPriceOfItems - discountedPrice + 100;

  return (
    <div className="px-2">
      <Nav />
      <main className="checkout-page">
        <div className="heading p-2 flex center-div">
          <h3>Checkout</h3>
        </div>
        <div className="checkout-info">
          <div className="checkout-addresses">
            {addresses?.map((address) => (
              <AddressCard key={address._id} address={address} />
            ))}
            <button className="btn btn-primary m-1" onClick={toggleAddressForm}>
              Add Address
            </button>
          </div>
          <div className="checkout-place-order">
            <h4>
              ORDER DETAILS <span>({cart.length} Items)</span>
            </h4>
            <div className="checkout-listing p-1 my-2">
              <hr className="separator" />
              <div className="checkout-heading p-1 text-center">
                <h4>PURCHASED ITEMS</h4>
              </div>
              <hr className="separator" />
              <div className="checkout-items">
                <div className="item-details">
                  <strong>Item</strong>
                  <strong>Price</strong>
                </div>
                {cart?.map(
                  ({ _id, productName, description, quantity, price }) => (
                    <div className="checkout-item my-2" key={_id}>
                      <div className="item-desc">
                        <p>
                          {productName} : {description}
                        </p>
                        <small className="text-gray">
                          ( {quantity} x ₹{price} )
                        </small>
                      </div>

                      <p>₹{quantity * price}</p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="checkout-listing p-1 my-2">
              <hr className="separator" />
              <div className="checkout-heading p-1 text-center">
                <h4>BILLING</h4>
              </div>
              <hr className="separator" />
              <div className="checkout-items">
                <div className="checkout-item my-2">
                  <p>Total MRP:</p>
                  <small>₹{totalPriceOfItems}</small>
                </div>
                <div className="checkout-item my-2">
                  <p>Discount:</p>
                  <small>-₹{discountedPrice}</small>
                </div>
                <div className="checkout-item my-2">
                  <p>Delivery Charges:</p>
                  <small>₹100</small>
                </div>
                <div className="checkout-item my-1">
                  <p className="text-m">Total:</p>
                  <small>₹{totalAmount}</small>
                </div>
              </div>
            </div>
            <div className="checkout-listing p-1 my-2">
              <hr className="separator" />
              <div className="checkout-heading p-1 text-center">
                <h4>DEVILERING TO</h4>
              </div>
              <hr className="separator" />
              <div className="checkout-items">
                {addresses.map(
                  ({
                    _id,
                    name,
                    city,
                    addState,
                    country,
                    pincode,
                    checked,
                    phone,
                  }) =>
                    checked && (
                      <div className="address" key={_id}>
                        <h4>{name}</h4>
                        <p>{`${city}, ${addState}, ${country} - ${pincode}`}</p>
                        <p>Phone Number : {phone}</p>
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="checkout-listing p-1 my-2">
              <button className="btn btn-primary">Proceed to pay</button>
            </div>
          </div>
        </div>
      </main>
      {isAddressFormVisible && (
        <AddressForm toggleAddressForm={toggleAddressForm} />
      )}
    </div>
  );
}

export default Checkout;
