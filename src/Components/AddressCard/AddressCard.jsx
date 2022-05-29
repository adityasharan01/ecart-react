import React from "react";
import { useAddress } from "../../Context/address";
import "./AddressCard.css";

function AddressCard({ address }) {
  const { name, checked, phone, city, addState, country, pincode, _id } =
    address;
  const { setAddresses } = useAddress();
  const selectAddressHandler = (e) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) =>
        address._id === _id
          ? { ...address, checked: e.target.checked }
          : { ...address, checked: false }
      )
    );
  };

  return (
    <div className="card p-2 m-1">
      <label className="address-card">
        <div className="check">
          <input
            type="radio"
            name="address"
            id="address"
            checked={checked}
            onChange={(e) => selectAddressHandler(e)}
          />
        </div>
        <div className="address">
          <h4>{name}</h4>
          <p>{`${city}, ${addState}, ${country} - ${pincode}`}</p>
          <p>Phone Number : {phone}</p>
        </div>
      </label>
    </div>
  );
}

export default AddressCard;
