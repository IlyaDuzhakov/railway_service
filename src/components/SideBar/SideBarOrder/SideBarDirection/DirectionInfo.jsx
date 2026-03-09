import TrainInfo from "../../../SelectSeatsPage/TrainInfo/TrainInfo";
import styles from "./SideBarDirection.module.css";
import { SelectTrainContext } from "../../../../helpers/context";
import { useContext } from "react";
import { formatCity } from "../../../../helpers/functions";

const DirectionInfo = () => {

    const [train, setTrain] = useContext(SelectTrainContext)
  return (
    <div className={styles.bottom}>
      <div className={styles.title}>
        <div className={styles.city}>
          <p className={styles.train_text}>№ Поезда</p>
          <p className={styles.train_number}>116c</p>
        </div>
        <div className={styles.city}>
          <p className={styles.train_text}>Название</p>
          <div className={styles.direction_train}>
            <p className={styles.city_from}>{formatCity(train.departure.from.city.name)}</p>
            <p className={styles.city_to}>{formatCity(train.departure.to.city.name)}</p>
          </div>
        </div>
      </div>
      <TrainInfo show={true} showDate={true} train={train}/>
    </div>
  );
};

export default DirectionInfo;
