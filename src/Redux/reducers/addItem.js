const addItem = [];
const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];

    case "DELITEM":
      return (state = state.filter((product) => {
        return product.id !== action.payload.id;
      }));

    
    default:
      return state;
  }
};
// console.log(addItems);
export default addItems;
