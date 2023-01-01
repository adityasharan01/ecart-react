import { rateProducts } from "./rateProducts";

describe("rateProducts() tests", () => {
  const products = [
    {
      _id: "1",
      rate: 1,
    },
    {
      _id: "2",
      rate: 3,
    },
    {
      _id: "3",
      rate: 2,
    },
  ];

  it("should filter the products with given rating", () => {
    const filterProducts = rateProducts(products, 2);

    expect(filterProducts.length).toBe(2);
  });
});
