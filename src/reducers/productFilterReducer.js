const initialState = {
  sortBy: "",
  rating: 0,
  price: 2000,
  categories: {
    menWatches: false,
    womenWatches: false,
    boyWatches: false,
    girlWatches: false,
  },
  includeOutOfStock: true,
  fastDelivery: false,
};

export const productFilterReducer = (state, action) => {
  switch (action.type) {
    case "MEN_WATCHES":
      return {
        ...state,
        categories: {
          ...state.categories,
          menWatches: !state.categories.menWatches,
        },
      };
    case "WOMEN_WATCHES":
      return {
        ...state,
        categories: {
          ...state.categories,
          womenWatches: !state.categories.womenWatches,
        },
      };
    case "BOY_WATCHES":
      return {
        ...state,
        categories: {
          ...state.categories,
          boyWatches: !state.categories.boyWatches,
        },
      };
    case "GIRL_WATCHES":
      return {
        ...state,
        categories: {
          ...state.categories,
          girlWatches: !state.categories.girlWatches,
        },
      };
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SET_RATING":
      return {
        ...state,
        rating: action.payload,
      };
    case "CLEAR_FILTERS":
      return {
        ...initialState,
      };
    case "SET_PRICE":
      return {
        ...state,
        price: action.payload,
      };
    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        includeOutOfStock: !state.includeOutOfStock,
      };
    case "FAST_DELIVERY":
      return {
        ...state,
        fastDelivery: !state.fastDelivery,
      };
    default:
      return state;
  }
};
