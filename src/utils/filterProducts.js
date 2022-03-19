export const filterProducts = (products = [], categories = {}, includeOutOfStock , fastDelivery = false) => {
  const { menWatches, womenWatches, boyWatches, girlWatches } = categories;
  const filteredProducts = [];

  if (!menWatches && !womenWatches && !boyWatches && !girlWatches && includeOutOfStock && !fastDelivery) {
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

  if(!includeOutOfStock){
    const outOfStockProducts = products.filter(({ inStock }) => includeOutOfStock ? true : inStock);
    filteredProducts.push(...outOfStockProducts);
  }

  if(fastDelivery){
    const fastDeliveryProducts = products.filter(({ fastDelivery }) => fastDelivery);
    filteredProducts.push(...fastDeliveryProducts);
  }
  return filteredProducts;
};
