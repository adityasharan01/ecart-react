import { wishlistReducer } from "./wishlistReducer";

describe("Testing wishlist reducer", () => {
  it("ADD_TO_WISHLIST should add the product to wishlist", () => {
    const initialState = {
      wishlist: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
      ],
    };

    const action = {
      type: "ADD_TO_WISHLIST",
      payload: { _id: "1235", productName: "abc" },
    };

    const expectedState = {
      wishlist: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
        { _id: "1235", productName: "abc" },
      ],
    };

    const state = wishlistReducer(initialState, action);

    expect(state).toEqual(expectedState)
  });

  it("ADD_TO_WISHLIST should not add the duplicate product to wishlist", () => {
    const initialState = {
      wishlist: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
      ],
    };

    const action = {
      type: "ADD_TO_WISHLIST",
      payload: { _id: "1236", productName: "pqr" },
    };

    const expectedState = {
      wishlist: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
      ],
    };

    const state = wishlistReducer(initialState, action);

    expect(state).toEqual(expectedState)
  });

  it("REMOVE_FROM_WISHLIST should remove product from wishlist", () => {
    const initialState = {
      wishlist: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
        { _id: "1235", productName: "abc" },
      ],
    };

    const action = {
      type: "REMOVE_FROM_WISHLIST",
      payload: "1235",
    };

    const expectedState = {
      wishlist: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
      ],
    };

    const state = wishlistReducer(initialState, action);

    expect(state).toEqual(expectedState)
  });
});
