/**
 * It filter the products based on category
 * @param {Array} products
 * @param {Boolean} includeOutOfStock
 * @param {Boolean} fastDelivery
 * @returns {Array} filtered products
 */
export const filterCategory = (
  products = [],
  includeOutOfStock = true,
  fastDelivery = false
) => {
  return products
    .filter(({ inStock }) => (includeOutOfStock ? true : inStock))
    .filter((product) => (fastDelivery ? product.fastDelivery : true));
};
