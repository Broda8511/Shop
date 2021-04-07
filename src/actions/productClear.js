<<<<<<< HEAD
import { CLEAR_PRODUCT } from "./types";

export const productClear = (action, name) => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_PRODUCT,
      payload: name,
    });
  };
};
=======
import { CLEAR_PRODUCT } from "./types";

export const productClear = (action, name) => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_PRODUCT,
      payload: name,
    });
  };
};
>>>>>>> e60820b (beta version)
