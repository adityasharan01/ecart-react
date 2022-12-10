import { cartReducer, initialState } from "./cartReducer";

describe("Testing cart reducer", () => {
  it("INIT_CART should initialize cart", () => {
    const cart = [
      { _id: "1234", productName: "xyz" },
      { _id: "1236", productName: "pqr" },
    ];

    const action = {
      type: "INIT_CART",
      payload: cart,
    };

    const expectedState = {
      cart: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
      ],
    };

    const state = cartReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("UPDATE_CART should update the item in cart", () => {
    const initialState = {
      cart: [
        { _id: "1234", productName: "xyz" },
        { _id: "1235", productName: "abc" },
      ],
    };

    const cart = [
      { _id: "1234", productName: "xyz" },
      { _id: "1235", productName: "abc" },
      { _id: "1236", productName: "pqr" },
    ];

    const action = { type: "UPDATE_CART", payload: cart };

    const expectedState = {
      cart: cart,
    };

    const state = cartReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
  
  it("CLEAR_CART should clear the cart completely", () => {
    const initialState = {
      cart: [
        { _id: "1234", productName: "xyz", quantity: 1 },
        { _id: "1235", productName: "abc", quantity: 3 },
        { _id: "1236", productName: "pqr", quantity: 1 },
      ],
    };

    const action = { type: "CLEAR_CART", payload: "1235" };

    const expectedState = {
      cart: [],
    };

    const state = cartReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
