export const initialState = {
  order: {},
};

export const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SAVE_ORDER":
      return {
        ...state,
        order: payload,
      };
    case "CLEAR_ORDERS":
      return {
        ...state,
        order: {},
      };
  }
};
