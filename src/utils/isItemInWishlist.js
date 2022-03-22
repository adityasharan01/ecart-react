/**
 * funtion to check whether item is exists in wishlist
 * @param {id} pass the item id you want to check for
 * @param {wishlist} wishlist is the list in which you want to check
 * @returns boolean true/false based on if item is present in wishlist or not
 */

export const isItemInWishlist = (id, wishlist) => {
  return wishlist.some((item) => item._id === id);
};
