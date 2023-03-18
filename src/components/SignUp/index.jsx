import React, { Component } from "react";
import styles from "./signup.module.scss";

const initialState = {
  firstname: "",
  lastname: "",
  displayname: "",
  email: "",
  password: "",
  confirmpassword: "",
  terms: false,
  joinAs: "buyer",
};

function signUpSuccess(initialstate) {
  return console.log(
    `firstname user: ${initialstate.firstname}, lastname: ${initialstate.lastname}, 
    displayname: ${initialstate.displayname}
    email: ${initialstate.email}
    password: ${initialstate.password}
    confirm_password: ${initialstate.confirmpassword}
    join as: ${initialstate.joinAs}
    `
  );
}

class SignUp extends Component {
  state = structuredClone(initialState);

  submitHandler = (e) => {
    const {
      firstname,
      lastname,
      displayname,
      email,
      password,
      confirmpassword,
      joinAs,
    } = this.state;
    e.preventDefault();
    signUpSuccess({
      firstname,
      lastname,
      displayname,
      email,
      password,
      confirmpassword,
      joinAs,
    });
    this.setState({ initialState });
  };

  handleSignUp = (e) => {
    const {
      target: { value, name, type, checked },
    } = e;

    const newValue = type === "checkbox" ? checked : value;
    const newState = {
      [name]: newValue,
    };
    this.setState(newState);
  };

  render() {
    const {
      firstname,
      lastname,
      displayname,
      email,
      password,
      confirmpassword,
      terms,
      joinAs,
    } = this.state;

    return (
      <div className={styles.containerSignUp}>
        <h1>CREATE AN ACCOUNT</h1>
        <p className={styles.pContainer}>
          We always keep your name and email adress private.
        </p>
        <form className={styles.formContainer} onSubmit={this.submitHandler}>
          <div>
            <input
              className={styles.inputField}
              placeholder="First Name"
              value={firstname}
              name="firstname"
              onChange={this.handleSignUp}
            />
            <input
              className={styles.inputField}
              placeholder="Last Name"
              name="lastname"
              value={lastname}
              onChange={this.handleSignUp}
            />
          </div>
          <div>
            <input
              className={styles.inputField}
              placeholder="Display Name"
              value={displayname}
              onChange={this.handleSignUp}
              name="displayname"
            />
            <input
              className={styles.inputField}
              placeholder="Email adress"
              value={email}
              name="email"
              onChange={this.handleSignUp}
            />
          </div>
          <div>
            <input
              className={styles.inputField}
              placeholder="Password"
              value={password}
              onChange={this.handleSignUp}
              type="password"
              name="password"
            />
            <input
              className={styles.inputField}
              placeholder="Password Confirmation"
              value={confirmpassword}
              onChange={this.handleSignUp}
              name="confirmpassword"
              type="password"
            />
          </div>

          <div className={styles.btnContainer}>
            <label className={styles.labelJoinAs}>
              <input
                type="radio"
                name="joinAs"
                value="buyer"
                onChange={this.handleSignUp}
                checked={joinAs === "buyer"}
              />
              Join As a Buyer
              <span className={styles.spanJoinAs}>I am looking a Name, Logo or Tagline for my business, brand or product.</span>
            </label>

            <label className={styles.labelJoinAs}>
              <input
                type="radio"
                name="joinAs"
                value="seller"
                onChange={this.handleSignUp}
                checked={joinAs === "seller"}
              />
              Join is a Creative or Marketplace Seller
              <span className={styles.spanJoinAs}>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</span>
            </label>
          </div>

          <div className={styles.btnContainerr}>
            <div className={styles.inputContainer}>
              <label className={styles.inputLabel}>
                <input
                  type="checkbox"
                  name="terms"
                  onChange={this.handleSignUp}
                  checked={terms}
                />{" "}
                Allow SquadHelp to send marketing/promotional offers from time
                to time
              </label>
            </div>
            <button className={styles.btnCreateAccount} disabled={!terms}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
