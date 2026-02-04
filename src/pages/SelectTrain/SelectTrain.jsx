import HeaderSelectTrain from "../../components/Header/HeaderSelectTrain/HeaderSelectTrain";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./SelectTrain.module.css";

const SelectTrain = () => {
  return (
    <div>
      <HeaderSelectTrain />
      <div className={styles.main}>
        <div className="container">
          <div className={styles.main_wrapper}>
            <SideBar />
            <main>оcновной контент</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTrain;
