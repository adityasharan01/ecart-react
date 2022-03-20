export const sortProducts = (products = [], sortBy = "") => {
  if (sortBy === "low_to_high") {
    return [...products].sort((a, b) => a.price - b.price);
  } else if (sortBy === "high_to_low") {
    return [...products].sort((a, b) => b.price - a.price);
  }
  return products;
};
