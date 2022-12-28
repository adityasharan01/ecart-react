import { initialState, productFilterReducer } from "./productFilterReducer";

describe("productFilterReducer tests", () => {
  it("MEN_WATCHES should select men watches", () => {
    const action = {
      type: "MEN_WATCHES",
    };

    const expectedState = {
      sortBy: "",
      rating: 0,
      price: 2000,
      categories: {
        menWatches: true,
        womenWatches: false,
        boyWatches: false,
        girlWatches: false,
      },
      includeOutOfStock: true,
      fastDelivery: false,
    };

    const state = productFilterReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("WOMEN_WATCHES should select women watches", () => {
    const action = {
      type: "WOMEN_WATCHES",
    };

    const expectedState = {
      sortBy: "",
      rating: 0,
      price: 2000,
      categories: {
        menWatches: false,
        womenWatches: true,
        boyWatches: false,
        girlWatches: false,
      },
      includeOutOfStock: true,
      fastDelivery: false,
    };

    const state = productFilterReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("BOY_WATCHES should select boy watches", () => {
    const action = {
      type: "BOY_WATCHES",
    };

    const expectedState = {
      sortBy: "",
      rating: 0,
      price: 2000,
      categories: {
        menWatches: false,
        womenWatches: false,
        boyWatches: true,
        girlWatches: false,
      },
      includeOutOfStock: true,
      fastDelivery: false,
    };

    const state = productFilterReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("GIRL_WATCHES should select girls watches", () => {
    const action = {
      type: "GIRL_WATCHES",
    };

    const expectedState = {
      sortBy: "",
      rating: 0,
      price: 2000,
      categories: {
        menWatches: false,
        womenWatches: false,
        boyWatches: false,
        girlWatches: true,
      },
      includeOutOfStock: true,
      fastDelivery: false,
    };

    const state = productFilterReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("SET_SORT_BY should set proper sort value", () => {
    const action = {
      type: "SET_SORT_BY",
      payload: "low_to_high",
    };

    const expectedState = {
      sortBy: "low_to_high",
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

    const state = productFilterReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("SET_RATING should set the given rating value", () => {
    const action = {
      type: "SET_RATING",
      payload: 2,
    };

    const expectedState = {
      sortBy: "",
      rating: 2,
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

    const state = productFilterReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("CLEAR_FILTERS should clear all the filters applied", () => {
    const action = {
      type: "CLEAR_FILTERS",
    };

    const state = productFilterReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it("SET_PRICE should set the correct price as provided", () => {
    const action = {
      type: "SET_PRICE",
      payload: 500,
    };

    const expectedState = {
      sortBy: "",
      rating: 0,
      price: 500,
      categories: {
        menWatches: false,
        womenWatches: false,
        boyWatches: false,
        girlWatches: false,
      },
      includeOutOfStock: true,
      fastDelivery: false,
    };

    const state = productFilterReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("INCLUDE_OUT_OF_STOCK should unselect includeOutOfStock", () => {
    const action = {
      type: "INCLUDE_OUT_OF_STOCK",
    };

    const expectedState = {
      sortBy: "",
      rating: 0,
      price: 2000,
      categories: {
        menWatches: false,
        womenWatches: false,
        boyWatches: false,
        girlWatches: false,
      },
      includeOutOfStock: false,
      fastDelivery: false,
    };

    const state = productFilterReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("FAST_DELIVERY should select fast delivery", () => {
    const action = {
      type: "FAST_DELIVERY",
    };

    const expectedState = {
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
      fastDelivery: true,
    };

    const state = productFilterReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("should call the default state", () => {
    const action = {
      type: "DUMMY_TYPE",
    };

    const state = productFilterReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
