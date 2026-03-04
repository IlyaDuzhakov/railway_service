import styles from "./Passengers.module.css";
import HeaderSelectTrain from "../../components/Header/HeaderSelectTrain/HeaderSelectTrain";



import PassengersList from "../../components/PassengersPage/PassengersList/PassengersList.jsx";
import SideBarOrder from "../../components/SideBar/SideBarOrder/SideBarOrder.jsx";

const Passengers = () => {
  return (
    <div>
      <HeaderSelectTrain />
      <div className={styles.main}>
        <div className="container">
          <div className={styles.main_wrapper}>
            <SideBarOrder />

            <PassengersList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passengers;
