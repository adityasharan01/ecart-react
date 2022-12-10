import React from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../Context/order-context";
import "./Order.css";

function Order() {
  const { orderState } = useOrder();
  const navigate = useNavigate();
  const { order } = orderState;
  const { orderId, paymentId, totalAmount, address, items } = order;
  const { name, city, addState, country, pincode, phone } = address ?? {};

  return (
    <div>
      <main>
        <div className="message center-div my-2">
          <h3>Congratulations 🎉</h3>
        </div>
        <div className="center-div">
          <div className="card card-order p-2">
            <div className="order-summery my-1">
              <h3 className="text-green">Order placed successfully</h3>
              <div className="my-1">
                <p className="py-1">
                  <strong>Payment ID: </strong>
                  {paymentId}
                </p>
                <p className="py-1">
                  <strong>Order ID: </strong>
                  {orderId}
                </p>
                <p className="py-1">
                  <strong>Amount paid: </strong>₹{totalAmount}
                </p>
              </div>
              <div className="address">
                <p className="py-1">
                  <strong>Delivering to: </strong>
                </p>
                <p className="text-m">{name}</p>
                <p>{`${city}, ${addState}, ${country} - ${pincode}`}</p>
                <p>Phone Number : {phone}</p>
              </div>
            </div>
            <div className="order-items">
              {items?.map(
                ({
                  _id,
                  image,
                  alt,
                  productName,
                  description,
                  price,
                  quantity,
                }) => (
                  <div className="purchased-item" key={_id}>
                    <div className="purchased-item-image my-1">
                      <img
                        src={image}
                        alt={alt}
                        className="img-responsive item-image"
                      />
                    </div>
                    <div className="purchased-item-desc">
                      <h4>{productName}</h4>
                      <p>{description}</p>
                      <p>Price : ₹{price}</p>
                      <p>Quantity : {quantity}</p>
                    </div>
                    <hr className="separator"/>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="center-div">
          <button
            className="btn btn-primary back-btn"
            onClick={() => navigate("/products")}
          >
            Shop more 🤗
          </button>
        </div>
      </main>
    </div>
  );
}

export default Order;
