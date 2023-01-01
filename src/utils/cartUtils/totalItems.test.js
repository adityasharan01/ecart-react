import { totalItemsInList } from "./totalItems";

it("should return the total items from list", () => {
  const items = [
    {
      _id: "1",
      quantity: 1,
    },
    {
      _id: "2",
      quantity: 2,
    },
  ];

  const totalItems = totalItemsInList(items);

  expect(totalItems).toBe(3);
});
