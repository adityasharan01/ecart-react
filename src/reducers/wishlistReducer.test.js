import { wishlistReducer, initialState } from "./wishlistReducer";

describe("Testing wishlist reducer", () => {
  it("INIT_WISHLIST should initialize the wishlist", () => {
    const wishlist = [
      { _id: "1234", productName: "xyz" },
      { _id: "1236", productName: "pqr" },
      { _id: "1235", productName: "abc" },
    ];

    const action = {
      type: "INIT_WISHLIST",
      payload: wishlist,
    };

    const expectedState = {
      wishlist: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
        { _id: "1235", productName: "abc" },
      ],
    };

    const state = wishlistReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("UPDATE_WISHLIST should update the wishlist with given items", () => {
    const initialState = {
      wishlist: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
      ],
    };

    const wishlist = [
      { _id: "1234", productName: "xyz" },
      { _id: "1236", productName: "pqr" },
      { _id: "1235", productName: "abc" },
    ];

    const action = {
      type: "UPDATE_WISHLIST",
      payload: wishlist
    }

    const expectedState = {
      wishlist: [
        { _id: "1234", productName: "xyz" },
        { _id: "1236", productName: "pqr" },
        { _id: "1235", productName: "abc" },
      ],
    }

    const state = wishlistReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
