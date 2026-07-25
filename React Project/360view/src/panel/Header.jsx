import React from "react";
import styles from "../style/Header.module.css";

const Header = () => {
  return (
    <div className="header">
      <div className={styles.header_container}>
        <img src="https://via.placeholder.com/150" alt="Test Image" />

        <h1>360 View Application</h1>

        <a href="#">Home</a>
        <a href="#">Home</a>
      </div>
    </div>
  );
};

export default Header;
