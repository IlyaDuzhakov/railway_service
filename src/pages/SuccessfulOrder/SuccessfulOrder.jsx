import NavBar from "../../components/Header/NavBar/NavBar";
import HeaderLogo from "../../components/Header/HeaderLogo";
import styles from "../SelectTrain/SelectTrain.module.css";
import classes from './SuccessfulOrder.module.css'
import SuccessfulOrderPage from "../../components/SuccessfulOrderPage/SuccessfulOrderPage";
import BurgerMenu from "../../components/ui/BurgerMenu/BurgerMenu";

const SuccessfulOrder = () => {
  return (
    <div>
      <div className={classes.header_wrapper}>
        <HeaderLogo />
        <NavBar />
        < BurgerMenu />
      </div>
      <div className={`${styles.main} ${classes.main_height}`}>
        <div className="container">
          <div className={styles.main_wrapper}>
            <SuccessfulOrderPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulOrder;
