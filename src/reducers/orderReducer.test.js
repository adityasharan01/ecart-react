import { initialState, orderReducer } from "./orderReducer";

describe("orderReducer tests", () => {
  it("should save the order", () => {
    const MockOrder = {
      _id: "1",
      productName: "testProduct",
    };

    const action = {
      type: "SAVE_ORDER",
      payload: MockOrder,
    };

    const expectedState = {
      order: MockOrder,
    };

    const state = orderReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("should clear the order", () => {
    const action = {
      type: "CLEAR_ORDERS",
    };

    const state = orderReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
