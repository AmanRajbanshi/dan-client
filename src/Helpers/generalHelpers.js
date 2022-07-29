export const calculateTotal = (items) => {
  const total = items.reduce((totalPrice, currentItem) => {
    return totalPrice + currentItem.count * parseInt(currentItem.product.price);
  }, 0);
  return total;
};

export const findProductById = (items, id) => {
  console.log(items);
  const singleItem = items.find((item) => {
    return item._id === id;
  });

  return singleItem;
};

export const filterByPrice = (items, filterValue) => {
  if (filterValue === "default") {
    return items;
  }
  const filteredValue = items.sort((itemA, itemB) => {
    return filterValue === "min"
      ? parseInt(itemA.price) - parseInt(itemB.price)
      : parseInt(itemB.price) - parseInt(itemA.price);
  });

  return filteredValue;
};
