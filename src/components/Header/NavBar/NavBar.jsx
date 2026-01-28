import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav_container}>
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
    </div>
  );
};

export default NavBar;
