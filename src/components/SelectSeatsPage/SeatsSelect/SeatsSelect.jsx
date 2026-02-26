import styles from "./SeatsSelect.module.css";
import { formatDate, travelTime } from '../../../helpers/functions.js'
import TrainInfo from "../TrainInfo/TrainInfo.jsx";

const SeatsSelect = ({ train }) => {
    // console.log(train.departure.from)
  return (
    <main>
      <p className={styles.choose_text}>Выбор мест</p>

      <div className={styles.content_seats}>
        <div>
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
            <p>116С</p>
            <p>
              <span>{train?.departure.from.city.name}</span>
              <img src="/img/icons/arrow_direction_black.svg" alt="" />
            </p>

            <p>{train?.departure.to.city.name}</p>
          </div>
           <TrainInfo />
        </div>
        <p>Количество билетов</p>
        <div className={styles.passengers_row}>
          <div className={styles.passengers_card}>
            <div className={styles.passengers_wr}>
              <input
                className={styles.passengers_input}
                type="number"
                placeholder="Взрослых — 2"
              />
              <span>Можно добавить еще 3 пассажиров </span>
            </div>
          </div>
          <div className={styles.passengers_card}>
            <div className={styles.passengers_wr}>
              <input
                className={styles.passengers_input}
                type="number"
                placeholder="Детских — 1"
              />
              <span>
                Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у
                взрослых, но дешевле в среднем на 50-65%
              </span>
            </div>
          </div>
          <div className={styles.passengers_card}>
            <input
              className={styles.passengers_input}
              type="number"
              placeholder="Детских «без места» — 0"
            />
          </div>
        </div>
        <p>Тип вагона</p>
        <div className={styles.icons_wrapper}>
          <img src="/img/icons/seat_place.svg" alt="seat" />
          <img
            src="/img/icons/train_compartment_place.svg"
            alt="train compartment"
          />
          <img src="/img/icons/reserved_seat_place.svg" alt="reserved seat" />
          <img src="/img/icons/star.svg" alt="star" />
        </div>
      </div>
    </main>
  );
};

export default SeatsSelect;
