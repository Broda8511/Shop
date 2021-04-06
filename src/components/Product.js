import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/product.css";
import { connect } from "react-redux";

import { addBasket } from "../actions/addAction";

class Product extends Component {
  render() {
    return (
      <>
        <div className="product__page">
          <div className="product__page--title">
            <h2>{this.props.product.name}</h2>
          </div>

          <div className="product__page--price">
            <span>PRICE: {this.props.product.price}$</span>
          </div>

          <div className="product__page--quantity">
            <span>STOCK: {this.props.product.stock}</span>
          </div>

          <div className="product__page--image">
            <img
              className="product__page--pic"
              src={this.props.product.image}
              alt="product"
            />
          </div>

          <div className="product__page--info">
            <span>{this.props.product.description}</span>
          </div>

          <div className="product__page--cart">
            <button
              onClick={() => this.props.addBasket(this.props.product.title)}
              className="product__page--button"
            >
              Add to cart <ion-icon name="cart-outline"></ion-icon>
            </button>
          </div>

          <Link className="product__page--link" to="/products">
            Back to products list
          </Link>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { product: state.active };
}

export default connect(mapStateToProps, { addBasket })(Product);
