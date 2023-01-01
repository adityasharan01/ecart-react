import { priceFilter } from "./priceFilter";

describe("priceFilter() tests", () => {
  const products = [
    {
      _id: "1",
      price: 50,
    },
    {
      _id: "2",
      price: 100,
    },
    {
      _id: "3",
      price: 20,
    },
  ];

  it("should filter the products with given price", () => {
    const filterProducts = priceFilter(products, 70);

    expect(filterProducts.length).toBe(2);
  });
});
