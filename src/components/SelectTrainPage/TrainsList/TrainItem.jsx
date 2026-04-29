import styles from "./TrainsList.module.css";
import { formatCity, getTrain } from "../../../helpers/functions";
import TrainInfo from "../../SelectSeatsPage/TrainInfo/TrainInfo.jsx";
import { Link } from "react-router-dom";
import { SelectTrainContext, TrainContext } from "../../../helpers/context.js";
import { useContext } from "react";
import CustomButton from "../../ui/CustomButton/CustomButton.jsx";
import { formatPrice } from "../../../helpers/formatPrice.js";

const TrainItem = ({ el, index, type_btn }) => {
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
          src={process.env.PUBLIC_URL + "/img/icons/train.svg"}
          alt="train"
        />
        <div className={styles.train_number}>116С</div>
        <div className={styles.directions}>
          <div className={styles.from}>
            <p className={styles.from_text}>
              {formatCity(el.departure.from.city.name)}
            </p>
            <img className={styles.arrow}
              src={
                process.env.PUBLIC_URL + "/img/icons/arrow_direction_black.svg"
              }
              alt="arrow_black"
            />
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
                    <span className={styles.seat_price}>{formatPrice(el.min_price)}</span>
                    <img
                      className={styles.seat_coin}
                      src={process.env.PUBLIC_URL + "/img/icons/coin.svg"}
                      alt="coin"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className={styles.seat_bottom}>
            <img
              src={
                process.env.PUBLIC_URL + "/img/icons/last_train_icons_grey.svg"
              }
              alt="service"
            />
            <CustomButton
              variant={type_btn === "select" ? "outline" : "dark"}
              className={
                type_btn === "select"
                  ? styles.choose_seats
                  : styles.change_train_btn
              }
              onClick={() => {
                setTrain(getTrain(trains, el.departure._id));
              }}
            >
              {type_btn === "select" ? (
                <Link to={`/select_seats/${el.departure._id}`}>
                  Выбрать места
                </Link>
              ) : (
                <Link to="/select_train">Изменить</Link>
              )}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainItem;
