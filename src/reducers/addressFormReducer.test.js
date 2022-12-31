import { addressFormReducer, initialState } from "./addressFormReducer";

describe("addressFromReducer tests", () => {
  it("SET_ADDRESS should set the proper value in state", () => {
    const action = {
      type: "SET_ADDRESS",
      payload: { name: "country", value: "India" },
    };

    const expectedState = {
      name: "",
      city: "",
      addState: "",
      country: "India",
      pincode: "",
      phone: "",
    };

    const state = addressFormReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("SET_DUMMY_ADDRESS should set dummy address", () => {
    const action = {
      type: "SET_DUMMY_ADDRESS",
    };

    const expectedState = {
      name: "Sherlock Holmes",
      city: "Bangalore",
      addState: "Karnataka",
      country: "India",
      pincode: "500099",
      phone: "123456789",
    };

    const state = addressFormReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it("should call the default state", () => {
    const action = {
      type: "DUMMY_TYPE",
    };

    const state = addressFormReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
