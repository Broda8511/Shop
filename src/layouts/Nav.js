import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import img from "../images/logo.png";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { auth } from "../firebase/utilities";

const list = [
  {
    name: "Start",
    path: "/",
    image: <ion-icon name="home-outline"></ion-icon>,
    exact: true,
  },
  {
    name: "Products",
    path: "/products",
    image: <ion-icon name="pricetags-outline"></ion-icon>,
  },
  {
    name: "About",
    path: "/about",
    image: <ion-icon name="bulb-outline"></ion-icon>,
  },
  {
    name: "Contact",
    path: "/contact",
    image: <ion-icon name="call-outline"></ion-icon>,
  },
];

const Nav = (props) => {
  const { currentUser } = props;
  const menu = list.map((item) => (
    <li className="nav__li" key={item.name}>
      <NavLink {...props} to={item.path}>
        {item.image} {item.name}
      </NavLink>
    </li>
  ));

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <nav>
      <ul>
        <img className="imgLogo" src={img} alt="logo" />
        {menu}

        {currentUser && (
          <NavLink to="/login">
            <div className="nav__login" onClick={() => auth.signOut()}>
              <span className="nav__login-icon">
                <ion-icon name="exit-outline"></ion-icon>
              </span>
              Log out
            </div>
          </NavLink>
        )}

        {!currentUser && (
          <NavLink to="/register">
            <div className="nav__login">
              <span className="nav__login-icon">
                <ion-icon name="person-add-outline"></ion-icon>
              </span>
              Register
            </div>
          </NavLink>
        )}

        {!currentUser && (
          <NavLink to="/login">
            <div className="nav__login">
              <span className="nav__login-icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              Login
            </div>
          </NavLink>
        )}

        <NavLink to="/cart">
          <div className="nav__cart">
            <span className="nav__cart-icon">
              <ion-icon name="cart-outline">Cart</ion-icon>
            </span>{" "}
            <span className="nav__cart-items">
              {props.basketProps.basketNumbers}
            </span>
            <span className="nav__cart-price">
              {props.basketProps.cartCost}$
            </span>
          </div>
        </NavLink>
      </ul>
    </nav>
  );
};

Nav.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ basketState, user }) => ({
  basketProps: basketState,
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, { getNumbers })(Nav);
