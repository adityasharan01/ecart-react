export const initialState = {
  wishlist: [],
};

export const wishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INIT_WISHLIST":
      return {
        wishlist: payload,
      };
    case "UPDATE_WISHLIST":
      return {
        ...state,
        wishlist: payload,
      };
    default:
      return state;
  }
};
