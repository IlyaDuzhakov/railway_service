import { useState, useEffect, useContext } from "react";
import styles from "./TrainsList.module.css";
import { formatDate, travelTime } from "../../../helpers/functions";
import TrainsPagination from "../TrainsPagination/TrainsPagination";
import {TrainContext} from '../../../helpers/context.js'


const TrainsList = () => {
  const [trains, setTrains] = useContext(TrainContext)
  const seatsList = {
    first: "Люкс",
    second: "Купе",
    third: "Плацкарт",
    fourth: "Сидячий",
  };

  return (
    <div>
      {trains.map((el, index) => {
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
                    {el.departure.from.city.name}
                  </p>
                  <img
                    src="/img/icons/arrow_direction_black.svg"
                    alt="arrow_black"
                  />
                </div>
                <div className={styles.to}>
                  <p className={styles.from_text}>
                    {el.departure.to.city.name}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.train_info}>
              <div className={styles.train_info_left}>
                <div className={styles.train_item}>
                  <div className={styles.train_item_from}>
                    <p className={styles.departure_datetime}>
                      {formatDate(el.departure.from.datetime)}
                    </p>
                    <p className={styles.landing_stations}>
                      {el.departure.from.city.name}
                    </p>
                    <p className={styles.station_name}>
                      {el.departure.from.railway_station_name} вокзал
                    </p>
                  </div>
                  <div className={styles.train_item_arrow}>
                    <p className={styles.travel_time}>
                      {travelTime(el.departure.duration)}
                    </p>
                    <img
                      className={styles.orange_arrow}
                      src="/img/icons/arrow_right.svg"
                      alt="arrow_right"
                    />
                  </div>
                  <div className={styles.train_item_to}>
                    <p className={styles.departure_datetime}>
                      {formatDate(el.departure.to.datetime)}
                    </p>
                    <p className={styles.landing_stations}>
                      {el.departure.to.city.name}
                    </p>
                    <p className={styles.station_name}>
                      {el.departure.to.railway_station_name} вокзал
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.train_info_right}>
                {Object.entries(el.available_seats_info).map((item) => {
                  const seatClass = item[0];
                  const count = item[1];

                  return (
                    <div className={styles.seat_top}>
                    <div key={seatClass} className={styles.seat_row}>
                      <div className={styles.seat_name}>
                        {seatsList[seatClass]}
                      </div>
                      <p className={styles.seat_count}>{count}</p>
                       <div className={styles.seat_price_wrapper}>
                      <span className={styles.seat_price_from}>от</span>
                      <span className={styles.seat_price}>
                        {el.min_price}
                      </span>
                      <img className={styles.seat_coin} src="/img/icons/coin.svg" alt="coin" />
                      </div>
                      </div>
                    </div>
                  );
                })}
                      <div className={styles.seat_bottom}>
                      <img src="/img/icons/last_train_icons_grey.svg" alt="service" />
                      <button className={styles.choose_seats}>Выбрать места</button>
                      </div>
              </div>
            </div>
          </div>
        );
    })}
    <TrainsPagination />
    </div>
  );
};

export default TrainsList;
