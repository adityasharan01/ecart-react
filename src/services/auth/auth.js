import axios from "axios";
import { getUrlPrefix } from "../../utils";

const login = (email, password) => {
  return axios.post(`${getUrlPrefix()}/api/auth/login`, {
    email,
    password,
  });
};

const signup = (email, firstName, lastName, password) => {
  return axios.post(`${getUrlPrefix()}/api/auth/signup`, {
    email,
    firstName,
    lastName,
    password,
  });
};

export { login, signup };
