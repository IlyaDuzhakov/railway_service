import React from "react";
import styles from "./BurgerMenu.module.css";
import { useState } from "react";

const BurgerMenu = () => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className={styles.burger_menu}>
      <div className={styles.toggle} onClick={()=> {
        setShowContent((prev)=> !prev)
      }}>
        <span className={showContent === true ? `${styles.line} ${styles.first_line}` : styles.line}></span>
        <span className={showContent === true ? `${styles.line} ${styles.second_line}` : styles.line}></span>
        <span className={showContent === true ? `${styles.line} ${styles.third_line}` : styles.line }></span>
      </div>
      {showContent === true ? (
        <div className={styles.menu_content}>
          <a className={styles.nav_text} href="#about">
            О нас
          </a>
          <a className={styles.nav_text} href="#howWorks">
            Как это работает
          </a>
          <a className={styles.nav_text} href="#reviews">
            Отзывы
          </a>
          <a className={styles.nav_text} href="#contacts">
            Контакты
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BurgerMenu;
