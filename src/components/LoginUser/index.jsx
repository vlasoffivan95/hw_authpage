import React, { Component } from "react";
import styles from "./login.module.scss";

const userData = {
  email: "",
  password: "",
  remember: false,
};

function LoginSuccess(userdata) {
  return alert(
    `User with email:  ${userdata.email} and password:  ${userdata.password} login success`
  );
}

class LoginUser extends Component {
  state = structuredClone(userData);

  submitHandler = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    LoginSuccess({ email, password });
    this.setState({
      ...userData,
    });
  };

  handleLoginUser = (e) => {
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
    const { email, password, remember } = this.state;
    return (
      <div className={styles.loginContainer}>
        <h1>LOGIN TO YOUR ACCOUNT</h1>

        <form className={styles.inputContainer} onSubmit={this.submitHandler}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            className={styles.inputField}
            onChange={this.handleLoginUser}
          />
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleLoginUser}
            className={styles.inputField}
          />
          <div className={styles.containlabels}>
          <label>
            <input
              type="checkbox"
              name="remember"
              checked={remember}
              onChange={this.handleLoginUser}
            />
            <a className={styles.rdBtn}> Remember me </a>
            
          </label>
          <a className={styles.premember}>Forgot password</a>
          </div>
          <button className={styles.btnLogin} disabled={!remember}>
            LOGIN
          </button>
        </form>
      </div>
    );
  }
}

export default LoginUser;
