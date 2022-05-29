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

  return (
    <div className="backdrop" onClick={toggleAddressForm}>
      <div
        className="card address-form-card card-shadow m-1"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="card-section">
          <div className="card-header p-2">
            <h3 className="center-div">Address form</h3>
            <form onSubmit={addressHandler}>
              <div className="form-group my-2">
                <Input
                  label="Name"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter name"
                  value={name}
                  changeHandler={(e) =>
                    dispatch({ type: "SET_NAME", payload: e.target.value })
                  }
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="City"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter city"
                  value={city}
                  changeHandler={(e) =>
                    dispatch({ type: "SET_CITY", payload: e.target.value })
                  }
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="State"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter state"
                  value={addState}
                  changeHandler={(e) =>
                    dispatch({ type: "SET_STATE", payload: e.target.value })
                  }
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="Country"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter country"
                  value={country}
                  changeHandler={(e) =>
                    dispatch({ type: "SET_COUNTRY", payload: e.target.value })
                  }
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="Pin code"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter pin code"
                  value={pincode}
                  changeHandler={(e) =>
                    dispatch({ type: "SET_PIN_CODE", payload: e.target.value })
                  }
                  required={true}
                />
              </div>
              <div className="form-group my-2">
                <Input
                  label="Phone number"
                  type="text"
                  class_name="input-textbox p-1"
                  placeholder="Enter phone number"
                  value={phone}
                  changeHandler={(e) =>
                    dispatch({
                      type: "SET_PHONE_NUMBER",
                      payload: e.target.value,
                    })
                  }
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
