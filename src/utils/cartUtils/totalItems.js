/**
 * to calculate total quantity of items on list
 * @param {list} list to calculate total from
 * @returns total quantity
 */
export const totalItemsInList = (list) => {
  return list.reduce((acc, curr) => acc + curr.quantity, 0);
};
