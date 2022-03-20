export const filterCategory = (
  products = [],
  includeOutOfStock = true,
  fastDelivery = false
) => {
  return products
    .filter(({ inStock }) => (includeOutOfStock ? true : inStock))
    .filter((product) => (fastDelivery ? product.fastDelivery : true));
};
