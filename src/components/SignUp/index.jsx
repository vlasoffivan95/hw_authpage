import React, { Component } from "react";
import styles from "./signup.module.scss";

const initialState = {
  firstname: "",
  lastname: "",
  displayname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

function signUpSuccess(initialstate) {
  return console.log(
    `firstname user: ${initialstate.firstname}, lastname: ${initialstate.lastname}, 
    displayname: ${initialstate.displayname}
    email: ${initialstate.email}
    password: ${initialstate.password}
    confirm_password: ${initialstate.confirmpassword}
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
    } = this.state;
    e.preventDefault();
    signUpSuccess({
      firstname,
      lastname,
      displayname,
      email,
      password,
      confirmpassword,
    });
    this.setState({ initialState });
  };


  handleSignUp = (e) => {
    
  }



  render() {
    return (
      <div className={styles.containerSignUp}>
        <h1>CREATE AN ACCOUNT</h1>
        <p className={styles.pContainer}>
          We always keep your name and email adress private.
        </p>
        <form className={styles.formContainer} onSubmit={this.submitHandler}>
          <div>
            <input className={styles.inputField} placeholder="First Name" />
            <input className={styles.inputField} placeholder="Last Name" />
          </div>
          <div>
            <input className={styles.inputField} placeholder="Display Name" />
            <input className={styles.inputField} placeholder="Email adress" />
          </div>
          <div>
            <input className={styles.inputField} placeholder="Password" />
            <input
              className={styles.inputField}
              placeholder="Password Confirmation"
            />
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.inputContainer}>
              <label className={styles.inputLabel}>
                <input
                  type="checkbox"
                  name="remember"
                  onChange={this.handleLoginUser}
                />{" "}
                Allow SquadHelp to send marketing/promotional offers from time
                to time
              </label>
            </div>
            <button className={styles.btnCreateAccount}>Create Account</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
