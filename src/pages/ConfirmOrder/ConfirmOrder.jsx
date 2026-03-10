import styles from "./ConfirmOrder.module.css";
import ConfirmOrderPage from "../../components/ConfirmOrderPage/ConfirmOrderPage.jsx";
import HeaderSelectTrain from "../../components/Header/HeaderSelectTrain/HeaderSelectTrain";
import SideBarOrder from "../../components/SideBar/SideBarOrder/SideBarOrder";


const ConfirmOrder = () => {

  return (
    <div>
      <div>
        <HeaderSelectTrain />
        <div className={styles.main}>
          <div className="container">
            <div className={styles.main_wrapper}>
              <SideBarOrder />

              <ConfirmOrderPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;

/* <button><Link to='/successful_order'>Подтвердить</Link></button> */