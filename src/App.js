import React, { Component } from "react";
import { auth, handleUserProfile } from "./firebase/utilities";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { setCurrentUser } from "./actions/userActions";
import store from "./reducers/createStore";

//Layouts
import Shop from "./layouts/Shop";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

//Styles
import "./styles/App.css";

class App extends Component {
  authListener = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <header>{<Header />}</header>

            <section className="shop">{<Shop />}</section>

            <footer>{<Footer />}</footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
