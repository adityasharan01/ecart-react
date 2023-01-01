/**
 *
 * @param {Array} products
 * @param {Number} price
 * @returns filtered products less than given price
 */
export const priceFilter = (products = [], price = 0) => {
  return products.filter((product) => product.price <= price);
};
