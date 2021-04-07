import React, { useEffect } from "react";
import { connect } from "react-redux";
import { productQuantity } from "../actions/productQuantity";
import { productClear } from "../actions/productClear";
import { clearAllProducts } from "../actions/clearAll";

import "../styles/thanks.css";
import products from "../data/products";

function ThankYouPage({ clearAllProducts }) {
  useEffect(() => {
    clearAllProducts("clearAll", console.log(products), products);
  }, [clearAllProducts]);

  setTimeout(function () {
    window.location.replace("/");
  }, 2000);

  return (
    <>
      <div className="thanks">
        <div className="thanks__header">
          <h2>Thank You!</h2>
        </div>

        <div className="thanks__info">
          Thank You for buying our products.
          <p>Have a great day!</p>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, {
  clearAllProducts,
  productQuantity,
  productClear,
})(ThankYouPage);
