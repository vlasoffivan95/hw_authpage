import React from "react";
import styles from "./header.module.scss";
import logo from "./logo.webp";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";




function Header() {
  const location = useLocation();
  return (
    <header>
      <div className={styles.header}>
        <img src={logo} alt="logo" />
        <button className={styles.btn}>
          <Link to={location.pathname === "/signup" ? "/login" : "/signup"} className = {styles.link}>
            {location.pathname === '/signup' ? "Login" : "SignUp"}
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
