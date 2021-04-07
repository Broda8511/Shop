<<<<<<< HEAD
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectProduct } from "../actions/itemAction";
import "../styles/productList.css";
import data from "../data/products.js";

class ProductListPage extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <>
        <form>
          <div className="products__list">
            {data.products.map((product) => (
              <ul
                key={product.id}
                onClick={() => this.props.selectProduct(product)}
              >
                <div className="product__list--card">
                  <div className="product__list--title">{product.name}</div>
                  <div className="product__list--image">
                    <img
                      className="product__list--pic"
                      src={product.image}
                      alt="console"
                    />
                  </div>
                  <div className="product__list--price">
                    Price: {product.price}$
                  </div>

                  <Link
                    className="product__list--button"
                    to={`/products/${product.title}`}
                  >
                    More info
                  </Link>
                </div>
              </ul>
            ))}
          </div>
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectProduct: selectProduct,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
=======
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectProduct } from "../actions/itemAction";
import "../styles/productList.css";
import data from "../data/products.js";

class ProductListPage extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <>
        <form>
          <div className="products__list">
            {data.products.map((product) => (
              <ul
                key={product.id}
                onClick={() => this.props.selectProduct(product)}
              >
                <div className="product__list--card">
                  <div className="product__list--title">{product.name}</div>
                  <div className="product__list--image">
                    <img
                      className="product__list--pic"
                      src={product.image}
                      alt="console"
                    />
                  </div>
                  <div className="product__list--price">
                    Price: {product.price}$
                  </div>

                  <Link
                    className="product__list--button"
                    to={`/products/${product.title}`}
                  >
                    More info
                  </Link>
                </div>
              </ul>
            ))}
          </div>
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectProduct: selectProduct,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
>>>>>>> e60820b (beta version)
