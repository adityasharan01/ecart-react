import { filterCategory } from "./filterCategory";

describe("filterCategory() tests", () => {
  it("should filter the in stock product", () => {
    const products = [
      {
        _id: "1",
        quantity: 1,
        price: 50,
        inStock: true,
      },
      {
        _id: "2",
        quantity: 2,
        price: 10,
        inStock: false,
      },
    ];

    const productsInStock = filterCategory(products, false);

    expect(productsInStock.length).toBe(1);
  });

  it("should filter the fast delivery products", () => {
    const products = [
      {
        _id: "1",
        quantity: 1,
        price: 50,
        inStock: true,
      },
      {
        _id: "2",
        quantity: 2,
        price: 10,
        inStock: false,
        fastDelivery: true,
      },
      {
        _id: "3",
        quantity: 3,
        price: 10,
        inStock: true,
        fastDelivery: true,
      },
    ];

    const fastDeliveryProducts = filterCategory(products, true, true);

    expect(fastDeliveryProducts.length).toBe(2);
  });

  it("should filter fast delivery + in stock products", () => {
    const products = [
      {
        _id: "1",
        quantity: 1,
        price: 50,
        inStock: true,
      },
      {
        _id: "2",
        quantity: 2,
        price: 10,
        inStock: false,
        fastDelivery: true,
      },
      {
        _id: "3",
        quantity: 3,
        price: 10,
        inStock: true,
        fastDelivery: true,
      },
    ];

    const fastDeliveryAndInStockProducts = filterCategory(
      products,
      false,
      true
    );

    expect(fastDeliveryAndInStockProducts.length).toBe(1);
  });
});
