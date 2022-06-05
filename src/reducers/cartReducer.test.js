import { cartReducer } from "./cartReducer";

describe("Testing cart reducer", () => {
  it("ADD_TO_CART should add the item to cart", () => {
    const initialState = {
      cart: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
      ],
    };

    const action = {
      type: "ADD_TO_CART",
      payload: { _id: "1235", productName: "abc" },
    };

    const expectedState = {
      cart: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
        { _id: "1235", productName: "abc" },
      ],
    };

    const state = cartReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("REMOVE_FROM_CART should remove the item from cart", () => {
    const initialState = {
      cart: [
        { _id: "1234", productName: "xyz" },
        { _id: "1235", productName: "abc" },
        { _id: "1236", productName: "pqr" },
      ],
    };

    const action = { type: "REMOVE_FROM_CART", payload: "1235" };

    const expectedState = {
      cart: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
      ],
    };

    const state = cartReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("INCREASE_QUANTITY should increase the quantity of given product", () => {
    const initialState = {
      cart: [
        { _id: "1234", productName: "xyz", quantity: 1 },
        { _id: "1235", productName: "abc", quantity: 1 },
        { _id: "1236", productName: "pqr", quantity: 1 },
      ],
    };

    const action = { type: "INCREASE_QUANTITY", payload: "1235" };

    const expectedState = {
      cart: [
        { _id: "1234", productName: "xyz", quantity: 1 },
        { _id: "1235", productName: "abc", quantity: 2 },
        { _id: "1236", productName: "pqr", quantity: 1 },
      ],
    };

    const state = cartReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("DECREASE_QUANTITY should reduce the quantity of given product", () => {
    const initialState = {
      cart: [
        { _id: "1234", productName: "xyz", quantity: 1 },
        { _id: "1235", productName: "abc", quantity: 3 },
        { _id: "1236", productName: "pqr", quantity: 1 },
      ],
    };

    const action = { type: "DECREASE_QUANTITY", payload: "1235" };

    const expectedState = {
      cart: [
        { _id: "1234", productName: "xyz", quantity: 1 },
        { _id: "1235", productName: "abc", quantity: 2 },
        { _id: "1236", productName: "pqr", quantity: 1 },
      ],
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
