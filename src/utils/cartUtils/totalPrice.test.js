import { totalPrice } from "./totalPrice";

it("should return total price based on quantity and price of each item", () => {
  const items = [
    {
      _id: "1",
      quantity: 1,
      price: 50,
    },
    {
      _id: "2",
      quantity: 2,
      price: 10,
    },
  ];

  const totaPrice = totalPrice(items);

  expect(totaPrice).toBe(70);
});
