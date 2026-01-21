import styles from "./HeaderMain.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <a href="#about">О нас</a>
      <a href="#howWorks">Как это работает</a>
      <a href="#reviews">Отзывы</a>
      <a href="#contacts">Контакты</a>
    </div>
  );
};

export default NavBar;
