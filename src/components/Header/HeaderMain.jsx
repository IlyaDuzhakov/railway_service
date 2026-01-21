import styles from "./HeaderMain.module.css";
import NavBar from "./NavBar";

const HeaderMain = () => {

  return (
    <div className={styles.headerWrapper}>
      <NavBar />
      <div className="headerContent">
        <h1>Вся жизнь - путешествие!</h1>
        <form action="">
          <div>
            <input type="text" />
            <img src="./img/icons/update.svg" alt="" />
            <input type="text" />
          </div>
          <div>
            <input type="date" />
            <input type="date" />
          </div>
          <button>найти билеты</button>
        </form>
      </div>
    </div>
  );
};

export default HeaderMain;
