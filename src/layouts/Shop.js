import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
//Pages
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

//Components
import Product from "../components/Product";

const Shop = (props) => {
  const { currentUser } = props;
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductListPage} />
        <Route exact path="/products/:id" component={Product} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />

        <Route path="/cart" component={CartPage} />
        <Route
          path="/register"
          render={() => (currentUser ? <Redirect to="/" /> : <RegisterPage />)}
        />
        <Route
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
        />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Shop);
