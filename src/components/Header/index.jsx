import React from "react";
import styles from "./header.module.scss";
import logo from './logo.webp'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt='logo'/>
      </div>
    </header>
  );
};

export default Header;
