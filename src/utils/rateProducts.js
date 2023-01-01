/**
 *
 * @param {Array} products
 * @param {Number} rating
 * @returns products greater than given rating
 */
export const rateProducts = (products = [], rating = 0) => {
  if (rating) {
    return products.filter((product) => product.rate >= rating);
  }
  return products;
};
