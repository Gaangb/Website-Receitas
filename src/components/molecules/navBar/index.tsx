import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Button } from "../../atoms/button";

export function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleNavigate(path: string) {
    navigate(path);
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        <h1>Recipes BG</h1>
      </div>
      <div
        className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.menuItems} ${isMenuOpen ? styles.open : ""}`}>
        <Button
          text="Home"
          customClass="button_nav_bar"
          onClick={() => handleNavigate("/")}
        />
        <Button
          text="Search by name"
          customClass="button_nav_bar"
          onClick={() => handleNavigate("/search_by_name")}
        />
        <Button
          text="Search by letter"
          customClass="button_nav_bar"
          onClick={() => handleNavigate("/search_by_letter")}
        />
        <Button
          text="Search by ingredient"
          customClass="button_nav_bar"
          onClick={() => handleNavigate("/search_by_ingredient")}
        />
      </div>
    </nav>
  );
}
