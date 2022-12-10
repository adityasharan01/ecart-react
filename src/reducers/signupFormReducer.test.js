import { initialState, signupFormReducer } from "./signupFormReducer";

describe("signupFormReducer tests", () => {
  it("SET_INFO should set the proper value of given field", () => {
    const action = {
      type: "SET_INFO",
      payload: { name: "email", value: "abc@gmail.com" },
    };

    const expectedState = {
      email: "abc@gmail.com",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    };

    const state = signupFormReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
