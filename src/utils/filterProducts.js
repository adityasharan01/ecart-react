/**
 * It filters the products based on catgegory(gender)
 * @param {Array} products
 * @param {Object} categories
 * @returns filtered products
 */
export const filterProducts = (products = [], categories = {}) => {
  const { menWatches, womenWatches, boyWatches, girlWatches } = categories;
  const filteredProducts = [];

  if (!menWatches && !womenWatches && !boyWatches && !girlWatches) {
    return products;
  }

  if (menWatches) {
    const menProducts = products.filter(({ categoryName }) =>
      menWatches ? categoryName.toLowerCase() === "mens" : true
    );
    filteredProducts.push(...menProducts);
  }

  if (womenWatches) {
    const womenProducts = products.filter(({ categoryName }) =>
      womenWatches ? categoryName.toLowerCase() === "womens" : true
    );
    filteredProducts.push(...womenProducts);
  }

  if (boyWatches) {
    const boyProducts = products.filter(({ categoryName }) =>
      boyWatches ? categoryName.toLowerCase() === "boys" : true
    );
    filteredProducts.push(...boyProducts);
  }

  if (girlWatches) {
    const girlProducts = products.filter(({ categoryName }) =>
      girlWatches ? categoryName.toLowerCase() === "girls" : true
    );
    filteredProducts.push(...girlProducts);
  }

  return filteredProducts;
};
