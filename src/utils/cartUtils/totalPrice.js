/**
 * to calculate total price of items on list
 * @param {list} list to calculate total from
 * @returns total price
 */
export const totalPrice = (list) => {
  return list.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
};
