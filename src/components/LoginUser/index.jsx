import React, { Component } from "react";
import styles from "./login.module.scss";

const userData = {
  email: "",
  password: "",
};

function LoginSuccess(userdata) {
  return alert(`User with email:  ${userdata.email} and password:  ${userdata.password} login success`);
}

class LoginUser extends Component {
  state = structuredClone(userData);

  submitHandler = (e) => {
    const {email, password} = this.state
    e.preventDefault();
    LoginSuccess({email, password})
    this.setState({
      ...userData,
    });
  };

  handleLoginUser = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
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
          <button className={styles.btnLogin}>LOGIN</button>
        </form>
      </div>
    );
  }
}

export default LoginUser;
