export const ADDITEM = "ADDITEM";
export const DELETEITEM = "DELETEITEM";

//Add item to cart
export const addCart = (product) => {
  return {
    type: ADDITEM,
    payload: product,
  };
};

//Delete item to cart
export const deleteCart = (product) => {
  return {
    type: DELETEITEM,
    payload: product,
  };
};
