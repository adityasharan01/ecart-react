export const initialState = {
  name: "",
  city: "",
  addState: "",
  country: "",
  pincode: "",
  phone: "",
};

export const addressFormReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_ADDRESS":
      return {
        ...state,
        [payload.name]: payload.value,
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
