export const selectProduct = (product) => {
  return {
    type: "ITEM_SELECTED",
    payload: product,
  };
};
