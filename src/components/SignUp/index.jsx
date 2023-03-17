import React, { Component } from "react";
import styles from "./signup.module.scss";

class SignUp extends Component {
  render() {
    return (
      <div className={styles.containerSignUp}>
        <h1>CREATE AN ACCOUNT</h1>
        <p>We always keep your name and email adress private.</p>
        <form className={styles.formContainer}>
          <div>
            <input className={styles.inputField} />
            <input className={styles.inputField} />
          </div>
          <div>
            <input className={styles.inputField} />
            <input className={styles.inputField} />
          </div>
          <div>
            <input className={styles.inputField} />
            <input className={styles.inputField} placeholder="password" />
          </div>
          <button>Create Account</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
