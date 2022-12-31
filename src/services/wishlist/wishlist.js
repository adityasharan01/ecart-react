import axios from "axios";
import { getUrlPrefix } from "../../utils";

const token = localStorage.getItem("token");

const addToWishlist = (product) => {
  return axios.post(
    `${getUrlPrefix()}/api/user/wishlist`,
    { product },
    {
      headers: { authorization: token },
    }
  );
};

const removeFromWishlist = (id) => {
  return axios.delete(`${getUrlPrefix()}/api/user/wishlist/${id}`, {
    headers: { authorization: token },
  });
};

export { addToWishlist, removeFromWishlist };
