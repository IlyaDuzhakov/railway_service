import styles from "./HeaderMain.module.css";
import HeaderTop from "../HeaderTop/HeaderTop.jsx";
import SearchForm from "../SearchForm.jsx";

const HeaderMain = () => {
  return (
    <div className={styles.header_wrapper}>
      <HeaderTop />
      <SearchForm />
    </div>
  );
};

export default HeaderMain;
