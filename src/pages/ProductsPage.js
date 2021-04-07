import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";
import "../styles/products.css";

const ProductsPage = (props, product, basketReducer) => {
  return (
    <>
      <div className="product">
        <div className="product__image">
          <Link
            to={`/products/${props.title}`}
            key={props.id}
            name={props.name}
            title={props.title}
            price={props.price}
            image={props.image}
            description={props.description}
            quantity={props.quantity}
            stock={product.stock}
            incart={props.inCart}
          >
            <img className="product__pic" src={props.image} alt="console" />
            {props.product}
          </Link>
        </div>

        <div className="product__title">{props.name}</div>
        <div className="product__price">{props.price}$</div>
        <div className="product__cart">
          <button
            onClick={() => props.addBasket(props.title)}
            className="product__button"
          >
            <ion-icon name="cart-outline"></ion-icon>
          </button>
        </div>
      </div>
    </>
  );
};

export default connect(null, { addBasket })(ProductsPage);
