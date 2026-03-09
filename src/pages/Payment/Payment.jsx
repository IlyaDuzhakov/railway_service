import { Link } from "react-router-dom";
import PaymentPage from "../../components/PaymentPage/PaymentPage.jsx";
import HeaderSelectTrain from "../../components/Header/HeaderSelectTrain/HeaderSelectTrain";
import SideBarOrder from "../../components/SideBar/SideBarOrder/SideBarOrder";
import styles from "../Passengers/Passengers.module.css";

const Payment = () => {
  return (
    <div>
      <div>
        <HeaderSelectTrain />
        <div className={styles.main}>
          <div className="container">
            <div className={styles.main_wrapper}>
              <SideBarOrder />

              
                <PaymentPage />

              
            </div>
          </div>
        </div>
      </div>
                
    </div>
  );
};

export default Payment;
