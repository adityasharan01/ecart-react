export const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INIT_CART":
      return {
        cart: payload,
      };
    case "UPDATE_CART":
      return {
        ...state,
        cart: payload,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
