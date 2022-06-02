/**
 * funtion to check whether item is exists in list
 * @param {id} pass the item id you want to check for
 * @param {list} list is the list in which you want to check
 * @returns boolean true/false based on if item is present list or not
 */

export const isItemInList = (id, list) => {
  return list?.some((item) => item._id === id);
};
