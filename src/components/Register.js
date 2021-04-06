import React, { Component } from "react";
import { auth, handleUserProfile } from "../firebase/utilities";
import InputForm from "../forms/input/input.js";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: [],
};

class Register extends Component {
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

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      const err = [`Password don't match`];
      this.setState({
        errors: err,
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
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
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;

    return (
      <div className="signIn">
        <form onSubmit={this.handleFormSubmit}>
          <InputForm
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            onChange={this.handleChange}
          />

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

          <InputForm
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={this.handleChange}
          />

          {errors.length > 0 && (
            <div className="sign__error">
              <ul>
                {errors.map((err, index) => {
                  return <li key={index}>{err}</li>;
                })}
              </ul>
            </div>
          )}

          <button type="submit" className="sign__button">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
