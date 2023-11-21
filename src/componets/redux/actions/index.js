//Add item to cart
export const addCart = (product) => {
  return {
    type: "ADD ITEM",
    payload: product,
  };
};

//Delete item to cart
export const deleteCart = (product) => {
  return {
    type: "DELETE ITEM",
    payload: product,
  };
};
