<<<<<<< HEAD
import { ADD_PRODUCT_BASKET } from "./types";

export const addBasket = (productName) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: productName,
    });
  };
};
=======
import { ADD_PRODUCT_BASKET } from "./types";

export const addBasket = (productName) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: productName,
    });
  };
};
>>>>>>> e60820b (beta version)
