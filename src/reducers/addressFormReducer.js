export const addressFormReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_NAME":
      return {
        ...state,
        name: payload,
      };
    case "SET_CITY":
      return {
        ...state,
        city: payload,
      };
    case "SET_STATE":
      return {
        ...state,
        addState: payload,
      };
    case "SET_COUNTRY":
      return {
        ...state,
        country: payload,
      };
    case "SET_PIN_CODE":
      return {
        ...state,
        pincode: payload,
      };
    case "SET_PHONE_NUMBER":
      return {
        ...state,
        phone: payload,
      };
    case "SET_DUMMY_ADDRESS":
      return {
        ...state,
        name: "Sherlock Holmes",
        city: "Bangalore",
        addState: "Karnataka",
        country: "India",
        pincode: "500099",
        phone: "123456789",
      };
    default:
      return state;
  }
};
