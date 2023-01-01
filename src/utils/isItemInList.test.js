import { isItemInList } from "./isItemInList";

describe("isItemInList() test", () => {
  const list = [
    {
      _id: "1",
    },
    {
      _id: "2",
    },
  ];

  it("should return true if item exists in list", () => {
    const item = {
      _id: "1",
    };

    const itemInList = isItemInList(item._id, list);

    expect(itemInList).toBe(true);
  });

  it("should return false if item is not exists in list", () => {
    const item = {
      _id: "4",
    };

    const itemInList = isItemInList(item._id, list);

    console.log({ itemInList });

    expect(itemInList).toBe(false);
  });
});
