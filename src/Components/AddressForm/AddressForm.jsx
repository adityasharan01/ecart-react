import React, { useReducer } from "react";
import { useAddress } from "../../Context/address";
import { addressFormReducer } from "../../reducers";
import Input from "../Input/Input";
import "./AddressForm.css";
import { v4 as uuid } from "uuid";

function AddressForm({ toggleAddressForm }) {
  const [state, dispatch] = useReducer(addressFormReducer, {
    name: "",
    city: "",
    addState: "",
    country: "",
    pincode: "",
    phone: "",
  });
  const { setAddresses } = useAddress();
  const { name, city, addState, country, pincode, phone } = state;

  const addressHandler = (e) => {
    e.preventDefault();
    const newAddress = {
      ...state,
      _id: uuid(),
      checked: false,
    };
    setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
    toggleAddressForm();
  };

  const handleChange = (e) => {
    dispatch({
      type: "SET_ADDRESS",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div className="backdrop" onClick={toggleAddressForm}>
      <div
        className="card address-form-card card-shadow m-1"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="card-section">
          <div className="card-header p-2">
            <div className="card-header-heading">
              <h3>Address form</h3>
              <i
                className="fas fa-times times-icon"
                onClick={toggleAddressForm}
              ></i>
            </div>
            <form onSubmit={addressHandler}>
              <div className="form-group my-2">
                <Input
                  label="Name"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  changeHandler={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="City"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter city"
                  name="city"
                  value={city}
                  changeHandler={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="State"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter state"
                  name="addState"
                  value={addState}
                  changeHandler={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="Country"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter country"
                  name="country"
                  value={country}
                  changeHandler={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="Pin code"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter pin code"
                  name="pincode"
                  value={pincode}
                  changeHandler={handleChange}
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="Phone number"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter phone number"
                  name="phone"
                  value={phone}
                  changeHandler={handleChange}
                  required={true}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add new address
              </button>
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={() => dispatch({ type: "SET_DUMMY_ADDRESS" })}
              >
                Add dummy address
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressForm;
