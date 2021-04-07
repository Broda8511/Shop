<<<<<<< HEAD
import React from "react";
import { Fragment } from "react";
import { productQuantity } from "../actions/productQuantity";
import { productClear } from "../actions/productClear";
import "../styles/cart.css";

import { connect } from "react-redux";

function CartPage({ props, basketProps, productQuantity, productClear }) {
  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function (item) {
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
  });

  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment key={index}>
        <div className="cart__wrap">
          <div className="cart__photo">
            <img className="cart__image" src={product.image} alt="console" />
          </div>
          <div className="cart__title">{product.name}</div>
          <div className="cart__price">{product.price}$</div>
          <div className="cart__quantity">
            <div
              onClick={() => productQuantity("remove", product.title)}
              className="cart__remove"
            >
              <ion-icon name="remove-outline"></ion-icon>
            </div>{" "}
            {product.quantity}{" "}
            <div
              onClick={() => productQuantity("add", product.title)}
              className="cart__add"
            >
              <ion-icon className="cart__add" name="add-outline"></ion-icon>
            </div>
          </div>
          <div className="cart__totalPrice">
            {product.price * product.quantity}$
          </div>
          <div
            className="cart__delete"
            onClick={() => productClear("clearAll", product.title)}
          >
            <ion-icon name="trash-outline"></ion-icon>
          </div>
        </div>
      </Fragment>
    );
  });

  return (
    <>
      <div className="cart__header">
        <h2>Cart</h2>
      </div>

      <div className="cart">
        <div className="cart__all">
          <div className="cart__table">
            <div className="cart__table-image">Photo</div>
            <div className="cart__table-title">Title</div>
            <div className="cart__table-price">Price</div>
            <div className="cart__table-quantity">Quantity</div>
            <div className="cart__table-totalPrice">Total</div>
            <div className="cart__table-delete">Delete</div>
          </div>
          {productsInCart}
          <div className="cart__total">
            <div className="cart__total-quantity">
              Total items: {basketProps.basketNumbers}
            </div>
            <div className="cart__total-price">
              Total price: {basketProps.cartCost}$
            </div>
            <div className="cart__checkout">
              <button className="checkout__button" type="submit">
                Proceed{" "}
                <ion-icon
                  name="arrow-redo-circle-outline"
                  className="checkout__icon"
                ></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, productClear })(
  CartPage
);
=======
import React from "react";
import { Fragment } from "react";
import { productQuantity } from "../actions/productQuantity";
import { productClear } from "../actions/productClear";
import "../styles/cart.css";

import { connect } from "react-redux";

function CartPage({ props, basketProps, productQuantity, productClear }) {
  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function (item) {
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
  });

  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment key={index}>
        <div className="cart__wrap">
          <div className="cart__photo">
            <img className="cart__image" src={product.image} alt="console" />
          </div>
          <div className="cart__title">{product.name}</div>
          <div className="cart__price">{product.price}$</div>
          <div className="cart__quantity">
            <div
              onClick={() => productQuantity("remove", product.title)}
              className="cart__remove"
            >
              <ion-icon name="remove-outline"></ion-icon>
            </div>{" "}
            {product.quantity}{" "}
            <div
              onClick={() => productQuantity("add", product.title)}
              className="cart__add"
            >
              <ion-icon className="cart__add" name="add-outline"></ion-icon>
            </div>
          </div>
          <div className="cart__totalPrice">
            {product.price * product.quantity}$
          </div>
          <div
            className="cart__delete"
            onClick={() => productClear("clearAll", product.title)}
          >
            <ion-icon name="trash-outline"></ion-icon>
          </div>
        </div>
      </Fragment>
    );
  });

  return (
    <>
      <div className="cart__header">
        <h2>Cart</h2>
      </div>

      <div className="cart">
        <div className="cart__all">
          <div className="cart__table">
            <div className="cart__table-image">Photo</div>
            <div className="cart__table-title">Title</div>
            <div className="cart__table-price">Price</div>
            <div className="cart__table-quantity">Quantity</div>
            <div className="cart__table-totalPrice">Total</div>
            <div className="cart__table-delete">Delete</div>
          </div>
          {productsInCart}
          <div className="cart__total">
            <div className="cart__total-quantity">
              Total items: {basketProps.basketNumbers}
            </div>
            <div className="cart__total-price">
              Total price: {basketProps.cartCost}$
            </div>
            <div className="cart__checkout">
              <button className="checkout__button" type="submit">
                Proceed{" "}
                <ion-icon
                  name="arrow-redo-circle-outline"
                  className="checkout__icon"
                ></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, productClear })(
  CartPage
);
>>>>>>> e60820b (beta version)
