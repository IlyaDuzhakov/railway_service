import styles from "./SeatsSelect.module.css";
import { formatDate, travelTime } from "../../../helpers/functions.js";
import TrainInfo from "../TrainInfo/TrainInfo.jsx";
import { travelTimeLong } from "../../../helpers/functions.js";
import CountTicket from "../CountTicket/CountTicket.jsx";
import TypeCarriage from "../TypeCarriage/TypeCarriage.jsx";


const SeatsSelect = ({ train }) => {
  // console.log(train.departure.from)
  return (
    <main>
      <p className={styles.choose_text}>Выбор мест</p>

      <div className={styles.content_seats}>
        <div className={styles.choose_train_wrapper}>
          <img
            className={styles.choose_train_arrow}
            src="/img/icons/choose_train.svg"
            alt="choose_train arrow"
          />
          <button className={styles.choose_train_btn}>
            <span className={styles.btn_text}>Выбрать другой поезд</span>
          </button>
        </div>
        <div className={styles.cap}>
          <img src="/img/icons/train_icon.svg" alt="train" />
          <div>
            <p className={styles.train_text}>116С</p>
            <p>
              <span>{train?.departure.from.city.name}</span>
              <img src="/img/icons/arrow_direction_black.svg" alt="" />
            </p>

            <p>{train?.departure.to.city.name}</p>
          </div>
          <TrainInfo train={train} show={false} />
          <div className={styles.train_time}>
            <img
              className={styles.clock_travel}
              src="/img/icons/clock_travel_time.svg"
              alt="clock"
            />
            <p className={styles.train_time_text}>
              {travelTimeLong(train?.departure.duration).map((el)=> {
                return <p>{el}</p>
              })}
              </p>
          </div>
        </div>
        <CountTicket />
        <div className={styles.card_line}></div>
        <TypeCarriage />
      </div>
    </main>
  );
};

export default SeatsSelect;
