<<<<<<< HEAD
import React, { Component } from "react";
import { signInWithGoogle, auth } from "../firebase/utilities";
import InputForm from "./../forms/input/input.js";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="signIn">
        <form onSubmit={this.handleSubmit}>
          <InputForm
            type="text"
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={this.handleChange}
          />

          <InputForm
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
          />

          <button type="submit" className="log__button">
            Login
          </button>
        </form>

        <form onSubmit={this.handleSubmit}>
          <div>
            <button onClick={signInWithGoogle} className="google__button">
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
=======
import React, { Component } from "react";
import { signInWithGoogle, auth } from "../firebase/utilities";
import InputForm from "./../forms/input/input.js";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="signIn">
        <form onSubmit={this.handleSubmit}>
          <InputForm
            type="text"
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={this.handleChange}
          />

          <InputForm
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
          />

          <button type="submit" className="log__button">
            Login
          </button>
        </form>

        <form onSubmit={this.handleSubmit}>
          <div>
            <button onClick={signInWithGoogle} className="google__button">
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
>>>>>>> e60820b (beta version)
