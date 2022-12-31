import axios from "axios";
import { getUrlPrefix } from "../../utils";
const token = localStorage.getItem("token");

const increaseQuantity = (id) => {
  return axios.post(
    `${getUrlPrefix()}/api/user/cart/${id}`,
    {
      action: "increment",
    },
    {
      headers: { authorization: token },
    }
  );
};

const decreaseQuantity = (id) => {
  return axios.post(
    `${getUrlPrefix()}/api/user/cart/${id}`,
    {
      action: "decrement",
    },
    {
      headers: { authorization: token },
    }
  );
};

const addToCart = (product) => {
  return axios.post(
    `${getUrlPrefix()}/api/user/cart`,
    { product },
    {
      headers: { authorization: token },
    }
  );
};

const removeFromCart = (id) => {
  return axios.delete(`${getUrlPrefix()}/api/user/cart/${id}`, {
    headers: { authorization: token },
  });
};

export { increaseQuantity, decreaseQuantity, addToCart, removeFromCart };
