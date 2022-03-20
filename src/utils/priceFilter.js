export const priceFilter = (products = [], price = 0) => {
  return products.filter((product) => product.price <= price);
};
