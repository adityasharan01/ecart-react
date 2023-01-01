import { filterProducts } from "./filterProducts";

describe("filterProducts() tests", () => {
  const products = [
    {
      _id: "1",
      categoryName: "mens",
    },
    {
      _id: "2",
      categoryName: "womens",
    },
    {
      _id: "3",
      categoryName: "girls",
    },
    {
      _id: "4",
      categoryName: "boys",
    },
    {
      _id: "5",
      categoryName: "girls",
    },
  ];

  it("should give men products", () => {
    const categories = {
      menWatches: true,
      womenWatches: false,
      boyWatches: false,
      girlWatches: false,
    };

    const menWatches = filterProducts(products, categories);

    expect(menWatches.length).toBe(1);
  });

  it("should give men & women products", () => {
    const categories = {
      menWatches: true,
      womenWatches: true,
      boyWatches: false,
      girlWatches: false,
    };

    const menAndWomenWatches = filterProducts(products, categories);

    expect(menAndWomenWatches.length).toBe(2);
  });

  it("should give boys & girls products", () => {
    const categories = {
      menWatches: false,
      womenWatches: false,
      boyWatches: true,
      girlWatches: true,
    };

    const boysAndGirlsWatches = filterProducts(products, categories);

    expect(boysAndGirlsWatches.length).toBe(3);
  });

  it("should give All products when every category is false", () => {
    const categories = {
      menWatches: false,
      womenWatches: false,
      boyWatches: false,
      girlWatches: false,
    };

    const allWatches = filterProducts(products, categories);

    expect(allWatches.length).toBe(5);
  });
});
