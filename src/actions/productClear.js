import { CLEAR_PRODUCT } from "./types";

export const productClear = (action, name) => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_PRODUCT,
      payload: name,
    });
  };
};
