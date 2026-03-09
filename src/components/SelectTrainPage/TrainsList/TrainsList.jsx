import {  useContext } from "react";
import styles from "./TrainsList.module.css";

import TrainsPagination from "../TrainsPagination/TrainsPagination";
import { ShowTrainsContext, SelectTrainContext, TrainContext } from "../../../helpers/context.js";


// import shared from '../../SelectSeatsPage/TrainInfo/shared.module.css'

import TrainItem from "./TrainItem.jsx";

const TrainsList = () => {
 
  const [showTrains, setshowTrains] = useContext(ShowTrainsContext);


  return (
    <div className={styles.page}>
      <div className={styles.list}>
        {showTrains.map((el, index) => {
          return (
            <TrainItem el={el} index={index}/>
          );
        })}
      </div>
      <div className={styles.pagination_wrap}>
        {showTrains.length !== 0 ? <TrainsPagination /> : ""}
      </div>
    </div>
  );
};

export default TrainsList;
