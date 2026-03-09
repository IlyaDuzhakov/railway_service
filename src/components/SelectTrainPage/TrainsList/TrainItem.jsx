import styles from "./TrainsList.module.css";
import { formatCity, getTrain } from "../../../helpers/functions";
import TrainInfo from "../../SelectSeatsPage/TrainInfo/TrainInfo.jsx";
import { Link } from "react-router-dom";
import { SelectTrainContext, TrainContext } from "../../../helpers/context.js";
import { useContext } from "react";

const TrainItem = ({ el, index }) => {
  const [trains, setTrains] = useContext(TrainContext);
  const [train, setTrain] = useContext(SelectTrainContext);
  const seatsList = {
    first: "Люкс",
    second: "Купе",
    third: "Плацкарт",
    fourth: "Сидячий",
  };
  return (
    <div className={styles.train} key={index}>
      <div className={styles.train_direction}>
        <img
          className={styles.train_icon}
          src="/img/icons/train.svg"
          alt="train"
        />
        <div className={styles.train_number}>116С</div>
        <div className={styles.directions}>
          <div className={styles.from}>
            <p className={styles.from_text}>
              {formatCity(el.departure.from.city.name)}
            </p>
            <img src="/img/icons/arrow_direction_black.svg" alt="arrow_black" />
          </div>
          <div className={styles.to}>
            <p className={styles.from_text}>
              {formatCity(el.departure.to.city.name)}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.train_info}>
        <TrainInfo train={el} show={true} showDate={false} />
        <div className={styles.train_info_right}>
          {Object.entries(el.available_seats_info).map((item, index) => {
            const seatClass = item[0];
            const count = item[1];

            return (
              <div className={styles.seat_top} key={index}>
                <div key={seatClass} className={styles.seat_row}>
                  <div className={styles.seat_name}>{seatsList[seatClass]}</div>
                  <p className={styles.seat_count}>{count}</p>
                  <div className={styles.seat_price_wrapper}>
                    <span className={styles.seat_price_from}>от</span>
                    <span className={styles.seat_price}>{el.min_price}</span>
                    <img
                      className={styles.seat_coin}
                      src="/img/icons/coin.svg"
                      alt="coin"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className={styles.seat_bottom}>
            <img src="/img/icons/last_train_icons_grey.svg" alt="service" />
            <button
              className={styles.choose_seats}
              onClick={() => {
                setTrain(getTrain(trains, el.departure._id));
              }}
            >
              <Link to={`/select_seats/${el.departure._id}`}>
                Выбрать места
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainItem;
