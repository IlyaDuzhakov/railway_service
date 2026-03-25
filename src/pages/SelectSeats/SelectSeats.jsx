import styles from "../SelectTrain/SelectTrain.module.css";
import HeaderSelectTrain from "../../components/Header/HeaderSelectTrain/HeaderSelectTrain";
import SideBar from "../../components/SideBar/SideBar";
import { SelectTrainContext } from "../../helpers/context.js";
import { useContext, useEffect } from "react";

import SeatsSelect from "../../components/SelectSeatsPage/SeatsSelect/SeatsSelect.jsx";

const SelectSeats = () => {
  const [train] = useContext(SelectTrainContext)
 
  useEffect(() => {
    localStorage.setItem("train", JSON.stringify(train));
  }, [train]);

  return (
    <div>
      <HeaderSelectTrain />
      <div className={styles.main}>
        <div className="container">
          <div className={styles.main_wrapper}>
            <SideBar />
            <SeatsSelect train={train} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSeats;
