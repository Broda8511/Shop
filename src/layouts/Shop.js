<<<<<<< HEAD
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

//!30.09.
// import React from 'react';
// import {Route, Switch, Redirect} from 'react-router-dom';
// import { connect } from 'react-redux';
// //Pages
// import HomePage from '../pages/HomePage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';

// //Components
// import Product from '../components/Product';

// const Shop = (props) => {
//   const {currentUser} = props;
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/register" render={() => currentUser ? <Redirect to="/" /> : <RegisterPage/>} />
//           <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : <LoginPage/>} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
// }

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser,
// });

// export default connect(mapStateToProps)(Shop);

//!03.09 przed zmianą na CONNECT
// import React from 'react';
// import {Route, Switch, Redirect} from 'react-router-dom';
// //Pages
// import HomePage from '../pages/HomePage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';

// //Components
// import Product from '../components/Product';

// const Shop = (props) => {
//   const {currentUser} = props;
//   console.log(currentUser);
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/register" render={() => currentUser ? <Redirect to="/" /> : <RegisterPage/>} />
//           <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : <LoginPage/>} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
// }

// export default Shop;

//!03.09
// import React from 'react';
// import {Route, Switch, Redirect} from 'react-router-dom';
// //Pages
// import HomePage from '../pages/HomePage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';

// //Components
// import Product from '../components/Product';

// const Shop = (props) => {
//   const {currentUser} = props;
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/register" render={() => currentUser ? <Redirect to="/" /> : <RegisterPage/>} />
//           <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : <LoginPage/>} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
// }

// export default Shop;

//!28.28 v03

// import React, { Component} from 'react';
// import {Route, Switch} from 'react-router-dom';
// import { auth } from '../firebase/utilities';
// //Pages
// import HomePage from '../pages/HomePage';
// // import ProductsPage from '../pages/ProductsPage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';

// //Components
// import Product from '../components/Product';

// const initialState = {
//   currentUser: null
// }

// class Shop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ...initialState
//     };
//   }

//   authListener = null;

//   componentDidMount() {
//     this.authListener = auth.onAuthStateChanged(userAuth => {
//       if (!userAuth) return;

//       this.setState({
//         currentUser: userAuth
//       });
//     });
//   }

//   componentWillUnmount() {
//     this.authListener();
//   }

//   render () {
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           {/* <Route path="/product/+props.price" component={ProductsPage} /> */}
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/login" component={LoginPage} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
//   }

// }

// export default Shop;

//!28.08 v02

// import React, { Component} from 'react';
// import {Route, Switch} from 'react-router-dom';
// import { auth } from '../firebase/utilities';
// //Pages
// import HomePage from '../pages/HomePage';
// // import ProductsPage from '../pages/ProductsPage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';

// //Components
// import Product from '../components/Product';

// class Shop extends Component {

//   render () {
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           {/* <Route path="/product/+props.price" component={ProductsPage} /> */}
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/login" component={LoginPage} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
//   }

// }

// export default Shop;

//!kopia działająca 28.08.2020
// import React from 'react';
// import {Route, Switch} from 'react-router-dom';
// // import { auth } from '../firebase/utilities';
// //Pages
// import HomePage from '../pages/HomePage';
// // import ProductsPage from '../pages/ProductsPage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';

// //Components
// import Product from '../components/Product';

// const Shop = () => {
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           {/* <Route path="/product/+props.price" component={ProductsPage} /> */}
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/login" component={LoginPage} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
// }

// export default Shop;

//!koniec

// import React from 'react';
// import {Route, Switch} from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import ProductsPage from '../pages/ProductsPage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import ProductPage from '../pages/ProductPage';
// import CartPage from '../pages/CartPage';

// const Shop = () => {
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           <Route path="/product/:id" component={ProductsPage} />
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={ProductPage} />
//           <Route path="/cart" component={CartPage} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
// }

// export default Shop;
=======
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

//!30.09.
// import React from 'react';
// import {Route, Switch, Redirect} from 'react-router-dom';
// import { connect } from 'react-redux';
// //Pages
// import HomePage from '../pages/HomePage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';

// //Components
// import Product from '../components/Product';

// const Shop = (props) => {
//   const {currentUser} = props;
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/register" render={() => currentUser ? <Redirect to="/" /> : <RegisterPage/>} />
//           <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : <LoginPage/>} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
// }

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser,
// });

// export default connect(mapStateToProps)(Shop);

//!03.09 przed zmianą na CONNECT
// import React from 'react';
// import {Route, Switch, Redirect} from 'react-router-dom';
// //Pages
// import HomePage from '../pages/HomePage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';

// //Components
// import Product from '../components/Product';

// const Shop = (props) => {
//   const {currentUser} = props;
//   console.log(currentUser);
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/register" render={() => currentUser ? <Redirect to="/" /> : <RegisterPage/>} />
//           <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : <LoginPage/>} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
// }

// export default Shop;

//!03.09
// import React from 'react';
// import {Route, Switch, Redirect} from 'react-router-dom';
// //Pages
// import HomePage from '../pages/HomePage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';

// //Components
// import Product from '../components/Product';

// const Shop = (props) => {
//   const {currentUser} = props;
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/register" render={() => currentUser ? <Redirect to="/" /> : <RegisterPage/>} />
//           <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : <LoginPage/>} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
// }

// export default Shop;

//!28.28 v03

// import React, { Component} from 'react';
// import {Route, Switch} from 'react-router-dom';
// import { auth } from '../firebase/utilities';
// //Pages
// import HomePage from '../pages/HomePage';
// // import ProductsPage from '../pages/ProductsPage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';

// //Components
// import Product from '../components/Product';

// const initialState = {
//   currentUser: null
// }

// class Shop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ...initialState
//     };
//   }

//   authListener = null;

//   componentDidMount() {
//     this.authListener = auth.onAuthStateChanged(userAuth => {
//       if (!userAuth) return;

//       this.setState({
//         currentUser: userAuth
//       });
//     });
//   }

//   componentWillUnmount() {
//     this.authListener();
//   }

//   render () {
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           {/* <Route path="/product/+props.price" component={ProductsPage} /> */}
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/login" component={LoginPage} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
//   }

// }

// export default Shop;

//!28.08 v02

// import React, { Component} from 'react';
// import {Route, Switch} from 'react-router-dom';
// import { auth } from '../firebase/utilities';
// //Pages
// import HomePage from '../pages/HomePage';
// // import ProductsPage from '../pages/ProductsPage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';

// //Components
// import Product from '../components/Product';

// class Shop extends Component {

//   render () {
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           {/* <Route path="/product/+props.price" component={ProductsPage} /> */}
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/login" component={LoginPage} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
//   }

// }

// export default Shop;

//!kopia działająca 28.08.2020
// import React from 'react';
// import {Route, Switch} from 'react-router-dom';
// // import { auth } from '../firebase/utilities';
// //Pages
// import HomePage from '../pages/HomePage';
// // import ProductsPage from '../pages/ProductsPage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import CartPage from '../pages/CartPage';
// import LoginPage from '../pages/LoginPage';

// //Components
// import Product from '../components/Product';

// const Shop = () => {
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           {/* <Route path="/product/+props.price" component={ProductsPage} /> */}
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={Product} />
//           <Route path="/cart" component={CartPage} />
//           <Route path="/login" component={LoginPage} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
// }

// export default Shop;

//!koniec

// import React from 'react';
// import {Route, Switch} from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import ProductsPage from '../pages/ProductsPage';
// import ProductListPage from '../pages/ProductListPage';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
// import ErrorPage from '../pages/ErrorPage';
// import ProductPage from '../pages/ProductPage';
// import CartPage from '../pages/CartPage';

// const Shop = () => {
//     return (
//       <>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/products" component={ProductListPage} />
//           <Route path="/product/:id" component={ProductsPage} />
//           <Route path="/contact" component={ContactPage} />
//           <Route path="/about" component={AboutPage} />
//           <Route path="/product" component={ProductPage} />
//           <Route path="/cart" component={CartPage} />
//           <Route component={ErrorPage} />
//         </Switch>
//       </>
//     );
// }

// export default Shop;
>>>>>>> e60820b (beta version)
