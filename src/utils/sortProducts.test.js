import { sortProducts } from "./sortProducts";

describe("sortProducts() tests", () => {
  const products = [
    {
      _id: "1",
      price: 500,
    },
    {
      _id: "2",
      price: 200,
    },
    {
      _id: "3",
      price: 300,
    },
  ];

  it("should sort the products low_to_high", () => {
    const expectedProducts = [
      {
        _id: "2",
        price: 200,
      },
      {
        _id: "3",
        price: 300,
      },
      {
        _id: "1",
        price: 500,
      },
    ];

    const sortedProducts = sortProducts(products, "low_to_high");

    expect(sortedProducts).toEqual(expectedProducts);
  });

  it("should sort the products high_to_low", () => {
    const expectedProducts = [
      {
        _id: "1",
        price: 500,
      },
      {
        _id: "3",
        price: 300,
      },
      {
        _id: "2",
        price: 200,
      },
    ];

    const sortedProducts = sortProducts(products, "high_to_low");

    expect(sortedProducts).toEqual(expectedProducts);
  });
});
