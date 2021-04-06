import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
  CLEAR_PRODUCT,
} from "../actions/types";

import products from "../data/products";
console.log(products);
const initialState = {
  basketNumbers: 0,
  cartCost: 0,

  products: {
    PSX: {
      id: 1,
      name: "PSX Classic",
      title: "PSX",
      price: 15.0,
      image: require("../images/psxc.jpg"),
      description: "Lorem ipsum",
      quantity: 0,
      stock: 10,
      inCart: false,
    },
    PS2: {
      id: 2,
      name: "PS2",
      title: "PS2",
      price: 49.0,
      image: require("../images/ps2.jpg"),
      description: "Lorem ipsum",
      quantity: 0,
      stock: 10,
      inCart: false,
    },
    PS3: {
      id: 3,
      name: "PS3",
      title: "PS3",
      price: 59.0,
      image: require("../images/ps3.jpg"),
      description: "Lorem ipsum",
      quantity: 0,
      stock: 10,
      inCart: false,
    },
    PS4: {
      id: 4,
      name: "PS4",
      title: "PS4",
      price: 69.0,
      image: require("../images/ps4.jpg"),
      description: "Lorem ipsum",
      quantity: 0,
      stock: 10,
      inCart: false,
    },
    nvidiaShield: {
      id: 5,
      name: "nvidia Shield",
      title: "nvidiaShield",
      price: 59.0,
      image: require("../images/nvidia.jpg"),
      description: "Lorem ipsum",
      quantity: 0,
      stock: 10,
      inCart: false,
    },
    Pegasus: {
      id: 6,
      name: "Pegasus",
      title: "Pegasus",
      price: 99.0,
      image: require("../images/pegasus.jpg"),
      description: "Lorem ipsum",
      quantity: 0,
      stock: 10,
      inCart: false,
    },
    nintendoSwitch: {
      id: 7,
      name: "Nintendo Switch",
      title: "nintendoSwitch",
      price: 49.0,
      image: require("../images/switch.jpg"),
      description: "Lorem ipsum",
      quantity: 0,
      stock: 10,
      inCart: false,
    },
    Xbox: {
      id: 8,
      name: "Xbox",
      title: "Xbox",
      price: 59.0,
      image: require("../images/xbox.jpg"),
      description: "Lorem ipsum",
      quantity: 0,
      stock: 10,
      inCart: false,
    },
    ps5: {
      id: 9,
      title: "ps5",
      name: "PS5",
      price: 359.0,
      image: require("../images/ps5.jpg"),
      description: "Lorem ipsum. Lorem  Lorem ipsum, Lorem ipsum, Lorem ipsum",
      quantity: 0,
      stock: 10,
      inCart: false,
    },
    xboxx: {
      id: 10,
      title: "xboxx",
      name: "Xbox series x",
      price: 369.0,
      image: require("../images/xboxx.jpg"),
      description: "Lorem ipsum. Lorem  Lorem ipsum, Lorem ipsum, Lorem ipsum",
      quantity: 0,
      stock: 10,
      inCart: false,
    },
  },
};

const basketReducer = (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] };
      productSelected.quantity += 1;
      productSelected.stock -= 1;
      productSelected.inCart = true;
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };

    case ADD_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.quantity += 1;
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case REMOVE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let newCartCost = 0;
      let newBasket = 0;
      if (productSelected.quantity === 0) {
        productSelected.quantity = 0;
        newCartCost = state.cartCost;
        newBasket = state.basketNumbers;
      } else {
        productSelected.quantity -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price;
        newBasket = state.basketNumbers - 1;
      }
      return {
        ...state,
        basketNumbers: newBasket,
        cartCost: newCartCost,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case CLEAR_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let quantityOld = productSelected.quantity;
      productSelected.quantity = 0;
      productSelected.inCart = false;
      return {
        ...state,
        basketNumbers: state.basketNumbers - quantityOld,
        cartCost: state.cartCost - quantityOld * productSelected.price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    default:
      return state;
  }
};

export default basketReducer;
