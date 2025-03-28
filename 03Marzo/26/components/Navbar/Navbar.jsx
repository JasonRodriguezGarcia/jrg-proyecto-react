import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link to="/">Inicio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/suscribe">Suscribirse</Link>
        <Link to="/Video">Video</Link>
    </nav>
  );
};

export default Navbar;