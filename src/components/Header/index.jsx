import React from "react";
import styles from "./header.module.scss";
import logo from './logo.webp'

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <img src={logo} alt='logo'/>
        <button className = {styles.btn}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
