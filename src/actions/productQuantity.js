<<<<<<< HEAD
import { ADD_QUANTITY, REMOVE_QUANTITY } from "./types";

export const productQuantity = (action, name) => {
  return (dispatch) => {
    dispatch({
      type: action === "add" ? ADD_QUANTITY : REMOVE_QUANTITY,
      payload: name,
    });
  };
};
=======
import { ADD_QUANTITY, REMOVE_QUANTITY } from "./types";

export const productQuantity = (action, name) => {
  return (dispatch) => {
    dispatch({
      type: action === "add" ? ADD_QUANTITY : REMOVE_QUANTITY,
      payload: name,
    });
  };
};
>>>>>>> e60820b (beta version)
