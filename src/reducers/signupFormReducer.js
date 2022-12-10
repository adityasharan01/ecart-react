export const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

export const signupFormReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_INFO":
      return {
        ...state,
        [payload.name]: payload.value,
      };
    default:
      return state;
  }
};
